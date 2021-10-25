import { useState } from "react";
import { List, Modal, message } from "antd";
import Item from "./Item";
import milkshakes from "../Images/milkshakes.png";
import chocolatechip from "../Images/chocolatechips.png";
import icecream from "../Images/icecream.png";
import muffin from "../Images/muffin.png";
import pancakes from "../Images/pancakes.png";

const RecommendedDesserts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const data = [
    {
      title: "Ice cream",
      price: "4$",
      image: icecream,
    },
    {
      title: "Milkshakes",
      price: "5$",
      image: milkshakes,
    },
    {
      title: "Chocolate chips",
      price: "5$",
      image: chocolatechip,
    },
    {
      title: "Muffin",
      price: "4$",
      image: muffin,
    },
    {
      title: "Pancakes",
      price: "3$",
      image: pancakes,
    },
  ];

  const addNewDessert = (title, count, setAmount) => {
    if (count > 0) {
      let allDesserts = JSON.parse(localStorage.getItem("desserts"));
      if (!allDesserts) {
        allDesserts = {};
      }
      if (allDesserts[title]) {
        allDesserts[title] += count;
      } else {
        allDesserts[title] = count;
      }
      setAmount(0);
      message.success(`${count} ${title} were added to cart`);
      localStorage.setItem("desserts", JSON.stringify(allDesserts));
    }
  };

  return (
    <>
      <List
        grid={{
          column: 5,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Item
              title={item.title}
              price={item.price}
              image={item.image}
              addNewDessert={addNewDessert}
            />
          </List.Item>
        )}
      />
      <Modal
        title="Order"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {`Do you want to add them?`}
      </Modal>
    </>
  );
};

export default RecommendedDesserts;
