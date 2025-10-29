import FeedbackForm from './component/feedbackForm'
import './App.css'
import Fetchdata from './component/Fetchdata'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Router ,Routes  ,Route } from 'react-router-dom'

function App() {
  

  return (
    

  <Router>
    <Routes>
    <Route path ="/" element={<FeedbackForm/>} />
    <Route path ="/fetchdata" element={<Fetchdata/>}/>

    </Routes>


  </Router>
   
      )
}

export default App
