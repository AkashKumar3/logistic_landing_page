import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../layouts/footer/footer';
import { Navbar } from '../../layouts/navbar/navbar';

@Component({
  selector: 'app-director-message-page',
  imports: [RouterLink, Footer, Navbar],
  templateUrl: './director-message-page.html',
  styleUrl: './director-message-page.css',
})
export class DirectorMessagePage { }
