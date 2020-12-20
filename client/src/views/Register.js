import React , {Component} from 'react';


class Login extends Component {
    render() {
        return (
	<div>       
    <body>
	<div className="container-fluid">
		<div className="row main-content bg-success text-center">
			<div className="col-md-4 text-center company__info">
				<span className="company__logo"><h2><span class="fa fa-android"></span></h2></span>
				<h4 className="company_title">Shopify</h4>
			</div>
			<div className="col-md-8 col-xs-12 col-sm-12 login_form">
				<div className="container-fluid">
					<div className="row">
						<h2>Register</h2>
					</div>
					<div className="row">
						<form className="form-group">
                        <div class="row">
								<input type="text" name="Fullname" id="fullname" className="form__input" placeholder="Full Name" />
							</div>
							<div className="row">
								<input type="email" name="username" id="username" className="form__input" placeholder="E-Mail" />
							</div>
							<div class="row">
								<input type="password" name="password" id="password" className="form__input" placeholder="Password" />
							</div>
                            <div class="row">
								<input type="text" name="phonenumber" id="phonenumber" className="form__input" placeholder="Phone Number" />
							</div>
							 <div className="row">
								<input type="submit" value="Submit" className="btn" />
							</div> 
						</form>
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
