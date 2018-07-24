import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class LoginService {

  private config = {
    /* apiKey: 'AIzaSyCtCe80cEDs3nkSSXxQOTE20TMgj821m8I',
    authDomain: 'login-app-c236c.firebaseapp.com',
    databaseURL: 'https://login-app-c236c.firebaseio.com',
    projectId: 'login-app-c236c',
    storageBucket: 'login-app-c236c.appspot.com',
    messagingSenderId: '668624930690' */
  };
  private provider: any;
  constructor() {
    firebase.initializeApp(this.config);
  }

  saveCurrentUser(user: any) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  removeCurrentUser() {
    sessionStorage.removeItem('currentUser');
  }

  signOut() {
    firebase.auth().signOut();
    this.removeCurrentUser();
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  }
}
