import React from 'react';
import { Component } from 'react';
import image from  '../sunset.jpg'
import faker from 'faker'


class CardIn extends Component{
    state = {
        todo:[
            {
                name:faker.name.findName(),
                cardtext:faker.commerce.productDescription(),
                image:faker.image.imageUrl()
            },
            {
              name:faker.name.findName(),
              cardtext:faker.commerce.productDescription(),
              image:faker.image.imageUrl()
            },
            {
              name:faker.name.findName(),
              cardtext:faker.commerce.productDescription(),
              image:faker.image.imageUrl()
            },
            {
              name:faker.name.findName(),
              cardtext:faker.commerce.productDescription(),
              image:faker.image.imageUrl()
            },
            {
              name:faker.name.findName(),
              cardtext:faker.commerce.productDescription(),
              image:faker.image.imageUrl()
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

class Cards extends Component{
    render(){

        return this.props.items.map((item)=>(
            <div className="col-lg-4">
                            <div className='card'>
                            <img className="card-img-top" style={{width:"348px"}} src={item.image} alt="Card"/>
                            <div className="card-body">
                            <h4 className="card-title">{item.name}</h4>
                            <p className="card-text">{item.cardtext}</p>
                            </div>
                            </div>
                        </div>
        ))








    }
}

class Footer extends Component{
    render(){
      return (
        <div classNameName="Footer">
        <footer class="footer">
        <div class="container">
        <div className="row">
        <div style={{backgroundColor:"black"}} className="col-lg-6">
            <h3 style={{display:"inline",color:"white"}}>NewsLetter SIGN </h3><input></input> <button>Subscribe</button>
        </div>
        <div className="col-lg-1">

        </div>
        <div style={{backgroundColor:"black"}} className="col-lg-5">
        <h3 style={{display:"inline",color:"white"}}>Contact  us </h3>
        <i style={{color:"white",marginLeft:"5px",fontSize:"25px"}} class="fa fa-facebook-official"></i>
        <i style={{color:"white",marginLeft:"5px",fontSize:"25px"}} class="fa fa-twitter-square"></i>
        <i style={{color:"white",marginLeft:"5px",fontSize:"25px"}} class="fa fa-instagram"></i>
        </div>
        </div>
        </div>
        </footer>
        </div>
      );
    }
  }

  class  Slider extends Component {
    render(){
      return(

         <div style={{marginTop:"1%"}} classNameName="Slider">
             <img src={image} alt="Los Angeles" style={{width: "80%",height:"500px",marginLeft:"10%"}} />
         </div>
       );

    }
   }

   class  Nav extends Component {
    render(){
      return (
        <div classNameName="Nav">
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

      <a class="navbar-brand" href="/#">ICrowdTask</a>


      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/#">How it works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Requesters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Workers</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">About</a>
        </li>
      </ul>
    </nav>
        </div>
      );
    }
  }
  export { CardIn, Footer,Slider,Nav };
