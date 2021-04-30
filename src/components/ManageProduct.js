import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ManageProduct() {
    const [state, setstate] = useState([])
    useEffect(()=>{
        axios.get('http://localhost/backend/product/read.php')
        .then((res)=>{
            setstate(res.data);
            console.log(res);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    },[]) 
  return (
    <div className="container" style={{ marginTop: "70px", marginBottom: 250}}>
      <h2 style={{textAlign: "center"}}>Manage All Product</h2>
      <button className="btn btn-outline-warning">
        <Link
          to="/add-product"
          style={{ color: "dark", textDecoration: "none" }}
        >
          Add New Product
        </Link>
      </button><br></br><br></br>
      <table class="table table-dark table-hover">
          <tr>
          <th>#</th>
          <th>Product Name</th>
          <th style={{textAlign: "center"}}>Image</th>
          <th style={{textAlign: "center"}}>Price (BDT)</th>
          <th style={{textAlign: "center"}}>Category</th>
          <th style={{textAlign: "center"}}>Action</th>
          </tr>
          
          {state.map((item, index) => (
        <tr>
        <td>{index+1}</td>
          <td>{item.name}</td>
          <td style={{textAlign: "center"}}><img
            className="rounded-3"
            alt={item.name}
            width="80"
            src={'http://localhost/backend/product/'+item.image}>
              </img>
          </td>
          <td style={{textAlign: "center"}}>৳{item.price}</td>
          <td style={{textAlign: "center"}}>{item.category}</td>
          <td style={{textAlign: "center"}}>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-sm btn-warning">
                Edit
              </button>
              <button type="button" className="btn btn-sm btn-danger">
                Delete
              </button>
            </div>
          </td>
        </tr>
        ))}
      </table>
      
    </div>
  );
}

export default ManageProduct;
