import React , {Component} from 'react';
import {Link} from 'react-router-dom';


class Login extends Component {
    render() {
        return (
	<div>       
    <body>
	<div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span class="fa fa-android"></span></h2></span>
				<h4 className="company_title">IIIT.com</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form">
				<div className="container-fluid">
					<div className="row">
						<h2>Log In</h2>
					</div>
					<div className="row">
						<form className="form-group">
							<div className="row">
								<input type="text"  id="username" className="form__input" placeholder="Username" />
							</div>
							<div class="row">
								<input type="password"  id="password" className="form__input" placeholder="Password" />
							</div>
							 <div className="row">
								<input type="submit" value="Submit" className="btn" />
							</div> 
						</form>
					</div>
					<div className="row">
						<p>Don't have an account? 
                            <Link to='/register'>
                            Register Here
                            </Link>
                        </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
    </div>
        )
    }
}


export default Login
