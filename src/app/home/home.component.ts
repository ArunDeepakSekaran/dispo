import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

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
    { name: 'Syringes', image: 'assets/syringe.jpeg' },
    { name: 'IV infusion sets', image: 'assets/infusion_set.jpeg' },
    { name: 'IV cannula', image: 'assets/iv_set_canula.jpeg' },
    { name: 'Disposable gloves', image: 'assets/disposable_gloves.jpeg' },
    { name: 'Scalp vein set', image: 'assets/scalp_vein.jpeg' },
    { name: '3 way stopcock', image: 'assets/3_way_stopcock.jpeg' },
    { name: 'Ear loop face mask', image: 'assets/ear_loop_face_mask.jpeg' },
    { name: 'Foleys catheters', image: 'assets/foleys_catheter.jpeg' },
    { name: 'Ryles tube', image: 'assets/ryles_tube.jpeg' },
    { name: 'Urine collection bags', image: 'assets/uro_bag.jpeg' },
  ];

  stars = [1, 2, 3, 4, 5];

  testimonials:any = [
    {
      name: 'Dr. Kavi Thendral. Medical Oncologist, Nobal Cancer Care, Tanjore',
      avatar: 'assets/avatar1.png',
      message: 'We have been using Dispodoc’s syringes and gloves in our clinic now. The consistent quality and reliability make them our top choice for daily procedures.',
      rating: 5
    },
    {
      name: 'Dr. R.M Kartick. Dr. Karthick Clinic, Pennagaram, Dharmapuri',
      avatar: 'assets/avatar1.png',
      rating: 5,
      message: 'For day-to-day medical use, cost-effectiveness is critical—but not at the expense of safety. With this brand, we’ve found the perfect balance. Durable, dependable, and well within budget.'
    },
    {
      name: 'Dr. Sowbaringa. Glitz cosmo skin & hair clinic, Dharmapuri',
      avatar: 'assets/avatar1.png',
      message: 'Gloves are nice to use.',
      rating: 4  
    }
  ];

  imageUrls: string[] = [];
  error: string = '';
  loading: boolean = true;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    console.log('Method not implemented.');

    this.fetchImages();
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

  async fetchImages() {
    // const folderRef = ref(this.storage, 'product_images/'); // 👈 same as React
    // try {
    //   const res = await listAll(folderRef);
    //   const urls = await Promise.all(
    //     res.items.map(itemRef => getDownloadURL(itemRef))
    //   );
    //   this.imageUrls = urls;
    // } catch (err: any) {
    //   console.error('Error fetching images:', err);
    //   this.error = err.message;
    // } finally {
    //   this.loading = false;
    // }

    try{
      const folderRef = this.storage.ref('product_images/');
      folderRef.listAll().toPromise().then((res: any) => {
        res.items.forEach((item: any) => {
          item.getDownloadURL().then((url:any) => {
            this.imageUrls.push(url);
          });
        });
      });
    } catch (err: any) {
      console.error('Error fetching images:', err);
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  }
  
}
