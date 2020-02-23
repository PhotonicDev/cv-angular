import { Component, OnInit, Input } from '@angular/core'
import { ItemRating } from './item-rating'

@Component({
  selector: 'app-item-rating',
  templateUrl: './item-rating.component.html',
  styleUrls: ['./item-rating.component.scss'],
})
export class ItemRatingComponent implements OnInit {
  @Input() itemRating: ItemRating
  constructor() {}

  ngOnInit(): void {}
}
