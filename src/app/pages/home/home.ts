import { Component } from '@angular/core';
import { Navbar } from '../../layouts/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Service } from '../../components/service/service';
import { OurFacts } from '../../components/our-facts/our-facts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, Service, OurFacts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
