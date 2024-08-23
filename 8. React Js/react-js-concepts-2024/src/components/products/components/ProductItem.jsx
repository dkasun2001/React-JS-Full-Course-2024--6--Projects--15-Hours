const ButtonComponent = () => {
  return <button>Click</button>;
};

const ProductItem = () => {
  return (
    <div>
      <p>Product 1</p>
      <ButtonComponent />
    </div>
  );
};

export default ProductItem;
