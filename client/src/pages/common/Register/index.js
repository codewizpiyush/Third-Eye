import { Form, message, Select } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../apicalls/users";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await registerUser(values);

      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (

    

      

      <div className="flex justify-center items-center h-screen w-screen view">
        <div className="card w-400 p-3 bg-white br ">
          <div className="flex flex-col">
            <h1 className="text-2xl">
              REGISTER<i class="ri-user-add-line"></i>
            </h1>
            <div className="divider"></div>
            <Form layout="vertical" className="mt-2" onFinish={onFinish}>
              <Form.Item name="name" label="Name">
                <input type="text" className="bri" />
              </Form.Item>
              <Form.Item name="enrollmentNo" label="Enrollment No">
                <input type="text" className="bri" />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <input type="text" className="bri" />
              </Form.Item>
              <Form.Item name="password" label="Password">
                <input type="password" className="bri" />
              </Form.Item>
              <Form.Item name="phoneNo" label="Phone No">
                <input type="number" className="bri" />
              </Form.Item>
              <Form.Item name="yearLevel" label="Year Level" >
                <Select className="custom-select" placeholder="Please Select">
                  {/* <Select.Option value="" disabled className="">Please Select</Select.Option> */}
                  <Select.Option value="1st Year" className="">1st Year</Select.Option>
                  <Select.Option value="2nd Year" className="">2nd Year</Select.Option>
                  <Select.Option value="3rd Year" className="">3rd Year</Select.Option>
                  <Select.Option value="4th Year" className="">4th Year</Select.Option>
                  <Select.Option value="teacher" className="">Not Applied</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="degreeProgram" label="Degree Program" >
                <Select className="custom-select" placeholder="Please Select">
                  {/* <Select.Option value="" disabled className="bri">Please Select</Select.Option> */}
                  <Select.Option value="Btech in Computer Science" className="">Btech in Computer Science</Select.Option>
                  <Select.Option value="Btech in Information Technology" className="">Btech in Information Technology</Select.Option>
                  <Select.Option value="Btech in Aritificial Intelligence and Data Science" className="">Btech in Aritificial Intelligence and Data Science</Select.Option>
                  <Select.Option value="Btech in Computer Science and Information Technology" className="">Btech in Computer Science and Information Technology</Select.Option>
                  <Select.Option value="teacher" className="">Not Applied</Select.Option>
                </Select>
              </Form.Item>

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="primary-contained-btn mt-2 w-100 bri"
                >
                  Register
                </button>
                <Link to="/login">Already a member? Login</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    
  );
}

export default Register;
