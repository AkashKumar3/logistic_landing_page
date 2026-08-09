import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

interface Fact {
  icon: string;
  title: string;
  value: number;
  currentValue: number;
}

@Component({
  selector: 'app-our-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-facts.html',
  styleUrl: './our-facts.css',
})
export class OurFacts implements AfterViewInit, OnDestroy {

  @ViewChild('factsSection') factsSection!: ElementRef;

  facts: Fact[] = [
    { icon: 'fa-solid fa-award', title: 'Quality Service', value: 100, currentValue: 0 },
    { icon: 'fa-solid fa-face-smile', title: 'Customer Satisfaction', value: 100, currentValue: 0 },
    { icon: 'fa-solid fa-truck-fast', title: 'On-Time Delivery', value: 99, currentValue: 0 },
    { icon: 'fa-solid fa-trophy', title: 'Years Experience', value: 5, currentValue: 0 }
  ];

  private observer!: IntersectionObserver;
  private intervalId: any;
  private hasAnimated = false;


  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    console.log('🔥 Facts component loaded');

    this.observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
        }

      },
      { threshold: 0.4 }
    );

    this.observer.observe(this.factsSection.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
    clearInterval(this.intervalId);
  }

  animateCounters() {

    this.intervalId = setInterval(() => {

      let done = true;
      console.log('counter tick');

      this.facts.forEach(fact => {

        if (fact.currentValue < fact.value) {

          const step = Math.ceil(fact.value / 40);
          fact.currentValue += step;

          if (fact.currentValue > fact.value) {
            fact.currentValue = fact.value;
          }

          done = false;
        }

      });
      this.cdr.detectChanges();
      if (done) {
        clearInterval(this.intervalId);
      }

    }, 30);

  }
}