import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.scss']
})
export class TareaIndividualComponent implements OnInit {

  @Input()  tareaInfo   : any;
  @Output() cambioTarea : EventEmitter<number> = new EventEmitter();
  public ocultar: boolean = true

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  deleteTask(tareaInfo: any): void {
    this.http.delete(`https://622b473014ccb950d23522d1.mockapi.io/api/todo/${tareaInfo.id}`).subscribe((resp) => {
      this.cambioTarea.emit();
    })
  }

  showDataUpdate(): void{
    this.ocultar = !this.ocultar
  }

  updateTaskOne(tareaInfo: any, taskUpdate: any): void{
    let parametros: object = {description: taskUpdate.value};
    this.http.put(`https://622b473014ccb950d23522d1.mockapi.io/api/todo/${tareaInfo.id}`, parametros).subscribe((resp)=>{
      this.cambioTarea.emit();
    });
  }

}
