import { Component } from '@angular/core';
import { Navbar } from '../../layouts/navbar/navbar';
import { Footer } from '../../layouts/footer/footer';

@Component({
  selector: 'app-gallary',
  imports: [Navbar, Footer],
  templateUrl: './gallary.html',
  styleUrl: './gallary.css',
})
export class Gallary { }
