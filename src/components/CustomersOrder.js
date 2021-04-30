import React, {useState, useEffect} from "react";
import axios from "axios";

function CustomersOrder() {
  const [state, setstate] = useState([])
  useEffect(()=>{
        axios.get('http://localhost/backend/order/customers_order.php?customer_id='+localStorage.getItem('user_id'))
        .then((res)=>{
            setstate(res.data);
            console.log(res);
        })
        .catch((error)=>{
            console.log(error.message);
        })
  },[])
  return (
    <>
      <br></br><br></br>
      <div className="container"><br></br>
      <h3>Your orders: </h3>
      <hr></hr>
      <div style={{marginBottom: 300}}>
      {state.map((item, index)=>(
        <div className="card border-3 rounded-3 mb-3 bg-dark text-white">
        <div className="row g-0">
          <div className="col-md-4">
            <img
            className="rounded-3"
              src={'http://localhost/backend/product/'+item.image}
              alt="Test name"
              width="300"
              height="230"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.product_name}</h5>
              <p className="card-text">
                Quantity: {item.quantity} Pieces
                <br></br>
                Unite Price: ৳{item.price} (BDT)
                <hr></hr>
                Total Price : ৳{item.total_price} (BDT)
              </p>
              <p className="card-text">
                  <small class="text-white">Order Status: <strong class="text-warning">{item.status}</strong></small>
              </p>             
            </div>
          </div>
        </div>
      </div>
    ))}
      </div>
      </div>
      </>
  )
}

export default CustomersOrder
