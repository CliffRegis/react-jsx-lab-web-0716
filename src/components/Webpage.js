const React = require('react');
const FillerText = require('./FillerText');

class Webpage extends React.Component{

	// constructor(props){
 //   super(props)
 //   //retains parent's props
 //   //set default value of the state of the class Searchbar
 // }

	render(){
		return(
			<div>
			 <title>
			"The world's coolest webpage"
      		</title>
             <FillerText />

             <FillerText />
			</div>

			) 

	}
}

module.exports = Webpage;
