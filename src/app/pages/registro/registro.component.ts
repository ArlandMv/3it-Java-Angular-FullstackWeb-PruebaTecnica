import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  person: Person = new Person();
  submitted = false;

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.personService.create(this.person)  
    .subscribe( //console.log(data),error=>console.log(error) 
      (data) => { 
        console.log(data);
        this.submitted = true;
      }, 
      error => console.log(error)
    );
    this.person = new Person();
    this.router.navigate(['/resultados']);
  }
}
