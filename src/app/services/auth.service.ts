import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import{
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../model/user.model';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
 

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) { 
    // Get the auth state fetch the Firestore user document
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else{
          return of (null);
        }

      })
    );
    
  }

  async googleSignin(){
    const gprovider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(gprovider);
    return this.updateUserData( credential.user);
  }
  async facebookSignin(){
    const fprovider = new auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(fprovider);
    return this.updateUserData( credential.user);
  }

  async signOut(){
    await this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  private updateUserData(user){
   const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${user.uid}`);

   const data = {
     uid: user.uid,
     email: user.email,
     displayName: user.displayName,
     photoURL: user.photoURL
     
   };

   return userRef.set(data, {merge: true});

  }


}
