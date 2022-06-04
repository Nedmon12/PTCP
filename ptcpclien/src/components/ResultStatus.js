import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../context/AuthContext';
import {MDBDataTableV5} from 'mdbreact'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

export default function ResultStatus({subject, student, setExamResultModal}) {
     const handleCancelClick = () => {
        setExamResultModal(false)     
    }
    const [results, setResult]=useState();
    const user = useContext(AuthContext);
    
    useEffect(() => {
        const fetchSubject = async () => {
          const res = await axios.get("/api/class/fetchresult/" + user.user._id + "/" + student._id + "/" + subject._id);
          setResult(res.data);
        };
        fetchSubject();
      }, [user.user._id]);

    const dataGrid = {
      columns: [
          {
              label : 'reason',
              field: 'Reason',
              sort: 'asc',
              width: 400,                       
          },
          {
              label : 'outof',
              field: 'outof',
              sort: 'asc',
              width: 200
          },
          {
              label : 'mainresult',
              field: 'mainresult',
              sort: 'asc'
          },
          {
              label : 'date',
              field: 'date',
              sort: 'asc'
          },
        
      ], 
      rows: []
  }
  results.forEach(result => {
          dataGrid.rows.push({
            reason: result.reason,
            outof : result.outof,
            mainresult: result.mainresult,
            date: "1",
      })
    })
    
     return (
    <div className='bg-zinc-rgba fixed inset-0 z-50' >
    <div className='flex h-screen justify-center items-center ' >
        <div className='bg-white  border-gray-500 rounded-2xl flex flex-col h-[30vw] w-[45vw] opacity-100' >
        <div className='shadow-md h-16 flex flex-row  justify-between border-b-2 text-white border-slate-100 rounded-t-xl bg-cyan-500 ' >  
            <span class="block tracking-wide boreder-2 border-slate-100 text-white text-lg font-medium pl-4 py-4 hover:text-bs ">{student.firstname} {student.lastname}'s {subject.SubjectName} results</span>
            <button className='pr-2 py-4' onClick={handleCancelClick} >
               <CloseIcon fill="currentcolor"/>
            </button> 
        </div>
        <div className='' >
            <div className='flex flex-row border-b-2 border-slate-100 py-5' >
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full">
                <MDBDataTableV5 data={dataGrid}
                striped
                entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4}
                hover/>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}
