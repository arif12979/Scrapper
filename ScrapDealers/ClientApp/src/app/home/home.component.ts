import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [NgbCarouselConfig]
})
export class HomeComponent {

  images = [
    { title: '', short: '', src: "../../assets/img2.jpeg" },
    { title: '', short: '', src: "../../assets/img3.jpeg" },
    { title: '', short: '', src: "../../assets/img4.jpeg" },
    { title: '', short: '', src: "../../assets/img5.jpeg" },
    { title: '', short: '', src: "../../assets/img6.jpeg" },
    { title: '', short: '', src: "../../assets/img7.jpeg" },
    { title: '', short: '', src: "../../assets/img8.jpeg" },
    { title: '', short: '', src: "../../assets/img9.jpeg" },
    { title: '', short: '', src: "../../assets/img10.jpeg" },
    { title: '', short: '', src: "../../assets/img11.jpeg" },
    { title: '', short: '', src: "../../assets/img12.jpeg" },
    { title: '', short: '', src: "../../assets/img13.jpeg" },
    { title: '', short: '', src: "../../assets/img14.jpeg" },
    { title: '', short: '', src: "../../assets/img15.jpeg" },
    { title: '', short: '', src: "../../assets/img16.jpeg" },
    { title: '', short: '', src: "../../assets/img17.jpeg" },
    { title: '', short: '', src: "../../assets/img18.jpeg" },
    { title: '', short: '', src: "../../assets/img19.jpeg" },
    { title: '', short: '', src: "../../assets/img20.jpeg" },
    { title: '', short: '', src: "../../assets/img21.jpeg" },
    { title: '', short: '', src: "../../assets/img22.jpeg" },
    { title: '', short: '', src: "../../assets/img4.jpeg" }
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;



  }
}
