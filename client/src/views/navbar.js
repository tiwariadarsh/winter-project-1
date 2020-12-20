import { React, Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../assets/logo.png';
import Cart from '../assets/cart.png';
import SI from '../assets/searchIcon.png';
import '../assets/navbarStyle.css';
import Login from './Login';

class Navbar extends Component{
    
    
    render(){
    return(<div className="Navbar">
        <nav className="navbar navbar-light bg-light navbar-default">
                    <div className="container">
                    <div className="navbar-header">
                    <span className="headers">
                        <Link className="navbar-brand" to={"/"}>
                            <img src={ Logo } alt="IIIT.com" width="120" height="24"/>
                        </Link>
                        <form className="d-flex search">
                            <input type="search" placeholder="Search" aria-label="Search"/>
                            <button  type="submit">
                                <img src={ SI } alt="search" width="20" height="20"/>
                            </button>
                        </form>
                        </span>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right navbar-light bg-light">
                            <li><Link to={"/login"}>LogIn/SignIn</Link></li>
                            <li><Link to={"/productsInCart"}>
                                    <div class="contain">
                                        <img src={ Cart } alt="Cinque Terre" width="35" height="25"/>
                                        <div class="center" key={this.props.inCart.length} >{this.props.inCart.length}</div>
                                    </div>
                                </Link>
                            </li>

                            
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
    );
}
}
const mapStateToProps = (state) =>{
    return{
        inCart : state.productsInCart
    }
}

export default connect(mapStateToProps)(Navbar);
