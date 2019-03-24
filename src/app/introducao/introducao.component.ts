import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css'],
  providers: [NgbCarouselConfig] 
})
export class IntroducaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
