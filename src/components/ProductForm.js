import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


function ProductForm() {
  const [name,setName] = useState('');
  const [description,setDes] = useState('');
  const [price,setPrice] = useState('');
  const [category,setCategory] = useState('');
  const [image,setImage] = useState('');

  const submitProduct = e => {
    e.preventDefault();
    const data = {
      name, description, price, category, image
    }
    console.log('result:',data);
    postProduct(data);
  }; 
  const postProduct = (data) => {
    axios.post("http://localhost/backend/product/create.php/",data
    ,{
      headers: {'Access-Control-Allow-Origin': '*'},
      mode: 'cors',
      method: 'POST',
      enctype: 'multipart/form-data'
    }
    )
    .then((response) => {
      <Redirect to='/manage-product' />;
      console.log(response);
    })
    .catch(e => {
      console.log(e.message);
    });
  }
  return (
    <div>
      <div
        className="container rounded-3 bg-dark text-white"
        style={{ marginTop: "100px" }}
      >
        <br></br>
        <h1
          style={{
            color: "#7DDCB8 ",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          <strong>Add New Product</strong>
        </h1>
        <hr></hr>
        <form onSubmit={submitProduct}>
          <div className="mb-3">
            <label className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
            />
          </div><br></br>
          <button type="submit" className="btn btn-warning text-dark">
            Submit
          </button>
        </form>
        <br></br>
      </div>
      <br></br>
    </div>
  );
}

export default ProductForm;
