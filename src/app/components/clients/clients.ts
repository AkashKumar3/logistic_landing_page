import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {
  clients = [

    {
      name: 'Blinkit',
      logo: 'assets/images/clients/blinkit.svg'
    },

    {
      name: 'Zepto',
      logo: 'assets/images/clients/zepto.svg'
    },

    {
      name: 'Zomato',
      logo: 'assets/images/clients/Zomato.avif'
    },

    {
      name: 'Flipkart',
      logo: 'assets/images/clients/flipkart.svg'
    },

    {
      name: 'Swiggy',
      logo: 'assets/images/clients/swiggy.svg'
    },

    {
      name: 'Instakart',
      logo: 'assets/images/clients/instakart.png'
    },

    {
      name: 'Zecode',
      logo: 'assets/images/clients/zecode.png'
    },

    {
      name: 'Big Basket',
      logo: 'assets/images/clients/bigbasket.png'
    },

    {
      name: 'Woodland',
      logo: 'assets/images/clients/woodland.png'
    },

    {
      name: 'Vishal Mega Mart',
      logo: 'assets/images/clients/vishalmegamart.svg'
    },

    {
      name: 'Lividus Pharmaceutical',
      logo: 'assets/images/clients/lividus.png'
    },

    {
      name: 'Nutech',
      logo: 'assets/images/clients/nutech.png'
    },

    {
      name: 'Reliance',
      logo: 'assets/images/clients/reliance.avif'
    },

    {
      name: 'More Retail',
      logo: 'assets/images/clients/more-retail.png'
    }

  ];


}
