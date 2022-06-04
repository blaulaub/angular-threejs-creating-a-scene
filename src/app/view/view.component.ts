import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene, TextureLoader, WebGLRenderer } from 'three';


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

    // siehe https://wmts.geo.admin.ch/EPSG/2056/1.0.0/WMTSCapabilities.xml
    const jpgUrl = 'https://wmts100.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/2056/23/509/204.jpeg';

    const geometry = new PlaneGeometry(256, 256);  // instead of BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial();
    material.map = new TextureLoader().load(jpgUrl);
    const tile = new Mesh(geometry, material);
    scene.add(tile);

    camera.position.z = 256;

    function animate() {
      requestAnimationFrame(animate);
      tile.rotation.x += 0.01;
      tile.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
}
