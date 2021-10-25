import { useEffect, useState } from "react";
import { Table, Space, Button, Divider } from "antd";

const ListDesserts = () => {
  const initialDesserts = () =>
    JSON.parse(localStorage.getItem("desserts")) || {};

  const [allDesserts, setAllDesserts] = useState(initialDesserts);
  const [arrayOfDesserts, setArrayOfDesserts] = useState([]);

  const convertDessertsData = (data) =>
    Object.keys(data).map((dessert) => {
      return { name: dessert, count: data[dessert] };
    });

  useEffect(() => {
    setArrayOfDesserts(convertDessertsData(allDesserts));
  }, [allDesserts]);

  const deleteRow = (row) => {
    delete allDesserts[row.name];
    localStorage.setItem("desserts", JSON.stringify(allDesserts));
    setAllDesserts(allDesserts);
    setArrayOfDesserts(convertDessertsData(allDesserts));
  };

  const columns = [
    {
      title: "Dessert Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1),
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
      sorter: (a, b) => a.count - b.count,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="text" onClick={() => deleteRow(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Divider orientation="center">Ordered Desserts</Divider>
      <Table
        style={{ width: "50%", margin: "0 auto" }}
        columns={columns}
        dataSource={arrayOfDesserts}
        size="middle"
      />
    </>
  );
};

export default ListDesserts;
