import { getDatabase, ref, set, onValue, get, child, push, remove, update } from "firebase/database";

import app from "./firebaseconfig";




const database = getDatabase(app);





let sendData = (obj, nodeName, id) => {
  if (!id) {
    // for id/key start
    let postListRef = ref(database, nodeName);
    obj.id = push(postListRef).key
    console.log(postListRef);
    // for id/key end
  }
  let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id}`);
  return set(newpostListRef, obj);
};








let getDataa = async (nodeName, id) => {
  const dbRef = ref(database);
  return new Promise((resolve, reject) => {
    get(child(dbRef, `${nodeName}/${id ? id : ""}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let arr;
          if (id) {
            arr = snapshot.val();
            resolve(arr);
          } else {
            arr = Object.values(snapshot.val());
            resolve(arr);
          }
        } else {
          reject("No Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

};

// let editData =(obj,nodeName,id)=>{
//   let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id}`);
//   return update(newpostListRef, obj);
// }


let DeleteDate = (nodeName, uid) => {
  const referencee = ref(database,`${nodeName}/${uid}`)
  return remove(referencee)
}


export { sendData, getDataa ,DeleteDate}