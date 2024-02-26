import {useState,useContext, useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useFetch from '../../../hooks/useFetch';
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Swal from "sweetalert2";

const AddQuestion = () => {
    const { appState,appDispatch } = useContext(AppContext);
    
    const {data, error, fetchData, isPending} = useFetch();

    const teacherID = JSON.parse(localStorage.getItem("AppState"))?.userInfo?.teacherID;

    useEffect(()=>{
        console.log({appState});

        console.log(teacherID);
      },[appState])
      
      const handleSubmit = async(event) => {
        //   event.preventDefault();
        //   const fields = new FormData(event.currentTarget);

            const headers = {
                method: "POST",
                body: JSON.stringify({
                    teacherID:teacherID,
                    kpiNumber:"12",
                    level:"المستوى الأساسي",
                    grade:"4",
                    skill:"النحو والصرف",
                    questionText:"questionText",
                    
                  }),
                headers: {
                  "Content-Type": "application/json",
                },
              };
            const question = await fetchData("http://localhost:4000/question",headers);
              console.log({question})
              if(!question){
                Swal.fire({
                  icon: 'success',
                  title: 'Oops...',
                  html: `<h5>question has been added successfully</h5>`,
                  footer: `<a href="">Why do I have this issue?</a>`
                })
              }
            
            // appDispatch({
            //     type: "GET_USERINFO",
            //     userInfo: {...appState.userInfo,examID:data?.ExamID}
            //   });
          console.log({data})
  };

    return ( <div>
        <Button
    onClick={()=>{handleSubmit()}}
    >Create Question</Button>
    </div> );
}
 
export default AddQuestion;