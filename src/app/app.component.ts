  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  num1:number;
  num2:number;
  rta:number;
  operacion(num1:number,num2:number,opera:string): number
  {
    switch(opera)
    {
      case "suma":
        return this.rta = this.num1 + this.num2;
      case "resta":
        return this.rta = this.num1 - this.num2;
      case "multiplica":
        return this.rta = this.num1 * this.num2;
      case "dividir":
        if(this.num2 == 0)
        {
        alert("No se puede dividr por cero");
        return null;
        }
        else
        {
        return this.rta = this.num1 / this.num2;
        }
      case "modulo":
        return this.rta = this.num1 % this.num2;
    }
  }
}

