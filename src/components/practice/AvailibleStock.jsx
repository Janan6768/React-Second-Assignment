// show Availible stock class Practice
function AvailibleStock({ products }) {
  const avalibleItems = products.filter((p) => p.status);
  return (
    <div className="top-div">
      <h1>Availible Stock</h1>
      <div className="container">
        {avalibleItems.map((p) => (
          <div className="main-container">
            <h2>{p.title}</h2>
            <p>Price : {p.price}</p>
            <span style={{ color: p.status ? "blue" : "red" }}>
              <p>{p.status ? "Availible" : "Not Availible"}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailibleStock;
