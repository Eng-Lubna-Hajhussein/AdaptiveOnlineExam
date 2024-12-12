// import React, { useState, useContext } from "react";
// import {
//   Button,
//   CssBaseline,
//   CircularProgress,
//   Divider,
//   TextField,
//   Box,
//   Container,
//   Grid,
//   Typography,
// } from "@basetoolkit/ui";
// import useFetch from "../../../hooks/useFetch";
// import { AppContext } from "../../../contextapi/contexts/AppContext";
// import Header from "./header/Header";
// import Swal from "sweetalert2";
// import AddExamQuestionCard from "./AddExamQuestionCard";
// import { useParams } from "react-router-dom";

// export default function AddExamQuestion() {
//   const { appState } = useContext(AppContext);
//   const { examID } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [{ data, isLoading, isError }, fetchData] = useFetch();
//   const [questions, setQuestions] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const fields = new FormData(event.currentTarget);
//     const headers = {
//       method: "POST",
//       body: JSON.stringify({
//         grade: fields.get("grade"),
//         skill: fields.get("skill"),
//         kpiNumber: fields.get("kpiNumber"),
//         level: fields.get("level"),
//         examID: examID,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     setLoading(true);
//     const response = await fetchData(
//       "http://localhost:4000/questionKPI",
//       headers
//     );
//     setLoading(false);
//     if (response?.questions?.length) {
//       setQuestions(response.questions);
//     }
//     if (!response?.questions?.length) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         html: `<h5>No Questions Found</h5>`,
//         footer: `<a href="">Why do I have this issue?</a>`,
//       });
//     }
//   };
//   return (
//     <React.Fragment>
//       <Header />
//       <Container>
//         <CssBaseline />
//         <Grid container justifyContent={"center"}>
//           <Grid item xs={"6"}>
//             <Box
//               sx={{
//                 marginTop: 5,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Grid
//                 item
//                 xs="12"
//                 container
//                 justifyContent={"center"}
//                 alignItems={"center"}
//               >
//                 <Typography
//                   style={{
//                     color: "#e92239",
//                     fontWeight: "600",
//                     marginBottom: "25px",
//                     fontSize: "25px",
//                   }}
//                 >
//                   ADD NEW QUESTION TO YOUR EXAM!
//                 </Typography>
//               </Grid>
//               <Box component="form" onSubmit={handleSubmit}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     gap: "16px",
//                     marginBottom: "16px",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <TextField
//                     margin="normal"
//                     required
//                     sx={{ flex: 1 }}
//                     id="grade"
//                     label="Question Grade"
//                     name="grade"
//                     autoFocus
//                   />
//                   <TextField
//                     margin="normal"
//                     required
//                     sx={{ flex: 1 }}
//                     id="skill"
//                     label="Question Skill"
//                     name="skill"
//                   />
//                 </Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     gap: "16px",
//                     marginBottom: "16px",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <TextField
//                     margin="normal"
//                     required
//                     sx={{ flex: 1 }}
//                     id="kpiNumber"
//                     label="Question KPI Number"
//                     name="kpiNumber"
//                   />
//                   <TextField
//                     margin="normal"
//                     required
//                     sx={{ flex: 1 }}
//                     id="level"
//                     label="Question Level"
//                     name="level"
//                   />
//                 </Box>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="outlined"
//                   sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
//                   disabled={isLoading}
//                 >
//                   SEARCH
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
//           {loading && (
//             <Grid
//               item
//               xs="12"
//               justifyContent={"center"}
//               alignContent={"center"}
//             >
//               <CircularProgress />
//             </Grid>
//           )}
//           {!!questions.length && (
//             <Grid item xs="12" container justifyContent={"center"}>
//               <Grid item xs="12">
//                 <Divider>QUESTIONS BANK</Divider>
//                 <Grid item xs="12"></Grid>
//                 {questions.map((question) => (
//                   <Grid item xs="12" sx={{ padding: "10px" }} key={question.id}>
//                     <AddExamQuestionCard
//                       question={question}
//                       examID={examID}
//                       dir={appState.dir}
//                     />
//                   </Grid>
//                 ))}
//               </Grid>
//             </Grid>
//           )}
//         </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }


import React, { useState, useContext } from "react";
import {
  Button,
  CssBaseline,
  CircularProgress,
  Divider,
  TextField,
  Box,
  Container,
  Grid,
  Typography,
} from "@basetoolkit/ui";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import Header from "./header/Header";
import AddExamQuestionCard from "./AddExamQuestionCard";
import { useParams } from "react-router-dom";
import AlertDialog from "../../public/AlertDialog/AlertDialog";

export default function AddExamQuestion() {
  const { appState } = useContext(AppContext);
  const { examID } = useParams();
  const [loading, setLoading] = useState(false);
  const [{ data, isLoading }, fetchData] = useFetch();
  const [questions, setQuestions] = useState([]);
  const [alertConfig, setAlertConfig] = useState({
    open: false,
    title: "",
    message: "",
    alertType: "success",
  });

  const handleAlertClose = () => {
    setAlertConfig((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const headers = {
      method: "POST",
      body: JSON.stringify({
        grade: fields.get("grade"),
        skill: fields.get("skill"),
        kpiNumber: fields.get("kpiNumber"),
        level: fields.get("level"),
        examID: examID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    setLoading(true);
    const response = await fetchData(
      "http://localhost:4000/questionKPI",
      headers
    );
    setLoading(false);
    if (response?.questions?.length) {
      setQuestions(response.questions);
    } else {
      setAlertConfig({
        open: true,
        title: "Oops...",
        message: "No Questions Found",
        alertType: "error",
      });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <CssBaseline />
        <Grid container justifyContent={"center"}>
          <Grid item xs={"6"}>
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs="12"
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  style={{
                    color: "#e92239",
                    fontWeight: "600",
                    marginBottom: "25px",
                    fontSize: "25px",
                  }}
                >
                  ADD NEW QUESTION TO YOUR EXAM!
                </Typography>
              </Grid>
              <Box component="form" onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    sx={{ flex: 1 }}
                    id="grade"
                    label="Question Grade"
                    name="grade"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    sx={{ flex: 1 }}
                    id="skill"
                    label="Question Skill"
                    name="skill"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "16px",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    margin="normal"
                    required
                    sx={{ flex: 1 }}
                    id="kpiNumber"
                    label="Question KPI Number"
                    name="kpiNumber"
                  />
                  <TextField
                    margin="normal"
                    required
                    sx={{ flex: 1 }}
                    id="level"
                    label="Question Level"
                    name="level"
                  />
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, color: "#e92239", borderColor: "#000" }}
                  disabled={isLoading}
                >
                  SEARCH
                </Button>
              </Box>
            </Box>
          </Grid>
          {loading && (
            <Grid
              item
              xs="12"
              container
              justifyContent={"center"}
              alignContent={"center"}
            >
              <CircularProgress />
            </Grid>
          )}
          {!!questions.length && (
            <Grid item xs="12" container justifyContent={"center"}>
              <Grid item xs="12">
                <Divider>QUESTIONS BANK</Divider>
                <Grid item xs="12"></Grid>
                {questions.map((question) => (
                  <Grid item xs="12" sx={{ padding: "10px" }} key={question.id}>
                    <AddExamQuestionCard
                      question={question}
                      examID={examID}
                      dir={appState.dir}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
      <AlertDialog
        open={alertConfig.open}
        onClose={handleAlertClose}
        title={alertConfig.title}
        message={alertConfig.message}
        alertType={alertConfig.alertType}
      />
    </React.Fragment>
  );
}
