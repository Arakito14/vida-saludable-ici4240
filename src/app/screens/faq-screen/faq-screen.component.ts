import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-screen',
  templateUrl: './faq-screen.component.html',
  styleUrls: ['./faq-screen.component.sass']
})
export class FaqScreenComponent implements OnInit {

  constructor(private_config:NgbAccordionConfig) { }

  ngOnInit(): void {
  }

}
