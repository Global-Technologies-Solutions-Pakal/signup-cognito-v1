import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ImagePath: string;

  constructor() {
    //image location
    this.ImagePath = '/assets/imagenes/2.jpg'
   }

  ngOnInit(): void {
  }

}
