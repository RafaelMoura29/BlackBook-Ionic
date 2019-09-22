import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-leitos',
  templateUrl: './leitos.page.html',
  styleUrls: ['./leitos.page.scss'],
})
export class LeitosPage implements OnInit {
  private loading: any;

  constructor(
    private http: Http,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async popup() {
    let alert = await this.alertCtrl.create({
      message: 'Digite o nome do leito',
      inputs: [
        {
          name: 'nomeLeito',
          placeholder: 'Leito'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Criar',
          handler: data => {
            this.cadastrarLeito(data.nomeLeito)
          }
        }
      ]
    });
    alert.present();
  }

  async cadastrarLeito(nomeLeito: string) {
    await this.presentLoading();

    if (nomeLeito != "" && nomeLeito != null) {
      try {
        let dataLeito = {
          nomeLeito: nomeLeito,
          codigoPaciente: "",
          codigoUnidade: "",
          nomePaciente: ""
        };

        this.http.post('https://blackbooknodeserver.herokuapp.com/CreateLeito', dataLeito).pipe(
          map(res => res.json())
        ).subscribe(response => {
          console.log('POST Response:', response);
        });
      } catch (error) {
        console.error(error);
        this.presentToast(error.message);
      }
    } else {
      this.presentToast("Nome inválido!");
    }
    this.loading.dismiss();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
