import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="order" icon={<AppstoreOutlined />}>
          <Link to="/desserts_manager">Catalog Items</Link>
        </Menu.Item>

        <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
          <Link to="/desserts_manager/cart">Cart</Link>
        </Menu.Item>

        <Menu.Item key="stats" icon={<PieChartOutlined />}>
          <Link to="/desserts_manager/stats">Statistics</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default NavBar;
