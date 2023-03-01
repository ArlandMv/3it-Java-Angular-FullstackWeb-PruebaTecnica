import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Person } from '../../models/person';
import { single } from './data'; 

//hardcoded
const people: Person[] = [
  { id: 1, name: 'Maria', email: 'maria@gmail.com', area: 'Finance' },
  { id: 2, name: 'Juan', email: 'juan@3it.cl', area: 'Development' },
  { id: 3, name: 'Carlos', email: 'carlos@3it.cl', area: 'Development' },
  { id: 4, name: 'Ana', email: 'ana@3it.cl', area: 'Development' },
  { id: 5, name: 'Pedro', email: 'pedro@gmail.com', area: 'Marketing' },
  { id: 6, name: 'Laura', email: 'laura@3it.cl', area: 'Marketing' },
  { id: 7, name: 'Diego', email: 'diego@3it.cl', area: 'Marketing' },
  { id: 8, name: 'Sofia', email: 'sofia@gmail.com', area: 'HR' },
  { id: 9, name: 'Marta', email: 'marta@gmail.com', area: 'HR' },
  { id: 10, name: 'Esteban', email: 'esteban@3it.cl', area: 'HR' },
  { id: 11, name: 'Luis', email: 'luis@gmail.com', area: 'Finance' },
  { id: 12, name: 'Tomas', email: 'tomas@3it.cl', area: 'Finance' }
];

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})

/*const peopleByArea = this.people.reduce((accumulator, currentPerson) => {
  if (accumulator[currentPerson.area]) {
    accumulator[currentPerson.area]++;
  } else {
    accumulator[currentPerson.area] = 1;
  }
  return accumulator;
}, {});*/

export class ResultadosComponent implements OnInit {
  //test
  single: any[];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  //real
  chartData : any[];
  chartOptions: any = {
    view: [700, 400],
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C']
    },
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    legendTitle: 'Área',
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: 'Área',
    yAxisLabel: 'Cantidad de personas',
    barPadding: 20
  };

  constructor(
    private personService: PersonService,
    private router: Router)
    { 
      Object.assign(this, {single})  
    }

  ngOnInit(): void {
    //GET DATA
    this.getChartData();
    //slower
    this.getApiData();



  }

  getApiData() {
    return this.personService.getAll();
  }

  // Process data for char
  getChartData(): void {  /*
    this.personService.getAll().subscribe((people: Person[]) => {
      const areas = [...new Set(people.map(person => person.area))]; // get unique areas
      const data = areas.map(area => {
        return {
          name: area,
          value: people.filter(person => person.area === area).length
        };
      });
      this.chartData = data;
    });   */
  }

  //what i need it to look like
  /*
  this.chartData = [
    {
      name: 'Area 1',
      value: this.personService.getPeopleByArea(1).length
    },
    {
      name: 'Area 2',
      value: this.personService.getPeopleByArea(2).length
    },
    {
      name: 'Area 3',
      value: this.personService.getPeopleByArea(3).length
    }
  ];
  */


  goBack() {
    this.router.navigate(['/']);
  }
  
}
