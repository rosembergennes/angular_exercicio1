import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'ANGULA CRUD';

employees = [

  {'name':'Fazt', position: 'manager'}, 
  {'name':'Juan', position: 'Desing'},
  {'name':'Pedro', position: 'Programador'}


]

model:any={};

addEmployee():void{
  this.employees.push(this.model);
}

deleteEmployee():void{

}

editEmployee():void{

}

updateEmployee():void{

}


}
