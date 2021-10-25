import { Form, Input, Button, InputNumber, Card, Avatar } from "antd";
import { useState } from "react";

const Home = () => {
  const [selectedDesserts, setSelectedDessert] = useState({});

  const onFinish = (values) => {
    setSelectedDessert(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Dessert name:"
        name="dessert"
        rules={[
          {
            required: true,
            message: "Please insert new dessert!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Amount: "
        name="amount"
        rules={[
          {
            required: true,
            message: "Please choose your amount!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Home;
