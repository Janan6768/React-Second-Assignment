// Show All Stock class Practice
function Stock({ products }) {
  return (
    <div className="top-div">
      <h1>Total Stock</h1>
      <div className="container">
        {products.map((p) => (
          <div className="main-container">
            <h2>{p.title}</h2>
            <p>Price : {p.price}</p>
            <span style={{ color: p.status ? "blue" : "red" }}>
              <p>{p.status ? "Available" : "Not Availible"}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stock;
