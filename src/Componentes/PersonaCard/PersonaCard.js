import React from "react";


class PersonaCard extends React.Component {

    constructor(props){
        super(props);
        this.state={
            // edad: parseInt(props.age)
            edad:props.age

        }

    }
    
    


    aumentarEdad = () =>{ 
        this.setState({edad: this.state.edad +1})
    }

    render() {

        const {lastName, firstName, hairColor, age} = this.props

        return (
            <div className="card">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.edad}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.aumentarEdad} className="btn btn-primary">Birthday Button for {firstName} {lastName}</button>
                
            </div>
        )
    }

}
export default PersonaCard;