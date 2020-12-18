import {React, Component} from 'react';
import {connect} from 'react-redux';
import '../assets/cartStyle.css';

class Cart extends Component{

    handleSubstractItems = (e) => {
        let id = parseInt(e.target.id);
        this.props.substractNumberOfItems(id);
    }
    handleAddItems = (e) => {
        let id = parseInt(e.target.id);
        this.props.addNumberOfItems(id);
    }
    handleRemove = (e) => {
        let id = parseInt(e.target.id);
        this.props.updateCart(id);
    }

    render(){
        const productsInCart = this.props.productsInCart;
        const inCartList = productsInCart.length ? (
            productsInCart.map(productInCart => {return(
           <div>
            <div className="cart-ldiv">
                <div className="cart-img-div">
                    <img className="img-thumbnail rounded float-start"  src={productInCart.imgUrl}/>
                </div>
                <div className="cart-info-div">
                    <span>{productInCart.name}</span><br/>
                    <p><span>&#8377;{Math.round(productInCart.price - (productInCart.discount/100)*productInCart.price)}</span>&nbsp;<s>&#8377;{productInCart.price}</s> {productInCart.discount}% off</p>
                    {productInCart.inStock ? <p>In Stock</p> : <p className="text-danger" >Out of Stock</p>}
                    {Math.round(productInCart.price - (productInCart.discount/100)*productInCart.price) > 1000 ? <p>Free Delevery</p> : <p>Delevery Charges Applied</p>}
                    <button type="button" className="btn cart-mk" id={productInCart.pId} onClick={this.handleSubstractItems} >-</button> <button className="btn cart-count">{productInCart.numberOfItems}</button> <button className="btn cart-mk" id={productInCart.pId} onClick={this.handleAddItems} >+</button><br/>
                    <button className="btn btn-danger cart-remove" id={productInCart.pId} onClick={this.handleRemove}>REMOVE</button>
                </div>
            </div>
            <hr/>
            </div>
        )})
        ):( <div className='jumbotron'>HEY, NO PRODUCTS ADDED IN CART YET</div>);

        var totalPrice=0, netPrice=0, idca=false;
        
        productsInCart.forEach(product => {
            totalPrice += product.numberOfItems*product.price;
            netPrice += product.numberOfItems*(product.price - (product.discount/100)*product.price);
            if((product.price - (product.discount/100)*product.price) < 1000)
                idca = true;
        });

        let dCharge = idca ? 120 : 0;

        const priceDetails = productsInCart.length ? (
            <div className="cart-price">
                    <div><span className="float-left"> TOTAL PRICE</span> <span className="float-right">&#8377;{Math.round(netPrice)}</span></div>
                        <div><span className="float-left">DISCOUNT</span><span className="float-right">&#8377;{Math.round(totalPrice-netPrice)}</span></div>
                        <div><span className="float-left">DELEVERY CHARGES</span><span className="float-right">&#8377;{dCharge}</span></div> 
                        <hr/>
                        
                        <div className="net-total"><span className="float-left">TOTAL AMOUNT</span><span className="float-right">&#8377;{Math.round(netPrice + dCharge)}</span></div>
                          <button class="btn btn-primary buy-btn" type="button">PROCEED TO BUY</button>
                        </div>
        ):(<div></div>)

        const headers = productsInCart.length ? (
            <div>
                <div className="cart-mld">
                <div className="my-cart-div">
                    <span className="my-cart">MY CART ( {this.props.productsInCart.length} ) </span>
                </div>
                </div>
                <div className="cart-mrd">
                    <div className="cart-price-details">
                        <span>PRICE DETAILS</span>
                    </div>
                </div>
            </div>
        ):(<div></div>)

        return(
            <div className="Cart">
            <div>
                {headers}
            </div>
            <div className="cart-mld">   
            {inCartList}
            </div>
                <div className="cart-mrd cart-sticky">
                    {priceDetails}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.productsInCart.length)
    return{
        productsInCart: state.productsInCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateCart: (id) => {
            dispatch({type:'UPDATE_CART',id:id});
        },
        addNumberOfItems: (id) => {
            dispatch({type:'ADD_ITEM',id:id});
        },
        substractNumberOfItems: (id) => {
            dispatch({type:'SUBSTRACT_ITEM',id:id});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);