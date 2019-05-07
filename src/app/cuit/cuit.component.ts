import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import {CuitService } from '../services/cuit.service'
import {  } from '@angular/common/http';


@Component({
  selector: 'app-cuit',
  templateUrl: './cuit.component.html',
  styleUrls: ['./cuit.component.css']
})
export class CuitComponent implements OnInit {


  resultado:any = null;
  cuit:string = "";



  constructor(protected router: Router,private cuitService: CuitService ) {
  }

  ngOnInit() {
}


consultarCuit(): void{
    this.cuitService.consultarCuit(this.cuit).subscribe((resultado) => {

      this.resultado = resultado;
    }
      , err => {});
}




}
