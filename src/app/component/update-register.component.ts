import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register.model'
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { SelectValue } from '../model/selectValue.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { DocIDService } from '../services/doc-id.service'
import { SnackBarService } from '../services/snack-bar.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-register',
  templateUrl: './update-register.component.html',
  styleUrls: ['./update-register.component.css']
})
export class UpdateRegisterComponent implements OnInit {
  

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

  updateForm: FormGroup; 
  loading = false;
  success = false;
  private registerDoc: AngularFirestoreDocument<Register>;
  register: Observable<Register>;
  docid:string;
  updateSource: any;
  durationInSeconds = 5;
  snackBarMessage:string;

  constructor(
    private afs:AngularFirestore,
    private fb: FormBuilder,
    private transferData: DocIDService,
    public afa: AngularFireAuth,
    private snackBarService:SnackBarService,
    private router: Router
  ) {
    this.transferData.currentDATA.source.subscribe(res => {
      //console.log(res);
      this.updateSource = res;
      } );  
    this.registerDoc = this.afs.doc<Register>('registers/' + this.updateSource.id);
    this.register = this.registerDoc.valueChanges();
   }

  ngOnInit() {
  
    this.transferData.currentDATA.source.subscribe(res => {
      //console.log(res);
      this.updateSource = res;
      } );    
    
    let updateTime: Date = new Date();  
    let birthday: Date = new Date(this.updateSource.birth.toDate()); 
    this.updateForm = this.fb.group({
      uid: this.updateSource.uid,
      rtype:this.updateSource.rtype,
      name:this.updateSource.name,
      twid:this.updateSource.twid,
      birth:birthday,
      gender:this.updateSource.gender,
      phoneNumber:this.updateSource.phoneNumber,
      address:this.updateSource.address,
      degree:this.updateSource.degree,
      college:this.updateSource.college,
      major:this.updateSource.major,
      teacherEducation:this.updateSource.teacherEducation,
      countyScore:this.updateSource.countyScore,
      validationStatus:false,
      timeStamp:updateTime,
      proxyRank:this.updateSource.proxyRank,
      serialNumber:this.updateSource.serialNumber
    })
    
  }

  async updateSubmitHandler () {
    this.loading = true;
    const formValue = this.updateForm.value;
    try {
      await this.registerDoc.update(formValue);
      this.success = true;
      this.snackBarMessage = '成功更新一筆報名資料。';
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
