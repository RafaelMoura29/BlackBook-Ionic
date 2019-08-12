import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Indicadores } from '../interfaces/indicadores';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {
  private indicadoresCollection = this.afs.collection<Indicadores>('indicadores');
 
  constructor(private afs: AngularFirestore) {
  }

  getIndicadores() { 
    return this.indicadoresCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return{ id, ...data};
        })
      })
    )
  }

  AddIndicador(indicadores: Indicadores) { 
    return this.indicadoresCollection.add(indicadores)
  }

  getProduct(indicadores: string) { 

  }

  updateIndicador(id: string, indicadores: Indicadores) { 

  }

  deleteIndicador(id: string){

  }
}
