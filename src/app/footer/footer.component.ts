import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @ViewChild('mapIframe', { static: false }) mapIframe!: ElementRef<HTMLIFrameElement>;

  latitude:any = 12.666174;
  longitude:any = 79.277519;

  constructor(){
    
  }

  // loadMap(){
  //   // Dynamic latitude and longitude

  //   let latitude = 12.666174;

  //   let longitude = 79.277519;

  //   // Construct the Google Maps embed URL

  //   let mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;

  //   // Set the iframe source

  //   document.getElementById("mapIframe").src = mapUrl;
  // }

  ngAfterViewInit(): void {
    // Construct the Google Maps embed URL after the view has been initialized
    const mapUrl = `https://www.google.com/maps?q=${this.latitude},${this.longitude}&hl=es;z=14&output=embed`;

    // Ensure the iframe is available
    if (this.mapIframe) {
      this.mapIframe.nativeElement.src = mapUrl;
    }
  }

}
