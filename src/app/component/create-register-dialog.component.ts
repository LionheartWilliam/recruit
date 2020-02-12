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


  Rtypes: SelectValue[] = [
    { value: '一般候用教師', viewValue: '一般候用教師' },
    { value: '一般代理教師', viewValue: '一般代理教師' },
    { value: '英語專長代理教師', viewValue: '英語專長代理教師' },
    { value: '特殊教育身心障礙類代理教師', viewValue: '特殊教育身心障礙類代理教師' },
    { value: '專任輔導教師', viewValue: '專任輔導教師' },
    { value: '幼兒園候用教師', viewValue: '幼兒園候用教師' },
    { value: '幼兒園代理教師', viewValue: '幼兒園代理教師' },
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
  

  constructor(
    
    private afs:AngularFirestore,
    private fb: FormBuilder,
    public afa: AngularFireAuth,
    private snackBarService: SnackBarService,
    private router: Router
  ) {
    this.registerCollection = this.afs.collection<Register>('registers');
    this.registers = this.registerCollection.valueChanges();
    
   }

  ngOnInit(): void{
    const currentUserId = this.afa.auth.currentUser.uid;
    let createTime: Date = new Date();  
    //console.log("Date = " + createTime);   
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
      countyScore:'0',
      validationStatus:false,
      timeStamp:createTime,
    })
    //this.createForm.valueChanges.subscribe(console.log);
    
  }
  

  async createSubmitHandler () {
    this.loading = true;
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
