import { Component } from '@angular/core';
import { Navbar } from '../../layouts/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Service } from '../service/service';
import { OurFacts } from '../../components/our-facts/our-facts';
import { DirectorMessage } from '../../components/director-message/director-message';
import { Footer } from '../../layouts/footer/footer';
import { Clients } from '../../components/clients/clients';
import { OurProduct } from '../../components/our-product/our-product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, Footer, OurFacts, DirectorMessage, Clients, OurProduct],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
