import { useState } from "react"
import { collection } from "firebase/firestore"
import { addDoc } from "firebase/firestore"
import { db } from "../../firebase"
export default function FeedbackForm(){
    const[form,setForm]=useState({
        name:"",
        age:"",
        email:"",
        feedback:""
    })
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
           await addDoc(collection(db,"feedbacks"),form);
           alert("Feedback sumbited succedsully");
           setForm({name:"",email:"",feedback:"",age:""})
        }catch(error){
            console.error("Error on submit .. ",error)

        }

    } 

    
    return(<>
           <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4 text-primary">Feedback Form</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder="Enter your age"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>
          

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Feedback</label>
            <textarea
              className="form-control"
              name="feedback"
              rows="4"
              placeholder="Write your feedback here..."
              value={form.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-100"
              
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>)
}