import { Component, OnInit, ViewChild } from '@angular/core';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Indicadores } from 'src/app/interfaces/indicadores';
import { Subscription } from 'rxjs';
import { Chart} from 'chart.js';
import { IonRefresher, IonRefresherContent } from '@ionic/angular';

@Component({
  selector: 'app-indicadores-entrada-saida',
  templateUrl: './indicadores-entrada-saida.page.html',
  styleUrls: ['./indicadores-entrada-saida.page.scss'],
})

export class IndicadoresEntradaSaidaPage implements OnInit {
  @ViewChild('barCanvas') barCanvas;
  private indicadoresSubscription: Subscription;
  public indicador: Indicadores = {};
  qtdeObitos = 0;
  public refresherAtivado:any;
  barChart: any;

  constructor(
    private IndicadoresService: IndicadoresService,
    private authService: AuthService,
  ) {}

  

  ngOnInit() {

    this.Testando();
  }

  doRefresh(event) {
    this.Testando();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  barChartMethod(Alta : number, Obito: number, Transferencia : number, Evasao : number) {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Alta', 'Óbito', 'Transferência', 'Evasão'],
        datasets: [{
          label: 'Saídas',
          data: [Alta, Obito, Transferencia, Evasao],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  Testando() {
    var Banco
    var TamBanco = 0;
    var qtdeObitos = 0;
    var qtdeAltas = 0;
    var qtdeTransferencias = 0;
    var qtdeEvasoes = 0;
    var MortalidadeBruta = 0;
    var MortalidadeBrutaFormatada;
    
    this.indicadoresSubscription = this.IndicadoresService.getIndicadores().subscribe(data => {
      Banco = data;
      TamBanco = data.length;

      for (let i = 0; i < TamBanco; i++) {
        if (Banco[i]["Tipo"] == "Óbito") {
          qtdeObitos += 1;
        }
      }

      //
      for (let i = 0; i < TamBanco; i++) {
        if (Banco[i]["Tipo"] == "Alta") {
          qtdeAltas += 1;
        }
      }

      //Percorre o banco e conta a quantidade de transferencias
      for (let i = 0; i < TamBanco; i++) {
        if (Banco[i]["Tipo"] == "Transferência") {
          qtdeTransferencias += 1;
        }
      }

      //Percorre o banco e conta a quantidade de evasoes
      for (let i = 0; i < TamBanco; i++) {
        if (Banco[i]["Tipo"] == "Evasão") {
          qtdeEvasoes += 1;
        }
      }

      //Tratando a data para o formato correto
      for (let i = 0; i < TamBanco; i++) {
        Banco[i]["DataEntrada"] = Banco[i]["DataEntrada"].substring(0,10);
        Banco[i]["DataSaida"] = Banco[i]["DataSaida"].substring(0,10);
        Banco[i]["HorarioEntrada"] = Banco[i]["HorarioEntrada"].substring(11,20);
        Banco[i]["HorarioSaida"] = Banco[i]["HorarioSaida"].substring(11,20);
      }

      console.log(Banco);
      //console.log(Banco[1]["HorarioSaida"]);

      MortalidadeBruta = (qtdeObitos / TamBanco) * 100;
      MortalidadeBrutaFormatada = MortalidadeBruta.toFixed(2);

      this.barChartMethod(qtdeAltas, qtdeObitos, qtdeTransferencias, qtdeEvasoes);

      document.getElementById("Num_Saidas").innerHTML = TamBanco.toString();
      document.getElementById("Num_Obitos").innerHTML = qtdeObitos.toString();
      document.getElementById("Mortalidade_Bruta").innerHTML = MortalidadeBrutaFormatada.toString() + "%";
      document.getElementById("Quantidade_Registros").innerHTML = TamBanco.toString();
      document.getElementById("Media_Permanencia").innerHTML = "0";
      document.getElementById("Quantidade_Registros_MP").innerHTML = TamBanco.toString();
      //document.getElementById("Num_Saidas").innerHTML = Banco["id"] ;

    })

  }

}
