import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class LoginService {

  private config = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
    databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT_ID.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
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
