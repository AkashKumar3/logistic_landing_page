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
      title: 'Contractual FTL Services',
      image: 'assets/images/yls_truck_1.png',
      description:
        'YLS Logistics provides dedicated Contractual Full Truck Load (FTL) services designed for businesses requiring consistent and long-term transportation support. Through assured vehicle availability, optimized route planning, and professional fleet management, we ensure seamless cargo movement, operational efficiency, and dependable deliveries while helping clients streamline.'
    },

    {
      title: 'Spot & Ad-hoc FTL',
      image: 'assets/images/yls_warehouse.png',
      description:
        'Our Spot and Ad-hoc FTL services offer flexible transportation solutions for urgent, seasonal, or unplanned shipment requirements. With quick vehicle deployment and efficient coordination, YLS Logistics ensures timely cargo movement across diverse routes, enabling businesses to respond effectively to fluctuating logistics demands without long-term commitments.'
    },

    {
      title: 'Time-Critical Road Freight',
      image: 'assets/images/yls_truck_2.png',
      description:
        'For shipments that demand strict delivery schedules, our Time-Critical Road Freight service provides fast, reliable, and closely monitored transportation solutions. Leveraging dedicated vehicles, proactive route management, and real-time shipment tracking, we ensure that high-priority cargo reaches its destination safely and within the required timeframe.'
    },

    {
      title: 'Multi-Point Pickup & Delivery',
      image: 'assets/images/yls_truck_1.png',
      description:
        'YLS Logistics specializes in Multi-Point Pickup and Delivery services, enabling efficient movement of goods from multiple origins to multiple destinations within a single transportation cycle. Our structured planning, route optimization, and operational expertise help reduce transit time, improve efficiency, and ensure smooth supply chain execution. so, its important and crucial.'
    }

  ];

}
