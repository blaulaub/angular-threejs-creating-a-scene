import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';


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
    const scene = new Scene();

    const viewAspectRatio = 1.0;
    const camera = new PerspectiveCamera(75, viewAspectRatio, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(300, 300);  // TODO: infer
    this.threeFrame.nativeElement.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
}
