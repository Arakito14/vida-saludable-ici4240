import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.sass'],
})
export class HomeScreenComponent implements OnInit {

  sliders:any[]=[
    {
      name:'1',
      img:'assets/slider1.jpeg',
      desc:'slider1',
    },
    {
      name:'2',
      img:'assets/slider2.jpeg',
      desc:'slider2',
    },
    {
      name:'3',
      img:'assets/slider3.jpeg',
      desc:'slider3',
    },
  ]

  constructor(private_config:NgbCarouselConfig) { 
    private_config.interval = 3000;
    private_config.pauseOnHover = true;
    private_config.showNavigationArrows = true;
  }

  ngOnInit(): void {
  }

}
