import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  public tareas: any;

  //podemos acceder a todos los metodos de httpclient
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.peticionDeDatosExternos();
  }

  peticionDeDatosExternos(): void{
    this.http.get('https://622b473014ccb950d23522d1.mockapi.io/api/todo').subscribe((resp)=>{
      this.tareas = resp
    })
  }

  saveTask(descriptionTask: any): void{
    let parametros: object = {description: descriptionTask.value};

    this.http.post('https://622b473014ccb950d23522d1.mockapi.io/api/todo', parametros).subscribe((resp)=>{
      this.updated();
      console.log('registro guardado');
    })
  }

  updated(): void{
    this.peticionDeDatosExternos();
  }

}
