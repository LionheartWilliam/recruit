import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
// Layout
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';


import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatSlideToggleModule, MatCheckboxModule  } from '@angular/material';
import { ToolbarComponent } from './component/toolbar.component';
import { RegisterComponent } from './component/register.component';
import { RegisterCreateDialogComponent } from './component/create-register-dialog.component';
import { PrivateRegistersListComponent } from './component/private-registers-list.component';
import { UpdateRegisterComponent } from './component/update-register.component';
import { PrintRegisterComponent } from './component/print-register.component'
import { NotFoundComponent } from './component/not-found.component';
import { HomeComponent } from './component/home.component';
import { RegisterListModule } from './register-list/register-list.module'

//additional
import { NgxPrintModule } from 'ngx-print';
import { QRCodeModule } from 'angularx-qrcode';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminRegisterListComponent } from './admin-register-list/admin-register-list.component';
import { AdminUpdateRegisterComponent } from './admin-update-register/admin-update-register.component';
import { ValidationListComponent } from './validation-list/validation-list.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'create-register', component: RegisterCreateDialogComponent },
  { path: 'update-register/:id', component: UpdateRegisterComponent },
  //{ path: 'private-list', component: PrivateRegistersListComponent },
  { path: 'admin-register-list', component: AdminRegisterListComponent },
  { path: 'admin-update-register/:id', component: AdminUpdateRegisterComponent },
  { path: 'validation-list', component: ValidationListComponent },
  { path: '**', component:NotFoundComponent},
   
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RegisterComponent,
    RegisterCreateDialogComponent,
    PrivateRegistersListComponent,
    NotFoundComponent,
    HomeComponent,
    UpdateRegisterComponent,
    PrintRegisterComponent,
    AdminRegisterListComponent,
    AdminUpdateRegisterComponent,
    ValidationListComponent
  ],
  entryComponents:[
    RegisterCreateDialogComponent
  ],
  imports: [
    BrowserModule,MatDividerModule,
    FormsModule,ReactiveFormsModule,
    MatCardModule,FlexLayoutModule,
    RegisterListModule,NgxPrintModule,QRCodeModule,Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, AngularFireAuthModule, BrowserAnimationsModule, LayoutModule, MatExpansionModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule,MatSnackBarModule, MatTableModule , MatSlideToggleModule, MatCheckboxModule,
    MatRippleModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
