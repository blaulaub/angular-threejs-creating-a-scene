import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PerspectiveCamera, Scene } from 'three';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {

  // not available in ngOnInit
  // available in ngAfterViewInit
  @ViewChild('threeFrame') threeFrame!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.threeFrame.nativeElement.style.background = 'green';
    this.threeFrame.nativeElement.style.height

    const scene = new Scene();

    const viewAspectRatio = 1.0;
    const camera = new PerspectiveCamera(75, viewAspectRatio, 0.1, 1000);
  }
}
