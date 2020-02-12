import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Register } from '../model/register.model'
import { from, Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterCreateDialogComponent } from './create-register-dialog.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerCollection : AngularFirestoreCollection<Register>;
  registers: Observable<{ id: string; data: Register; }[]>;

  constructor(
    private afs:AngularFirestore,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.registerCollection = this.afs.collection('registers');
    
    //this.registers = this.registerCollection.snapshotChanges().subscribe(action => {
    //  return action.map( a => {
    //    const data = a.payload.doc.data() as Register;
    //    const id = a.payload.doc.id;
    //    return { id, data };

    //  });
    //});
  }

  
}

