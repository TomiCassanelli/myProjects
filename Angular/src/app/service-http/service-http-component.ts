import { Component, inject } from '@angular/core';
import { ExampleService } from '../services/example-service';
import { ArtItem } from './art-item/art-item';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-service-http',
  imports: [ArtItem, Header],
  templateUrl: './service-http-component.html',
  styleUrl: './service-http-component.scss',
})
export class ServiceHttpComponent {
  //Injecting the ExampleService to fetch data
  exampleService = inject(ExampleService);
}
