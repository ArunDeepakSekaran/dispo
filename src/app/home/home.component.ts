import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  reviews:any = [
    { content: 'Great quality products! Highly recommended.', author: 'Dr. A. Sharma' },
    { content: 'Affordable and reliable medical disposables.', author: 'Dr. R. Kumar' },
    { content: 'Fast delivery and excellent customer service.', author: 'Dr. S. Patel' },
  ];

  products:any = [
    { name: 'Surgical Gloves', image: 'assets/images/gloves.jpg' },
    { name: 'Face Masks', image: 'assets/images/mask.jpg' },
    { name: 'Disposable Gowns', image: 'assets/images/gown.jpg' },
    { name: 'IV Cannula', image: 'assets/images/cannula.jpg' },
  ];

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  
}
