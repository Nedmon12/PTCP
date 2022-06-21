import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import Subject from '../../../../components/subjectssetting';
import AddSubject from '../../../../components/AddSubject'
import { AuthContext } from '../../../../context/AuthContext';

export default function Addskill({}) {
    const {user} = useContext(AuthContext);
    const [subjects, setSubjects] = useState([]);
    
    console.log(user.user._id)
    

    useEffect(() => {
      const fetchSubject = async () => {
        const res = await axios.get("/api/class/fetchallsubject/" + user.user._id);
        setSubjects(res.data);
      };
      fetchSubject();
    }, [user.user._id]);
    
      console.log(subjects)

      return (
    <div>

            <div className=' h-[36vw] overflow-auto '>
                    <div className='px-16 py-6 grid grid-cols-5 gap-2' >
                  {subjects.map((s)=>(
                      <Subject key={s._id} subject={s}/>
                      )        
                  )
                  }
                      <AddSubject />
                    </div>     
                </div>        
          </div>
  )
}
