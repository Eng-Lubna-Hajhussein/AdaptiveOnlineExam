import { useContext } from "react";
import Button from "@basetoolkit/ui";
import useFetch from "../../../hooks/useFetch";
import { AppContext } from "../../../contextapi/contexts/AppContext";


const AddExam = () => {
  const { appState, appDispatch } = useContext(AppContext);

  const [{ data, isLoading, isError }, fetchData] = useFetch();

  const handleSubmit = async (event) => {
      event.preventDefault();
      const fields = new FormData(event.currentTarget);

    const headers = {
      method: "POST",
      body: JSON.stringify({
        teacherID: appState.userInfo.teacherID,
        startDate: fields.get("startDate"),
        endDate: fields.get("endDate"),
        duration: fields.get("duration"),
        attemptsAllowed: fields.get("attemptsAllowed"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetchData("http://localhost:4000/exam", headers);
    appDispatch({
      type: "GET_EXAMINFO",
      examInfo: { examID: response?.examID },
    });
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleSubmit();
        }}
      >
        Create Exam
      </Button>
    </div>
  );
};

export default AddExam;
