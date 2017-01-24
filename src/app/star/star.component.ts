import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nat-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit() {
  }

}
