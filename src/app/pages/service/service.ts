import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../../layouts/navbar/navbar';
import { Footer } from '../../layouts/footer/footer';

@Component({
  selector: 'app-service',
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  services = [

    {
      title: 'Express FCL',
      image: 'assets/images/services/express.png',
      description:
        ''
    },

    {
      title: 'Break Bulk LCL',
      image: 'assets/images/services/breakBulk.png',
      description:
        ''
    },

    {
      title: 'Aggregation LCL',
      image: 'assets/images/services/aggregation.png',
      description:
        ''
    },
    {
      title: 'E-Commerce',
      image: 'assets/images/services/e-commerce.png',
      description:
        ''
    },


    {
      title: 'Warehousing',
      image: 'assets/images/services/warehousing.png',
      description:
        ''
    }

  ];

}
