import React from 'react';

const Register = ({ onRouteChange }) => {
	return (
		<div className='form center pa2 br3 shadow-5'>
		<main className="pa4 white-80">
		  <div className="measure">
		    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
		      <legend className="f4 fw6 ph0 mh0">Register</legend>
		       <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="text" name="name"  id="name" />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
		        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
		        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="password" name="password"  id="password" />
		      </div>
		    </fieldset>
		    <div className="">
		      <input 
		      	onClick={() => onRouteChange('home')}
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

export default Register;