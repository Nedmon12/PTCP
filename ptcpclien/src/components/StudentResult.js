import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import StudentResultModal from './StudentResultModal'
function Student({student}) {
  const [modalOn, setModalOn] = useState(false);
  // const [studentspec, setStudentspec] = useState([]);
  const [results, setResult]=useState([]);
  const {user} = useContext(AuthContext);
  const png=".png";
  const image=student.pokemanUrl;
  const imageurl= `${student.pokemanUrl}${png}`;
  const PFavater = process.env.REACT_APP_PUBLIC_FOLDER2;
  const clicked = () => {
    setModalOn(true)
   // setStudentspec(student);
    
  }
  let total=0;
  let outoftotal=0;
  useEffect(() => {
    const fetchSubject = async () => {
      const res = await axios.get("/api/studentManagmentRoutes/fetchresultt/" + user.user._id + "/" + student._id);
      setResult(res.data);
    };
    fetchSubject();
  }, [user.user._id]); 
  console.log(results)
  results.forEach(result => {
    total=total+result.mainresult;
    outoftotal=outoftotal+result.outof;
})
let finaltotal= total;
  useEffect(()=>{
    const addAverage = async()=>{
      const Average = {
        teacherid: user.user._id,
        studentid: student._id,
        Averagepoint: total,
        reason: "Average",
      };
      try {
        await axios.post("/api/studentManagmentRoutes/addAverage", Average);
      } catch (err) {
        console.log(err);
      }
    }; addAverage()
  },[student._id]);
  //console.log(studentspec)
  return (
    <div>
    <button onClick={clicked} className='studentContainer w-26 h-26 '>
            <img className='pokeman w-16 h-16 mx-4'  src={PFavater + imageurl} alt="k" />
      <div className='w-26 h-16 border border-gray-100 rounded-lg bg-white'  >
      <span className='StudentName font-mono text-gray-600 px-4 '>{student.firstname}</span>
      </div>
  </button>
        {modalOn && <StudentResultModal setModalOn={setModalOn} student={student}/>} 
        </div>
    )
}
export default Student