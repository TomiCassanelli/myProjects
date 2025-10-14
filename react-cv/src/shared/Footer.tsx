import React from 'react';

export default function Footer() {
  const styles: Record<string, React.CSSProperties> = {
    footer: {
      padding: '12px',
      textAlign: 'center',
      borderTop: '1px solid #ccc',
    },
    container: {
      margin: '0 auto',
    }
  }

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>UCC - Taller de Desarrollo Frontend</div>
    </footer>
  )
}
