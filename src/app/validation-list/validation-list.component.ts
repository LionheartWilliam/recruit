import { Component, OnInit, ViewChild } from '@angular/core';
import { Register } from '../model/register.model'
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-validation-list',
  templateUrl: './validation-list.component.html',
  styleUrls: ['./validation-list.component.css']
})
export class ValidationListComponent implements OnInit {

  private registerCollection : AngularFirestoreCollection<Register>;
  registers: Observable<Register[]>;
  displayedColumns: string[] = ['serialNumber','rtype',	'countyScore','proxyRank', 'name',	'twid',	'birth', 'gender', 'phoneNumber', 'address', 'degree', 'college', 'major', 'teacherEducation'];
  dataSource : MatTableDataSource<any>;
  noData: any;

  constructor(
    public afAuth: AngularFireAuth,
    private afs:AngularFirestore,
    public afa: AngularFireAuth,
    private router: Router
  ) {
    
   }

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;

   ngAfterViewInit() {
    this.afAuth.authState.subscribe( user => {
      if (user.uid == "f2OnMqoRv6huk473RkZiHMWixyH2" || user.uid =="RR9AzBpKyEfHnoopCb2Du9clVyk1") { 
 
        this.registerCollection = this.afs.collection<Register>('registers', ref => ref.where('validationStatus', '==', true));
        this.registers = this.registerCollection.valueChanges();
        this.registers.subscribe( data =>{
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.noData = this.dataSource.connect().pipe(map(data => data.length === 0));
        }); 

      }else{
        this.router.navigate(['']);
      }
    }); 
  
  }

  ngOnInit() {
    
  }

}
