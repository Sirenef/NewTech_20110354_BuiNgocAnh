import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import { Table } from "antd";

function App() {
  const [listNotification, setListNotification] = useState([]);
  const getListNotification = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/v1/notification/getAll"
      );
      return res.data.data;
    } catch (err) {
      console.log("error", err);
    }
  };
  const colums = [
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "File",
      dataIndex: "file",
      key: "file",
    },
  ];
  useEffect(() => {
    getListNotification().then((res) => {
      setListNotification(res);
    });
  });
  return (
    <>
      <Table columns={colums} dataSource={listNotification}></Table>
    </>
  );
}

export default App;
