import {doc, updateDoc} from "firebase/firestore";
import { firestore } from "./Firebase.js";

const catRef = doc(firestore,"status","1");
await updateDoc(catRef,{
    fun : 90
});

export { catRef };