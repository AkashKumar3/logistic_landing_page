import { Component } from '@angular/core';
import { Navbar } from '../../layouts/navbar/navbar';
import { Footer } from '../../layouts/footer/footer';

@Component({
  selector: 'app-about',
  imports: [Navbar, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About { }
