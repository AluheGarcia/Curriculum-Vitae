import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto: any;
  datosDeContactos : any;
  constructor(private cvService: CvService) {
    this.cvService.obtenerEducacion().subscribe(
      {
        next: (data) =>  {
          console.log(data);
          this.contacto = data["contacto"];
          this.datosDeContactos = data["datosDeContactos"];
        }
      }
    )

  }

}
