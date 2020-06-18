import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Register } from '../model/register.model'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../model/user.model'
import { Router } from '@angular/router';
import { DocIDService } from '../services/doc-id.service'

@Component({
  selector: 'app-admin-register-list',
  templateUrl: './admin-register-list.component.html',
  styleUrls: ['./admin-register-list.component.css']
})
export class AdminRegisterListComponent implements OnInit {

  registerCollection : AngularFirestoreCollection<Register>;
  registers : Observable<{ id: string; data: Register; }[]>;
  user: Observable<User>;
  term:string;

  constructor(
    private afs:AngularFirestore,
    public afAuth: AngularFireAuth,
    public authService :AuthService,
    private transferData: DocIDService,
    private router: Router
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe( user => {
      if (user.uid == "f2OnMqoRv6huk473RkZiHMWixyH2" || user.uid =="RR9AzBpKyEfHnoopCb2Du9clVyk1") { 
 
        this.registerCollection = this.afs.collection<Register>('registers', ref => ref.where('validationStatus', '==', false).orderBy('serialNumber'));
        this.registers = this.registerCollection.snapshotChanges().pipe(
          map( action => action.map( a=>{
            const data = a.payload.doc.data() as Register;
            const id = a.payload.doc.id;
            return {id, data};
          })));
       
      }else{
        this.router.navigate(['']);
      }
    });
  }
  sendRegisterDATA( registerDATA:object, registerID:string){
    Object.assign(registerDATA, {id: registerID});
    this.transferData.changeDATA(registerDATA);
  };
}
