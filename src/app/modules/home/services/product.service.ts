import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      pk: 987,
      name: 'Reward Name',
      points: 150,
      display_img_url: 'https://picsum.photos/id/237/200/200',
      quantity: 14,
      valid_until: '2024-10-21T00:00:00',
      low_quanitity: 10,
    },
    {
      pk: 187,
      name: 'Cafe Coffee Day',
      points: 250,
      display_img_url: 'https://picsum.photos/id/239/200/200',
      quantity: 0,
      valid_until: '2024-04-11T00:00:00',
      low_quanitity: 22,
    },
    {
      pk: 135,
      name: 'Peter England',
      points: 390,
      display_img_url: 'https://picsum.photos/id/215/200/200',
      quantity: 25,
      valid_until: '2024-12-31T00:00:00',
      low_quanitity: 13,
    },
    {
      pk: 271,
      name: 'Raymond',
      points: 500,
      display_img_url: '',
      quantity: 29,
      valid_until: '2024-12-31T00:00:00',
      low_quanitity: 28,
    },
    {
      pk: 557,
      name: 'Decathlon',
      points: 300,
      display_img_url: 'https://picsum.photos/id/270/200/200',
      quantity: 30,
      valid_until: '2024-12-31T00:00:00',
      low_quanitity: 32,
    },
    {
      pk: 768,
      name: 'Zara',
      points: 200,
      display_img_url: 'https://picsum.photos/id/250/200/200',
      quantity: 14,
      valid_until: '2024-12-31T00:00:00',
      low_quanitity: 10,
    },
    {
      pk: 987,
      name: 'Gucci',
      points: 150,
      display_img_url: 'https://picsum.photos/id/210/200/200',
      quantity: 50,
      valid_until: '2024-12-31T00:00:00',
      low_quanitity: 60,
    },
    {
      pk: 987,
      name: 'Bata',
      points: 360,
      display_img_url: '',
      quantity: 10,
      valid_until: '2024-12-31T00:00:00',
      low_quanitity: 20,
    },
  ];

  getSampleData() {
    return this.products
  }
}
