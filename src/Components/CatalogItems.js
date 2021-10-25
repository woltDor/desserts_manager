import { Divider } from "antd";
import CustomDessertForm from "./CustomDessertForm";
import RecommendedDesserts from "./RecommendedDesserts";

const CatalogItems = () => {
  return (
    <>
      <div style={styles.title}>
        <h1>Catalog Items</h1>
      </div>
      <Divider orientation="center">Top Rated Desserts</Divider>
      <RecommendedDesserts />
      <Divider orientation="center">Custom Dessert</Divider>
      <CustomDessertForm />
    </>
  );
};

const styles = {
  title: {
    "text-align": "center",
  },
};

export default CatalogItems;
