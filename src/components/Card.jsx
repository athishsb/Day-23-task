import { useState } from "react";
import PropTypes from "prop-types";

export default function Card({cart,setCart,product}) {
    let [toggle,setToggle]=useState(true);
  return (
    <section>
        <div className="mb-5">
            <div className="card h-100">
                {
                    product.sale? (
                        // <!-- Sale badge-->
                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                    ):("")
                }
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={product.image} alt="..."/>
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                    {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{product.name}</h5>
                        {
                            product.reviews?(
                            // <!-- Product reviews-->
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                            ):("")
                        }
                        {
                            product.offer?(
                            // <!-- Product price-->
                                <div>
                                    <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>{product.price}
                                </div>
                            ):(product.price)
                            }
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        {
                            toggle ? <button className="btn btn-outline-success mt-auto" href="#" onClick={()=>{setCart(cart+1);setToggle(false);}}>Add to cart</button> : <button className="btn btn-outline-danger mt-auto" href="#" onClick={()=>{setCart(cart-1);setToggle(true);}}>Remove from cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}

Card.propTypes={
    cart: PropTypes.number,
    setCart: PropTypes.func,
    product: PropTypes.object,
}
