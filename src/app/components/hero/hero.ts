import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {

  heroImages = [
    'assets/images/yls_truck_1.png',
    'assets/images/yls_truck_2.png',
    'assets/images/yls_warehouse.png'
  ];

  currentSlide = 0;

  shipments = 0;
  countries = 0;
  success = 0;

  private intervalId: any;
  private counterInterval: any;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.startSlider();
    this.animateCounters();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    clearInterval(this.counterInterval);
  }

  /* SLIDER */
  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
      this.cdr.markForCheck(); // 🔥 FORCE UPDATE
    }, 5000);
  }

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.heroImages.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.heroImages.length) %
      this.heroImages.length;
  }

  /* COUNTERS */
  animateCounters() {

    let s = 0;
    let c = 0;
    let p = 0;

    this.counterInterval = setInterval(() => {

      if (s < 12000) s += 200;
      if (c < 85) c += 2;
      if (p < 99) p += 1;

      this.shipments = s;
      this.countries = c;
      this.success = p;

      this.cdr.markForCheck(); // 🔥 IMPORTANT

      if (s >= 12000 && c >= 85 && p >= 99) {
        clearInterval(this.counterInterval);
      }

    }, 30);

  }
}