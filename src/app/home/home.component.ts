import { Component } from '@angular/core';
import { City } from '../city';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weatherLocationList: City[] = [{
    id: 0,
    name: "Los Angeles",
    weather: "Sunny",
    degree: 70
  },
  {
    id: 1,
    name: "Sylmar",
    weather: "Sunny",
    degree: 70
  }];
}
