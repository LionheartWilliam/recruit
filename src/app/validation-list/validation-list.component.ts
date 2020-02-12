import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register.model'
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-validation-list',
  templateUrl: './validation-list.component.html',
  styleUrls: ['./validation-list.component.css']
})
export class ValidationListComponent implements OnInit {

  private registerCollection : AngularFirestoreCollection<Register>;
  registers: Observable<Register[]>;
  displayedColumns: string[] = ['rtype',	'name',	'twid',	'birth', 'gender', 'phoneNumber', 'address', 'degree', 'college', 'major', 'teacherEducation'];
  dataSource:any;

  constructor(
    public afAuth: AngularFireAuth,
    private afs:AngularFirestore,
    public afa: AngularFireAuth,
    private router: Router
  ) {
    
   }

  ngOnInit() {
    this.afAuth.authState.subscribe( user => {
      if (user.uid == "f2OnMqoRv6huk473RkZiHMWixyH2" || user.uid =="RR9AzBpKyEfHnoopCb2Du9clVyk1") { 
 
        this.registerCollection = this.afs.collection<Register>('registers', ref => ref.where('validationStatus', '==', true));
        this.registers = this.registerCollection.valueChanges();
        this.dataSource = this.registers;
      }else{
        this.router.navigate(['']);
      }
    }); 
  }

}
