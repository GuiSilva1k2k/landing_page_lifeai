import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  @ViewChild('hamburger') hamburger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;

  toggleMenu() {
    this.hamburger.nativeElement.classList.toggle('active');
    this.navMenu.nativeElement.classList.toggle('active');
  }

  closeMenu() {
    this.hamburger.nativeElement.classList.remove('active');
    this.navMenu.nativeElement.classList.remove('active');
  }
}