import { useContext, useEffect, useState } from "react";
import { Button } from "@basetoolkit/ui";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";
import AlertDialog from "../../public/AlertDialog/AlertDialog";

const AddQuestion = () => {
  const { appState } = useContext(AppContext);
  const { fetchData } = useFetch();

  const teacherID = JSON.parse(localStorage.getItem("AppState"))?.userInfo
    ?.teacherID;

  const [alertConfig, setAlertConfig] = useState({
    open: false,
    title: "",
    message: "",
    alertType: "success",
  });

  const handleAlertClose = () => {
    setAlertConfig((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = async () => {
    const headers = {
      method: "POST",
      body: JSON.stringify({
        teacherID: teacherID,
        kpiNumber: "12",
        level: "المستوى الأساسي",
        grade: "4",
        skill: "النحو والصرف",
        questionText: "questionText",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const question = await fetchData("http://localhost:4000/question", headers);

    if (question) {
      setAlertConfig({
        open: true,
        title: "Success",
        message: "Question has been added successfully!",
        alertType: "success",
      });
    } else {
      setAlertConfig({
        open: true,
        title: "Oops...",
        message: "Failed to add the question.",
        alertType: "error",
      });
    }
  };

  return (
    <div>
      <Button onClick={handleSubmit}>Create Question</Button>

      <AlertDialog
        open={alertConfig.open}
        onClose={handleAlertClose}
        title={alertConfig.title}
        message={alertConfig.message}
        alertType={alertConfig.alertType}
      />
    </div>
  );
};

export default AddQuestion;
