import { useState } from "react";
import { Button, Card } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Item = ({ title, price, image, addNewDessert }) => {
  const { Meta } = Card;
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount((currentAmount) => currentAmount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount((currentAmount) => currentAmount - 1);
    }
  };

  return (
    <Card
      style={{ left: "15%", width: 250 }}
      cover={<img alt="img" src={image} height="250" />}
      actions={[
        <PlusOutlined key="increase" onClick={increaseAmount} />,
        amount,
        <MinusOutlined key="decrease" onClick={decreaseAmount} />,
        <Button
          type="text"
          onClick={() => addNewDessert(title, amount, setAmount)}
        >
          Add
        </Button>,
      ]}
    >
      <Meta title={title} description={price} />
    </Card>
  );
};

export default Item;
