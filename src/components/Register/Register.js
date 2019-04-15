import React from 'react';

class Register extends React.Component {
constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}

		onSubmit = () => {
		fetch('https://hidden-chamber-78042.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
					this.props.onRouteChange('home');
			}
		});
	}

	render() {
		const { onRouteChange } = this.props;
	return (
		<div className='form center pa2 br3 shadow-5'>
		<main className="pa4 white-80">
		  <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Register</legend>
		       <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
		        <input 
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" 
		        type="text" 
		        name="name"  
		        id="name" 
		        onChange={this.onNameChange}
		        />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input 
		        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" 
		        type="email" 
		        name="email-address"  
		        id="email-address" 
		        onChange={this.onEmailChange}
		        />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input 
		        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" 
		        type="password" 
		        name="password"  
		        id="password" 
		        onChange={this.onPasswordChange}
		        />
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      	onClick={this.onSubmit}
		      	className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white-80" 
		      	type="submit" 
		      	value="Register" />
		      	<input 
		      	onClick={() => onRouteChange('signin')}
		      	className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white-80 ml3" 
		      	type="submit" 
		      	value="back" />
		    </div>
		  </div>
		</main>
		</div>

		);
	}
}

export default Register;