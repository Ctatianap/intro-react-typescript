import { addDoc, collection, getDocs } from "firebase/firestore"
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
