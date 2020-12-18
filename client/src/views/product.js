import { React, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../assets/productStyle.css';


class Product extends Component{
    state = {
        altImages: this.props.product.altImages,
        image: this.props.product.imgUrl,
        btnCheck: this.props.product.inCart
    }

    handleClick = (e) =>{
        let idObject = {
            productId: this.props.product.pId,
            imageId: parseInt(e.target.alt)
        }
        this.props.updateImage(idObject);
        this.setState({
            ...this.state,
            altImage: this.props.product.altImages,
            image: this.props.product.imgUrl
        });
    }
    
    handleAddingToCart = (e) => {
        let id = this.props.product.pId;
        this.props.addToCart(id);
        this.setState({
            ...this.state,
            btnCheck: this.props.product.inCart
        });
    }

    render(){
        const altImagesList = this.state.altImages.length ?(
            this.state.altImages.map(altImage => {return(
                <img className="img-thumbnail rounded float-start" alt={altImage.aId} src={altImage.imgUrl} key={altImage.aId} onClick={ this.handleClick}/>
            );})
        ):(<div></div>);

        const btn = this.state.btnCheck ? (<Link to='/productsInCart' ><button className="btn btn-primary btn-a" >GO TO CART</button></Link>):(<button className="btn btn-primary btn-a" onClick={this.handleAddingToCart}>ADD TO CART</button>)

        const product = this.props.product ? (
            <div className="bg-div" >
            <div className="img-div sticky" >
                
            <div className="small-image">
            { altImagesList }
            </div>
             <div className="big-image">
             <img className="img-thumbnail rounded float-start rmv-border" alt="" src={ this.state.image}/>
           
              {btn}
             <button className="btn btn-success btn-b" >BUY</button>
             </div>
            </div>
            <div className="info-div" >
            <span>{this.props.product.name}</span><br/>
                            <p className="text-muted"><button className="btn btn-success" type="button" >{this.props.product.rating} &#9734;</button> {this.props.product.ratedBy} Ratings and {this.props.product.reviewedBy} Reviews</p>
                            <p><b><span>&#8377;{Math.round(this.props.product.price - (this.props.product.discount/100)*this.props.product.price)}</span></b> &nbsp; <s>&#8377; {this.props.product.price}</s> &nbsp; {this.props.product.discount}% off</p>
                            <br/><br/><br/><br/>
            </div>
        </div>
        ):(<div className='container text-danger'>
        <h2>Error 404: Product not Found</h2>
    </div>)
        return(
            <div>
               {product}
            </div>
        );
    }
}

const mapStateToProps = (state, myProps) => {
    let id = myProps.match.params.id;
    return{
        product: state.products.find(product => id==product.pId)
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        updateImage : (idObject) => {
            dispatch({type:'UPDATE_IMAGE', object:idObject});    
        },
        addToCart : (id) =>{
            dispatch({type:'ADD_TO_CART',id:id});
        }

    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);