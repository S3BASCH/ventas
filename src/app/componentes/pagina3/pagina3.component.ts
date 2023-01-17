import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  carrito(){
    this.nav.navigate(['carrito'])
  }
 
}
