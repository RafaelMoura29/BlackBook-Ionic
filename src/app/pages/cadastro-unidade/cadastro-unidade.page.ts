import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-unidade',
  templateUrl: './cadastro-unidade.page.html',
  styleUrls: ['./cadastro-unidade.page.scss'],
})

export class CadastroUnidadePage implements OnInit {
  private loading: any;
  codigo_Unidade = "";
  nome_Unidade = "";
  senha_Unidade = "";
  confirmar_Senha_Unidade = "";

  constructor(
    private http: Http,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

  }

  async InsereDados() {
    await this.presentLoading();

    if (this.senha_Unidade == this.confirmar_Senha_Unidade) {
      try {
        let data = {
          codigo: this.codigo_Unidade,
          nome: this.nome_Unidade,
          senha: this.senha_Unidade
        };

        this.http.post('http://localhost:8080/CreateUnidade', data).pipe(
          map(res => res.json())
        ).subscribe(response => {
          console.log('POST Response:', response);
        });
        this.codigo_Unidade = ""
        this.nome_Unidade = ""
        this.senha_Unidade = ""
        this.confirmar_Senha_Unidade = ""
      } catch (error) {
        console.error(error);
        this.presentToast(error.message);
      }
    } else {
      this.presentToast("Senhas não correspodentes");
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
