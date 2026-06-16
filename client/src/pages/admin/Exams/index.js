import { message, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteExamById, getAllExams, verifyExamById } from "../../../apicalls/exams";
import PageTitle from "../../../components/PageTitle";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";


function Exams() {
  
  const navigate = useNavigate();
  const [exams, setExams] = React.useState([]);
  
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const getExamsData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllExams();
      dispatch(HideLoading());
      if (response.success) {
        setExams(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const deleteExam = async (examId) => {
    try {
      dispatch(ShowLoading());
      const response = await deleteExamById({
        examId,
      });
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        getExamsData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const columns = [
    {
      title: "Exam Name",
      dataIndex: "name",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
    },
    {
      title: "Passing Marks",
      dataIndex: "passingMarks",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="flex gap-2 wid">
          <i
            className="ri-pencil-line"
            onClick={() => navigate(`/admin/exams/edit/${record._id}`)}
          ></i>
          <i
            className="ri-delete-bin-line"
            onClick={() => deleteExam(record._id)}
          ></i>
          {(user.role === "admin") && record.isVerified ?

            (
              <button
                className={` colorbtn ${record.isVerified ? "text-green-500" : "text-red-500"}`}
                onClick={async () => {
                  try {
                    dispatch(ShowLoading());
                    const newVerifiedStatus = !record.isVerified; // toggle value
                    const response = await verifyExamById(record._id, newVerifiedStatus);
                    dispatch(HideLoading());
                    if (response.success) {
                      message.success(response.message);
                      getExamsData(); // refresh
                    } else {
                      message.error(response.message);
                    }
                  } catch (error) {
                    dispatch(HideLoading());
                    message.error(error.message);
                  }
                }}
              >Approved</button>
            ) 

            : 

            ( (user.role === "admin") &&
              <button
                className={` colorbtn1 ${record.isVerified ? "text-green-500" : "text-red-500"}`}
                onClick={async () => {
                  try {
                    dispatch(ShowLoading());
                    const newVerifiedStatus = !record.isVerified; // toggle value
                    const response = await verifyExamById(record._id, newVerifiedStatus);
                    dispatch(HideLoading());
                    if (response.success) {
                      message.success(response.message);
                      getExamsData(); // refresh
                    } else {
                      message.error(response.message);
                    }
                  } catch (error) {
                    dispatch(HideLoading());
                    message.error(error.message);
                  }
                }}
              >Denied</button>
            )

          }

         
        </div>
      ),
    },
  ];
  useEffect(() => {
    getExamsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="flex justify-between mt-2 items-end">
        <PageTitle title="Exams" />

        <button
          className="primary-outlined-btn flex items-center"
          onClick={() => navigate("/admin/exams/add")}
        >
          <i className="ri-add-line"></i>
          Add Exam
        </button>
      </div>
      <div className="divider"></div>

      <Table columns={columns} dataSource={exams} />
    </div>
  );
}

export default Exams;
