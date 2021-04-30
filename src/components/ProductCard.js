import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductCard(){
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
  const [state, setstate] = useState([]);
  const [product_id,setProductId] = useState('');
  const [quantity,setQuantity] = useState('');
  const [customer_id,setCustomerId] = useState('');
  const [price,setPrice] = useState('');
  const submitOrder = e => {
    e.preventDefault();
    const data = {
      product_id, quantity, customer_id, price
    }
    console.log('result:',data);
    // postOrder(data);
  }; 
  const postOrder = (data) => {
    axios.post("http://localhost/backend/order/new_order.php",data
    ,{
      headers: 'Access-Control-Allow-Origin: *',
      mode: 'cors',
      method: 'POST',
    }
    )
    .then((response) => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  };
  if (localStorage.getItem('user_id')) {
    return (
      <div className="container">
        <div className="row">
          {state.map((item, index)=>(
        <div className="col-sm-3">
        <div className="card border-3 text-center bg-dark text-white">
          <img
            src={'http://localhost/backend/product/'+item.image}
            className="card-img-top"
            // width="50"
            // height="150"
            alt="Stylish White Shirt for Men"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Price: ৳{item.price} (BDT)
            </p>
            <form onSubmit={submitOrder}>
              <input type="hidden" value={(e) => setProductId(item.id)} />
              <input type="hidden" value={(e) => setCustomerId(localStorage.getItem('user_id'))} />
              <input type="hidden" value={(e) => setQuantity(1)} />
              <input type="hidden" value={(e) => setProductId(item.price)} />
            <button type="submit" className="btn btn-warning text-dark">
              Order Now
            </button>
            </form>
          </div>
        </div>
      </div>
      ))}
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="container">
        <div className="row">
          {state.map((item, index)=>(
        <div className="col-sm-3">
        <div className="card border-3 text-center bg-dark text-white">
          <img
            src={'http://localhost/backend/product/'+item.image}
            className="card-img-top"
            // width="50"
            // height="150"
            alt="Stylish White Shirt for Men"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Price: ৳{item.price} (BDT)
            </p>
            <form onSubmit={submitOrder}>
              <input type="hidden" value={(e) => setProductId(item.id)} />
              <input type="hidden" value={(e) => setCustomerId(localStorage.getItem('user_id'))} />
              <input type="hidden" value={(e) => setQuantity(1)} />
              <input type="hidden" value={(e) => setProductId(item.price)} />
            <button type="submit" className="btn btn-warning text-dark">
            <Link to="/login">login to make a order</Link>
            </button>
            
            </form>
          </div>
        </div>
      </div>
      ))}
        </div>
      </div>
    );
  } 
  }
export default ProductCard;
