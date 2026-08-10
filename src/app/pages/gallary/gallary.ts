import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../../layouts/navbar/navbar';
import { Footer } from '../../layouts/footer/footer';

@Component({
  selector: 'app-gallary',
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './gallary.html',
  styleUrl: './gallary.css',
})
export class Gallary {
  filters = [
    { label: 'All', value: 'all' },
    { label: 'Fleet', value: 'fleet' },
    { label: 'Warehouse', value: 'warehouse' },
  ];

  activeFilter: string = 'all';

  images = [
    {
      src: 'assets/images/galary/vehile1.jpeg',
      title: 'Fleet Vehicle 1',
      category: 'Our modern delivery fleet ready for the road.',
      tag: 'Fleet',
      filter: 'fleet',
    },
    {
      src: 'assets/images/galary/vehile2.jpeg',
      title: 'Fleet Vehicle 2',
      category: 'Heavy-duty transport for bulk shipments.',
      tag: 'Fleet',
      filter: 'fleet',
    },
    {
      src: 'assets/images/galary/vehile3.jpeg',
      title: 'Fleet Vehicle 3',
      category: 'Reliable last-mile delivery solutions.',
      tag: 'Fleet',
      filter: 'fleet',
    },
    {
      src: 'assets/images/galary/vehile4.jpeg',
      title: 'Fleet Vehicle 4',
      category: 'Long-haul trucks built for efficiency.',
      tag: 'Fleet',
      filter: 'fleet',
    },
    {
      src: 'assets/images/galary/vehile5.jpeg',
      title: 'Fleet Vehicle 5',
      category: 'Our cargo fleet parked at the depot.',
      tag: 'Fleet',
      filter: 'fleet',
    },
  ];

  get filteredImages() {
    if (this.activeFilter === 'all') {
      return this.images;
    }
    return this.images.filter((image) => image.filter === this.activeFilter);
  }

  setFilter(value: string) {
    this.activeFilter = value;
  }
}