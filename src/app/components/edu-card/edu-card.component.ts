import { Component, OnInit, Input } from '@angular/core'
import { EduCard } from './edu-card'

@Component({
  selector: 'app-edu-card',
  templateUrl: './edu-card.component.html',
  styleUrls: ['./edu-card.component.scss'],
})
export class EduCardComponent implements OnInit {
  @Input() cardData: EduCard
  constructor() {}

  ngOnInit(): void {}
}
