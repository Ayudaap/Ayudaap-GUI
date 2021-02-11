import { Component, OnInit } from '@angular/core';
import { OrganizacionModel } from 'src/app/models/organizacionModel';
import { OrganizacionService } from 'src/app/services/organizacion.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.css']
})
export class OrganizacionComponent implements OnInit {

  organizaciones: Array<OrganizacionModel> = [];

  constructor(private organizacionesService: OrganizacionService) { }

  ngOnInit(): void {
    this.organizacionesService.getOrganizaciones().subscribe({
      next: (organizaciones: OrganizacionModel[]) => {
        this.organizaciones = organizaciones;
        console.log(organizaciones);
      },
      error: (error: any) => { console.log },
      complete: () => { console.log('Completado') }
    });
  }

}