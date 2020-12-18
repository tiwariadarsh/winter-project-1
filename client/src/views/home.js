import {React, Component} from 'react';
import { connect } from 'react-redux';
import {Link,NavLink} from 'react-router-dom';
import '../assets/homeStyle.css';

class Home extends Component{
    render(){
        const products = this.props.products;

        const productList = products.length ? (
            products.map(product => {return(
                <div>
                    <div className="mld">
                    </div>
    
                    <div className="mrd" key={product.pId}>
                        <Link to={'/products/' + product.pId } >
                            <div className="rdiv" >
                                    <div className="productImage">
                                        <img className="img-thumbnail rounded float-start" alt="" src={product.imgUrl}/>
                                    </div>

                                <div className="productInfo" >
                                    <span>{product.name}</span><br/>
                                    <p className="text-muted"><button className="btn btn-success" type="button" >{product.rating} &#9734;</button> {product.ratedBy} Ratings and {product.reviewedBy} Reviews</p>
                                    <p>{product.info.substring(0,300)}...</p>
                                </div>
    
                                <div className="productPrice">
                                    <span>&#8377; {Math.round(product.price - (product.discount/100)*product.price)}</span><br/>
                                    <p> <s>&#8377; {product.price}</s> &nbsp; {product.discount}% off</p>
                                    { product.emiAvailable ? <p>EMI Available</p>: <p className="text-danger" >EMI Not Available</p> }
                                    {product.inStock ? <p>In Stock</p> : <p className="text-danger" >Out of Stock</p>}
                                </div>
                            </div>
                        </Link>
                    </div> 
                </div>               
             ) })
        ) : (<div className='jumbotron'>HEY, NO PRODUCTS LAUNCHED YET</div>)
        return(
            <div className='home'>
                   { productList } 
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}


export default connect(mapStateToProps)(Home);