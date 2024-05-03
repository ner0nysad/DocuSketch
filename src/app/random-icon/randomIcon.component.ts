import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHeart,
  faStar,
  faSmile,
  faHouse,
  faUser,
  faCheck,
  faBomb,
  faBolt,
  faGhost,
  faGift,
  faTrash,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random-icon',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './randomIcon.component.html',
  styleUrl: './randomIcon.component.css',
})
export class RandomIconComponent {
  randomIcon: any = null;
  loading: boolean = false;
  iconLibrary = [
    faHeart,
    faStar,
    faSmile,
    faHouse,
    faUser,
    faCheck,
    faBomb,
    faBolt,
    faGhost,
    faGift,
    faTrash,
    faLock,
  ];

  getRandomIcon() {
    this.loading = true;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.iconLibrary.length);
      this.randomIcon = this.iconLibrary[randomIndex];
      this.loading = false;
    }, 3000);
  }
}
