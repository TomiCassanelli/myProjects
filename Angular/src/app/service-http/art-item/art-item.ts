import { Component, input } from '@angular/core';
import { Artwork } from '../../models/artwork.model';

@Component({
  selector: 'app-art-item',
  imports: [],
  templateUrl: './art-item.html',
  styleUrl: './art-item.scss'
})
export class ArtItem {
  inputValue = input<Artwork>();
  isExpanded = false;

  getDescription(): string {
    return this.inputValue()?.description || 'No description available.' + ' Origin: ' + (this.inputValue()?.place_of_origin || 'Unknown');
  }

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }

  isDescriptionLong(): boolean {
    const description = this.inputValue()?.description || '';
    return description.length > 1000;
  }

  getShortDescription(): string {
    const description = this.inputValue()?.description || 'No description available.';
    if (this.isDescriptionLong() && !this.isExpanded) {
      return description.slice(0, 1000) + '...';
    }
    return description;
  }
}