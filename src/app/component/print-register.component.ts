import { Component, OnInit, Input } from '@angular/core';
import { DocIDService } from '../services/doc-id.service';
import { Register } from '../model/register.model';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-print-register',
  templateUrl: './print-register.component.html',
  styleUrls: ['./print-register.component.css']
})
export class PrintRegisterComponent implements OnInit {
  
  registerDATA: any;
  private registerDoc: AngularFirestoreDocument<Register>;
  register: Observable<Register>;
  public angularxQrCode:string;

  constructor(
    private afs:AngularFirestore,
    private transferData: DocIDService,
  ) { 
    this.transferData.currentDATA.source.subscribe(res => {
      //console.log(res);
      this.registerDATA = res;
      });
    this.registerDoc = this.afs.doc<Register>('registers/' + this.registerDATA.id);
    this.register = this.registerDoc.valueChanges();
    this.angularxQrCode = this.registerDATA.id;
  }

  ngOnInit() {
      
  }

}
