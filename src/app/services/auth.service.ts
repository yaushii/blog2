import { Injectable } from '@angular/core';
import * as firebase  from 'firebase';
import { reject } from 'q';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// permet de creer un nouvel utilisateur via firebase

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

// permet de connecter un utilisateur existant.
signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}

// permet de deconnecter un utilisateur

signOutUser() {
  firebase.auth().signOut();
}

  constructor() { }
}
