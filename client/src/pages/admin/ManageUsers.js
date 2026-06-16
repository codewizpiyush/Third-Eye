import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import PageTitle from "../../components/PageTitle";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loaderSlice";
import { getAllUsers, updateUserStatus } from "../../apicalls/users";

function ManageUsers() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllUsers();
      dispatch(HideLoading());
      if (response.success) {
        setUsers(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const toggleBlockUser = async (userId, currentStatus) => {
    try {
      dispatch(ShowLoading());
      const response = await updateUserStatus(userId, !currentStatus);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        fetchUsers(); // Refresh user list
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
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Status",
      dataIndex: "isBlocked",
      render: (text, record) => (
        <span className={record.isBlocked ? "text-red-500" : "text-green-500"}>
          {record.isBlocked ? "Blocked" : "Active"}
        </span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <button
          className="primary-contained-btn"
          onClick={() => toggleBlockUser(record._id, record.isBlocked)}
        >
          {record.isBlocked ? "Unblock" : "Block"}
        </button>
      ),
    },
  ];

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageTitle title="Manage Users" />
      <div className="divider"></div>
      <Table columns={columns} dataSource={users} />
    </div>
  );
}

export default ManageUsers;