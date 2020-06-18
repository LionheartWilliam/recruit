import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Register } from '../model/register.model'
import { from, Observable } from 'rxjs';
import { SelectValue } from '../model/selectValue.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { SnackBarService } from '../services/snack-bar.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-create-register-dialog',
  templateUrl: './create-register-dialog.component.html',
  styleUrls: ['./create-register-dialog.component.css']
})
export class RegisterCreateDialogComponent implements OnInit {

  createForm: FormGroup; 
  loading = false;
  success = false;
  private registerCollection : AngularFirestoreCollection<Register>;
  registers: Observable<Register[]>;
  snackBarMessage:string;
  documentAmountAddOne: number;

  Rtypes: SelectValue[] = [
    { value: '1-國小一般教師', viewValue: '1-國小一般教師' },
    { value: '2-國小英語專長教師', viewValue: '2-國小英語專長教師' },
    { value: '3-國小舞蹈專長教師(藝才班)', viewValue: '3-國小舞蹈專長教師(藝才班)' },
    { value: '4-一般代理教師', viewValue: '4-一般代理教師' },
    { value: '5-英語專長代理教師', viewValue: '5-英語專長代理教師' },    
    { value: '6-專任輔導代理教師', viewValue: '6-專任輔導代理教師' },
    { value: '7-特殊教育-身心障礙類代理教師', viewValue: '7-特殊教育-身心障礙類代理教師' },
    { value: '8-幼兒園代理教師', viewValue: '8-幼兒園代理教師' },
  ];

  Genders: SelectValue[]=[
    {value:'男性', viewValue:'男性'},
    {value:'女性', viewValue:'女性'},
    {value:'其他', viewValue:'其他'},
  ];

  Degrees: SelectValue[] = [
    { value: '博士班', viewValue: '博士班' },
    { value: '研究所', viewValue: '研究所' },
    { value: '大學/專科', viewValue: '大學/專科' },
    { value: '高中', viewValue: '高中' },
    { value: '國中', viewValue: '國中' },
    { value: '小學', viewValue: '小學' },
  ];
  
  ProxyRanks: SelectValue[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    
  ];
  
  

  constructor(
    
    private afs:AngularFirestore,
    public afa: AngularFireAuth,
    private snackBarService: SnackBarService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerCollection = this.afs.collection<Register>('registers');
    this.registers = this.registerCollection.valueChanges();  
    this.registers.subscribe( data=>{
      this.documentAmountAddOne = data.length + 1 ;
    });
   }

  ngOnInit(): void{
    const currentUserId = this.afa.auth.currentUser.uid;
    let createTime: Date = new Date();  
    
    this.createForm = this.fb.group({
      uid: currentUserId,
      rtype:'',
      name:'',
      twid:'',
      birth:'',
      gender:'',
      phoneNumber:'',
      address:'',
      degree:'',
      college:'',
      major:'',
      teacherEducation:'',
      countyScore:0,
      validationStatus:false,
      timeStamp:createTime,
      proxyRank:'',
      serialNumber:0,
    })
    
    
  }
  

  async createSubmitHandler () {
    this.loading = true;
    this.createForm.patchValue({serialNumber: this.documentAmountAddOne});
    //console.log(this.createForm.value)

    const formValue = this.createForm.value;
    try {
      await this.registerCollection.add(formValue);
      this.success = true;
      this.snackBarMessage = '成功新增一筆報名資料。';
      this.router.navigate(['private-list']).then((navigated: boolean) => {
        if(navigated) {
          this.snackBarService.openSnackBar(this.snackBarMessage, 'Close', 9999999);
        }
      });
    } catch(err) {
      console.error(err)
    }

    this.loading = false;
  };
}
