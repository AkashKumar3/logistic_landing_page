import { Component } from '@angular/core';
import { Navbar } from '../../layouts/navbar/navbar';
import { Footer } from '../../layouts/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact { }
