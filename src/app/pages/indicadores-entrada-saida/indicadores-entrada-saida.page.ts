import { Component, OnInit } from '@angular/core';  


@Component({
  selector: 'app-indicadores-entrada-saida',
  templateUrl: './indicadores-entrada-saida.page.html',
  styleUrls: ['./indicadores-entrada-saida.page.scss'],
})

export class IndicadoresEntradaSaidaPage implements OnInit {
  
  
  constructor(
  ) {

   }

  ngOnInit() {
    this.Testando()
  }

  Testando(){
    this.Num_Saidas()
    this.Num_Obitos()
    this.Mortalidade_Bruta()
    this.Media_Permanencia()
  }

  Num_Saidas(){
    document.getElementById("Num_Saidas").innerHTML = '0';
  }

  Num_Obitos(){
    document.getElementById("Num_Obitos").innerHTML = "0";
  }

  Mortalidade_Bruta(){
    document.getElementById("Mortalidade_Bruta").innerHTML = "0";
    document.getElementById("Quantidade_Registros").innerHTML = "0";
  }

  Media_Permanencia(){
    document.getElementById("Media_Permanencia").innerHTML = "0";
    document.getElementById("Quantidade_Registros_MP").innerHTML = "0";
  }

}
