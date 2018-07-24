import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class LoginService {

  private config = {

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
