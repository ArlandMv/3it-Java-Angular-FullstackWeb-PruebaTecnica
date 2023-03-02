import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  title = 'Proyecto Angular & SpringBoot';
  imagePath = 'https://avatars.githubusercontent.com/u/28228519?s=400&v=4';
  description = 'Hola, soy un Desarrollador Web Fullstack usando Angular y Java. Ademas tengo gran interés en continuar formandome en Testing y DevOps.';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
