import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  login2(form:NgForm){

    const email =form.value.email
    const password =form.value.password
  }
  login1(){
    this.nav.navigate([''])
  }
  compras(){
    this.nav.navigate(['compras'])
  }
 
}
