import React, {useState, useEffect} from "react";
import axios from "axios";

function ManageOrder() {
  const [state, setstate] = useState([])
  useEffect(()=>{
        axios.get('http://localhost/backend/order/all_order.php')
        .then((res)=>{
            setstate(res.data);
            console.log(res);
        })
        .catch((error)=>{
            console.log(error.message);
        })
  },[])
  return (
    <div className="container" style={{ marginTop: "70px", marginBottom: 250 }}>
      <h2 style={{ textAlign: "center" }}>Manage Customers Order</h2>
      <br></br>
      <table class="table table-dark table-hover">
        <tr>
          <th>#</th>
          <th>Customer Name</th>
          <th style={{ textAlign: "center" }}>Product</th>
          <th style={{ textAlign: "center" }}>Quantity</th>
          <th style={{ textAlign: "center" }}>Total Price (BDT)</th>
          <th style={{ textAlign: "center" }}>Order Status</th>
          <th style={{ textAlign: "center" }}>Action</th>
        </tr>
        {state.map((item, index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.customer_name}</td>
          <td style={{ textAlign: "center" }}>
            {item.product_name}<br></br>
          <img
            className="rounded-3"
            alt={item.name}
            width="60"
            src={'http://localhost/backend/product/'+item.image}>
              </img>
          </td>
          <td style={{ textAlign: "center" }}>{item.quantity} piece</td>
          <td style={{ textAlign: "center" }}>৳{item.total_price}</td>
          <td style={{ textAlign: "center" }}>{item.status}</td>
          <td style={{ textAlign: "center" }}>
            <button type="button" class="btn btn-sm btn-warning text-white">
              Processing
            </button>
            <button type="button" class="btn btn-sm btn-info">
              Shipped
            </button>
            <button type="button" class="btn btn-sm btn-success">
              Delivered
            </button>
          </td>
        </tr>
        ))}
      </table>
    </div>
  );
}

export default ManageOrder;
