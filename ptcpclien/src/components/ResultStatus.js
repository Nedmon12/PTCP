import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
export default function ResultStatus({subject, student, ispostive}) {
    const [result, setResult]=useState();
    const user = useContext(AuthContext);
    //console.log(student)
    //console.log(subject)
    useEffect(() => {
        const fetchSubject = async () => {
          const res = await axios.get("/api/class/fetchresult/" + user.user._id + "/" + student._id + "/" + subject._id);
          setResult(res.data);
        };
        fetchSubject();
      }, [user.user._id]);
      console.log(result);
  return (
    <div>ResultStatus</div>
  )
}
