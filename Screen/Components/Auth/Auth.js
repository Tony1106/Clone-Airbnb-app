import { AsyncStorage } from "react-native";

import * as firebase from 'firebase';


export const isSignedIn = () => {
  return new Promise((resolve, reject) => {


    AsyncStorage.getItem("checkSignIn")
      .then(res => {
        if (res === true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};