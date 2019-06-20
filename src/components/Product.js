import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {

  render(){

    const {id, title, img, price} = this.props.product

    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
            <ProductConsumer>
                {(value) => (
                    <div 
                    className="img-container p-5" 
                    onClick={() => 
                    value.handleDetail(id)
                    }
                >
                    <Link to="/details">
                        <img src={img} alt="product" 
                        className="card-img-top"/>
                    </Link>
                    
                    </div>
                )}

                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">${price}</span>
                        </h5>
                    </div>
                </div>
        </ProductWrapper>
    )
  }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    })
}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: al 1s linear;
}

.img-container{
    position:relative;
    overflow:hidden;
    
}
.card-img-top{
    transition: all 1s linear;
    height:250px;
    width:100%;
}
.img-container:hover .card-img-top{
    transform(1.2);
}

.img-container:hover .cart-btn {
    transform: translate(0,0);
}
.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}
`
