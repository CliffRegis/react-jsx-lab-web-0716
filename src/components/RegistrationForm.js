const React = require('react');


class RegistrationForm extends React.Component{

	// constructor(props){
 //   super(props)
 //   //retains parent's props
 //   //set default value of the state of the class Searchbar
 // }

	render(){
		return(
			<form>
				<input type='text'/>
				<input type='password'/>
                <button type="submit" text="submit"/> 
			</form>

			) 

	}
}

module.exports = RegistrationForm;
