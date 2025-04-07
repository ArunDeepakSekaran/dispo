import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  @ViewChild('productCard', { read: ElementRef }) productContainer!: ElementRef;

  reviews:any = [
    { content: 'Great quality products! Highly recommended.', author: 'Dr. A. Sharma' },
    { content: 'Affordable and reliable medical disposables.', author: 'Dr. R. Kumar' },
    { content: 'Fast delivery and excellent customer service.', author: 'Dr. S. Patel' },
  ];

  products:any = [
    { name: 'Surgical Gloves', image: 'assets/img_1.jpeg' },
    { name: 'Face Masks', image: 'assets/img_2.jpeg' },
    { name: 'Disposable Gowns', image: 'assets/img_3.jpeg' },
    { name: 'IV Cannula', image: 'assets/img_4.jpeg' },
    { name: 'Cannula', image: 'assets/img_5.jpeg' },
    { name: 'Surgical Gloves', image: 'assets/img_1.jpeg' },
    { name: 'Face Masks', image: 'assets/img_2.jpeg' },
    { name: 'Disposable Gowns', image: 'assets/img_3.jpeg' },
  ];

  stars = [1, 2, 3, 4];

  testimonials = [
    {
      name: 'Josh',
      avatar: 'assets/avatar1.png',
      message: 'Absolutely love Dispo Doc’s products! The quality is top-notch, and I feel healthier already. Fast delivery and great customer support. Highly recommended!'
    },
    {
      name: 'John',
      avatar: 'assets/avatar1.png',
      message: 'Excellent service! The supplements are effective, and I appreciate the natural ingredients. Dispo Doc truly cares about customer satisfaction. Will buy again!'
    },
    {
      name: 'Joseph',
      avatar: 'assets/avatar1.png',
      message: 'Dispo Doc never disappoints! Their healthcare products are reliable, safe, and affordable. Plus, the packaging is great. My go-to brand for wellness!'
    }
  ];

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  // scrollToSection(sectionId: string) {
  //   document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  // }

  scrollToSection(sectionId: string) {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  scrollLeft() {
    if (this.productContainer) {
      this.productContainer.nativeElement.scrollLeft -= 250; // Adjust scroll amount
    }
  }

  scrollRight() {
    if (this.productContainer) {
      this.productContainer.nativeElement.scrollLeft += 250;
    }
  }
  
}
