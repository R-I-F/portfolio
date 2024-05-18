import React from "react";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore"

const fireBaseContext = React.createContext();

export default function FireBaseProvider ({children}){
    const firebaseConfig = {
        apiKey: "AIzaSyBxOfsRf1brP4d4TLkHGjAh0PMhLN8tqN8",
        authDomain: "portfolio-1ba66.firebaseapp.com",
        projectId: "portfolio-1ba66",
        storageBucket: "portfolio-1ba66.appspot.com",
        messagingSenderId: "221229984699",
        appId: "1:221229984699:web:8c1ef075410fb1ade7729e"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function getAllDocsInDb(){
    
        let tempArr = []
        const productsRef = collection(db, "projects")
        const querySnapshot = await getDocs(productsRef);
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          tempArr.push(data);
        })
        return tempArr
    }

    async function getAllDocsInStudiesDb(){
    
      let tempArr = []
      const productsRef = collection(db, "studies")
      const querySnapshot = await getDocs(productsRef);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        tempArr.push(data);
      })
      return tempArr
  }
      
    async function writeMessageToDb(x, y, z){
        const messagesRef = collection(db, "messages");
        const res = await addDoc(messagesRef, {
          name : x,
          email: y,
          message: z,
        })
        console.log(res);
    }

      
    return (
        <fireBaseContext.Provider 
        value = {{getAllDocsInDb, writeMessageToDb, getAllDocsInStudiesDb}}>
            {children}
        </fireBaseContext.Provider>
    )
}

export { fireBaseContext }