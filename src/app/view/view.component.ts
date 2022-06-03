import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {

  @ViewChild('threeFrame') threeFrame!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.threeFrame.nativeElement.style.background = 'green';
  }
}
