import React from 'react';



function Footer() {
  return (
    <div classNameName="Footer">
    <footer style={{marginTop:"5%"}} class="footer">
    <div class="container">
    <div className="row">
    <div style={{backgroundColor:"black"}} className="col-lg-6">
        <h3 style={{display:"inline",color:"white"}}>NewsLetter SIGN </h3><input></input> <button>Subscribe</button>
    </div>

    <div style={{backgroundColor:"black",marginLeft:"1%"}} className="col-lg-5">
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

export default Footer;