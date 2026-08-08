import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
    title: string;
}

@Component({
    selector: 'app-our-product',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './our-product.html',
    styleUrl: './our-product.css',
})
export class OurProduct {
    products: Product[] = [
        { title: 'Express FCL' },
        { title: 'Break Bulk LCL' },
        { title: 'Aggregation LCL' },
        { title: 'E-Commerce' },
        { title: 'Warehousing' }
    ];
}