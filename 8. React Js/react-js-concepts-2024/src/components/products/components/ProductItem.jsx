import styles from "./productItem.module.css";

const ButtonComponent = () => {
  return <button className={styles.buttonStyle}>Click</button>;
};

const ProductItem = ({ singleProductItem, key }) => {
  return (
    <div
      style={{ padding: "20px", border: "2px solid red", marginBottom: "10px" }}
      key={key}
    >
      <p className={styles.productTitle}>{singleProductItem}</p>
      <ButtonComponent />
    </div>
  );
};

export default ProductItem;
