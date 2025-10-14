import { useCallback, useEffect, useState } from 'react'
import { api } from '@/services/api'
import type { ArtworksResponse, Artwork } from '@/types/artwork'

export function useArtworks() {
  const [page, setPage] = useState(1)
  const [maxPages, setMaxPages] = useState(1)
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchArtworks = useCallback(async (pageNum: number) => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({
        page: String(pageNum),
        fields: ['id','title','description','place_of_origin','image_id'].join(','),
        limit: '3'
      })
      const { data } = await api.get<ArtworksResponse>(`/artworks?${params.toString()}`)
      setArtworks(data.data)
      setMaxPages(Math.max(1, data.pagination.total_pages || 1))
    } catch (e: any) {
      setError(e?.message ?? 'Error fetching artworks')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchArtworks(page) }, [page, fetchArtworks])

  const nextPage = () => setPage(p => Math.min(maxPages, p+1))
  const prevPage = () => setPage(p => Math.max(1, p-1))

  return { page, maxPages, artworks, loading, error, nextPage, prevPage, setPage }
}