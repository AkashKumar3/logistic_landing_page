import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../layouts/footer/footer';

@Component({
  selector: 'app-director-message-page',
  imports: [RouterLink, Footer],
  templateUrl: './director-message-page.html',
  styleUrl: './director-message-page.css',
})
export class DirectorMessagePage { }
