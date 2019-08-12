import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { ActivatedRoute } from '@angular/router';
import { Indicadores } from 'src/app/interfaces/indicadores';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.page.html',
  styleUrls: ['./indicador.page.scss'],
})
export class IndicadorPage implements OnInit {
  private productId: string = null;
  public indicador: Indicadores = {};
  private loading: any;
  private productSubscription: Subscription;

  constructor(
    private indicadoresService: IndicadoresService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    if(this.productSubscription) this.productSubscription.unsubscribe();
  }

  async saveIndicador() {
    await this.presentLoading();

  
      try{
        await this.indicadoresService.AddIndicador(this.indicador);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/home');

      }catch(error){
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      
    }
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