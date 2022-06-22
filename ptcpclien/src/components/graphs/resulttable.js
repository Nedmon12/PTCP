import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import React, {useState, useContext, useEffect} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../context/AuthContext';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(FirstName, NoofSubject , Total, Average, Rank) {
  return { FirstName, NoofSubject, Total, Average, Rank };
}

const rows = [];

export default function ResultStatus({subject, student, setExamResultModal}) 
{
  const [results, setResult]=useState([]);
  const {user} = useContext(AuthContext);
  let fromhand=0;  
  const handleCancelClick = () => {
    setExamResultModal(false)     
}

  useEffect(() => {
      const fetchSubject = async () => {
        const res = await axios.get("/api/studentManagmentRoutes/fetchresult/" + user.user._id + "/" + student._id + "/" + subject._id);
        setResult(res.data);
      };
      fetchSubject();
    }, [user.user._id]);

    let total=0;
    let outoftotal=0;
    results.forEach(result => {
          total=total+result.mainresult;
          outoftotal=outoftotal+result.outof;
      });   
  return(
     <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                  <TableHead>
                                    <TableRow>
                                      <StyledTableCell>Full Name </StyledTableCell>
                                      <StyledTableCell align="right">No of Subject</StyledTableCell>
                                      <StyledTableCell align="right">Total</StyledTableCell>
                                      <StyledTableCell align="right">Average</StyledTableCell>
                                      <StyledTableCell align="right">Rank</StyledTableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {results.map((result) => (
                                      <StyledTableRow key={result.subjectname}>
                                        <StyledTableCell component="th" scope="row">
                                          {result.subjectname}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{result.reason}</StyledTableCell>
                                        <StyledTableCell align="right">{result.outof}</StyledTableCell>
                                        <StyledTableCell align="right">{result.mainresult}</StyledTableCell>
                                        <StyledTableCell align="right">{result.createdAt}</StyledTableCell>
                                      </StyledTableRow>
                                    ))}
                                  </TableBody>
                                </Table>
            </TableContainer>
                               
  );
}