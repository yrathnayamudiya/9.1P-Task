import React from 'react';
import image from  '../sunset.jpg'
import { Component } from 'react';



class Cards extends Component{
    render(){

        return this.props.items.map((item)=>(
            <div className="col-lg-4">
                            <div className='card'>
                            <img className="card-img-top" style={{width:"348px"}} src={image} alt="Card"/>
                            <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        <p className="card-text">{item.cardtext}</p>

                            </div>
                            </div>
                        </div>
        ))








    }
}

export default Cards;