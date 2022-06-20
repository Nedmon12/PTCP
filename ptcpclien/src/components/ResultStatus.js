import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../context/AuthContext';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTableV5} from 'mdbreact'

export default function ResultStatus({subject, student, setExamResultModal}) {
     const handleCancelClick = () => {
        setExamResultModal(false)     
    }
    const [results, setResult]=useState([]);
    const {user} = useContext(AuthContext);
    let fromhand=0;
   
    useEffect(() => {
        const fetchSubject = async () => {
          const res = await axios.get("/api/studentManagmentRoutes/fetchresult/" + user.user._id + "/" + student._id + "/" + subject._id);
          setResult(res.data);
        };
        fetchSubject();
      }, [user.user._id]); 
    const dataGrid = {
      columns: [
        {
            label : 'Subject',
            field: 'subject',
            sort: 'asc',
            width: 120,                       
        },  
        {
              label : 'Reason',
              field: 'reason',
              sort: 'asc',
              width: 120,                       
          },
          {
              label : 'Out of',
              field: 'outof',
              sort: 'asc',
              width: 150
          },
          {
              label : 'Main Result',
              field: 'mainresult',
              sort: 'asc',
              width: 150
          },
          {
              label : 'date',
              field: 'date',
              sort: 'asc',
              width: 250
          },
        
      ], 
      rows: []
  }
  let total=0;
  let outoftotal=0;
  results.forEach(result => {
          dataGrid.rows.push({
            subject: result.subjectname,  
            reason: result.reason,
            outof : result.outof,
            mainresult: result.mainresult,
            date: result.createdAt,
      })
        total=total+result.mainresult;
        outoftotal=outoftotal+result.outof;
    })
    
    if(outoftotal!==0){
    fromhand = total*(100/outoftotal);
}
    console.log(total)
    console.log(fromhand)
    
    useEffect(() => {    
        const addTotalResult = async()=>{
          const Totalresult = {
            teacherid: user.user._id,
            studentid: student._id,
            subjectid: subject._id,
            subjectname: subject.SubjectName,
            totalresult: fromhand,
            reason: "Total",
          };
          try {
            await axios.put("/api/studentManagmentRoutes/addtotalresult/"+student._id +"/"+subject._id, Totalresult);
          } catch (err) {
            console.log(err);
          }
        }; 
        addTotalResult()
    },[]); 
    
     return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[45vw] w-[55vw] opacity-100' >
        <div className='shadow-md h-16 flex flex-row  justify-between text-white border-slate-100 rounded-t-xl bg-slate-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">{student.firstname} {student.lastname}'s {subject.SubjectName} results</span>
            <button className='pr-2 py-4' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='' >
            <div className='flex flex-row border-b-2 border-slate-100 py-5' >
                <div className='p-5 relative w-full overflow-x-auto shadow-md sm:rounded-lg h-full'>
                    <div class="p-3 border border-slate-100 max-h-[50vh]">
                        <MDBDataTableV5 data={dataGrid}
                        striped                    
                        bordered
                        small
                        scrollX
                        scrolly
                        entriesOptions={[10, 20]} entries={10} pagesAmount={4}
                        hover
                        fullPagination
                        noBottomColumns={true}
                        info={false}/>
                    </div>
                </div>
                
            </div>
            <div className='text-gray-600' >
                    <span className='text-lg p-4' >Total : {total}/</span>
                    <span className='text-lg' >{outoftotal}</span>
                    <hr></hr>
                    <span className='text-lg p-4' >From Hundred total : {fromhand} </span>
                    <span></span>
                </div>
        </div>
        </div>
    </div>
</div>
  )
}
