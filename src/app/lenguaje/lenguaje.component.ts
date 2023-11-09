import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.component.html',
  styleUrls: ['./lenguaje.component.css']
})
export class LenguajeComponent implements OnInit {
  lenguajes: any;
constructor(private cvService:CvService){


}
  ngOnInit(): void {
    this.cvService.obtenerEducacion().subscribe(
      data => {console.log(data);
      this.lenguajes=data["lenguajes"]
    }
    )
  }
}
