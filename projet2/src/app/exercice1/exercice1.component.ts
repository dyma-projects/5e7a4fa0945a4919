import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public t="input text" ;
  public name = "Dyma , une excellente formation !"
  public generer(event : Event) : void {
    console.log("Click concernant l'exercice1");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
