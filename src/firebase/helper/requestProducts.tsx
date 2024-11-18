import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { mockProduct } from "../data/mockProducts";


const productCollection = collection(db, "products");

export const uploadProducts  = async () => {
    for (const product of mockProduct){
        await addDoc(productCollection,product)
    }
    console.log("Productos agregados exitosamente")
}

export const getProducts = async () => {
    const data = await getDocs(productCollection);
    console.log(data.docs)
    return data.docs.map((doc) => ({
        ...doc.data(),
    }))
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateInfoComplUser = async (id:string, datosUpdate:any) => {
    try{
        console.log("funcion actualizar ejecutada");
        const userUpdateDoc = doc(db, "info-compl-user", id)
        await updateDoc(userUpdateDoc, datosUpdate)
        console.log("Datos actualizados correctamente.");
    } catch (error) {
        console.error("Error al actualizar los datos:", error);
    }
}

// const prueba = {
//     height: 170,
//     weight: 80,
//     age: 30,
//     gener: 'male'
// }

// updateInfoComplUser("HFiHeFDFJ83GGQVvli9n", prueba)




















// export const deleteProduct =async(id: string )=>{
//     try{
//      const productDelDoc = doc(db, "productos", id);
//      await deleteDoc(productDelDoc);
//     }
//     catch(error){
//       console.log(error);
//     }
//   }
  