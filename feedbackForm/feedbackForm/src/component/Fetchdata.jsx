import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase"

export default function Fetchdata(){
    const [user,setUser]= useState([])

    useEffect(()=>{
        const Fetchdata = async()=>{
            const querySnapShot = await getDocs(collection(db,"feedbacks"));
            const userData = querySnapShot.docs.map(doc =>({
                id: doc.id,
                ...doc.data()
            }));
            setUser(userData);
        }
        Fetchdata();
    },[]);
    return(<>
    <div style={{ padding: "20px" }}>
      <h2>User List from Firebase</h2>
      {user.map(user => (
        <div key={user.id} style={{ marginBottom: "10px" }}>
          <strong>{user.name}</strong> — {user.age} years old from.
        </div>
      ))}
    </div>
   
    </>)
}