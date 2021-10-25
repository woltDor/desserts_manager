import { useState } from "react";
import { Form, Input, Button, InputNumber, Modal, message } from "antd";

const CustomDessertForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [form] = Form.useForm();

  const addNewDessert = () => {
    let allDesserts = JSON.parse(localStorage.getItem("desserts")) || {};

    if (allDesserts[name]) {
      allDesserts[name] += count;
    } else {
      allDesserts[name] = count;
    }

    message.success(`${count} ${name} were added to cart`);
    localStorage.setItem("desserts", JSON.stringify(allDesserts));
    form.resetFields();
  };

  const handleOk = () => {
    setIsModalVisible(false);
    addNewDessert();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = () => {
    setIsModalVisible(true);
  };

  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo.errorFields[0].errors[0]);
  };
  return (
    <>
      <Form
        name="control-hooks"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please choose your dessert!" }]}
        >
          <Input
            style={{ width: "95%" }}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Count"
          name="count"
          rules={[
            { required: true, message: "Please choose how many do you want!" },
          ]}
        >
          <InputNumber
            style={{ width: "95%" }}
            onChange={(e) => setCount(e)}
            min={0}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 11 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="New Order"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {`Do you want to add ${count} ${name}?`}
      </Modal>
    </>
  );
};

export default CustomDessertForm;
