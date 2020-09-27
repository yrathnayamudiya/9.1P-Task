import React from 'react';
import { Component } from 'react';
import Cards from './cards'



class CardIn extends Component{
     state = {
        todo:[
            {
                name:"Samadhi Bandara",
                cardtext:"This is Samadhi Bandara.",
                image:"../sunset.jpg"
            },
            {
                name:"Yoshika bandara",
                cardtext:"This is yoshika Bandara",
                image:"../sunset.jpg"
            },
            {
                name:"Bandara",
                cardtext:"This is Bandara",
                image:"../sunset.jpg"
            },
            {
                name:"Ray kit",
                cardtext:"This is Ray Kit",
                image:"../sunset.jpg"
            },
            {
                name:"Mike sew",
                cardtext:"This is Mike Sew",
                image:"../sunset.jpg"
            }
        ]
    }
    render(){
        return(

                <div classNameName="CardIn">
                    <div className="container">
                        <center><h3>Featured Requesters</h3></center>
                    <div className='row'>
                    <Cards items={this.state.todo} />
                    </div>
                    </div>
                </div>

        )
    }
}

export default CardIn;