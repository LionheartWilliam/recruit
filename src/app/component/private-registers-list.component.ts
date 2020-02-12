import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Register } from '../model/register.model'
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { switchMap, map } from 'rxjs/operators';
import { User } from '../model/user.model'
import { Action } from 'rxjs/internal/scheduler/Action';
import { DocIDService } from '../services/doc-id.service'


@Component({
  selector: 'app-private-registers-list',
  templateUrl: './private-registers-list.component.html',
  styleUrls: ['./private-registers-list.component.css']
})
export class PrivateRegistersListComponent implements OnInit {

  registerCollection : AngularFirestoreCollection<Register>;
  registers : Observable<{ id: string; data: Register; }[]>;

  user: Observable<User>;
  userId :any;
  userName:string;
  userEmail:string;
  userPhoto:string;
  docid: string;

  constructor(
    private afs:AngularFirestore,
    private transferData: DocIDService,
    public afAuth: AngularFireAuth,
    public authService :AuthService
  ) { 
    
  }

 

  ngOnInit(){
    this.afAuth.authState.subscribe( user => {
      if (user) { 
        this.userName = user.displayName ;
        this.userEmail = user.email ;
        this.userPhoto = user.photoURL ;
        this.userId = user.uid ;
        this.registerCollection = this.afs.collection<Register>('registers', ref => {
          return ref.where('uid', '==', this.userId ) 
        });
        this.registers = this.registerCollection.snapshotChanges().pipe(
          map( action => action.map( a=>{
            const data = a.payload.doc.data() as Register;
            const id = a.payload.doc.id;
            return { id, data };
          })));
        
        }
    });
  }

  sendRegisterDATA( registerDATA:object, registerID:string){
    Object.assign(registerDATA, {id: registerID});
    this.transferData.changeDATA(registerDATA);
  };


}
