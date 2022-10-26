import React from "react";
import './product.css';

const Product = (props) => {

    const renderProd = props.prodData.map((item) => {
        return(
            <div className="card">
                <img src={item.image} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.brand}</p>
                    <p>{item.description}</p>
                    <p>Rs.{item.cost}</p>
                    <p>{item.uses}</p>
                </div>
            </div>
        )
    })
    return(
        <div className="main">{renderProd}</div>
    )
}

export default Product;