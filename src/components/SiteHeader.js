import React from 'react';
import Promo from './Promo';
import logo from './../logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function SiteHeader() {  
  return (   
    <div id="header">
    <div className="nav-upper bg-dark text-muted">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <nav className="nav h-100 d-flex align-items-center">						
                <a href="/" className="nav-item mr-3 text-muted" title="">News</a>
                <a href="/" className="nav-item mr-3 text-muted" title="">Blog</a>               
                <a href="/" className="nav-item mr-3 text-muted" title="">Catalogues</a>
            </nav>             
          </div>
          <div className="col-sm-6">
            <nav className="nav d-flex h-100 flex-wrap align-items-center justify-content-end">						
                <div className="account nav-item position-relative">
                  <a href="/" title="" className="text-white d-flex align-items-center px-2 py-1"><i className="ion-person mr-2"></i> <i className="fa fa-angle-down align-self-center"></i></a>
                  
                  <div className="dropdown-container position-absolute d-none list-unstyled border border-dark border-top-0 p-2 bg-white">
                      <div><a href="/" title="">Login</a></div>
                      <div><a href="/" title="">Create account</a></div>										
                    
                    
                      <div className="login-social-media mt-2">
                        <p className="mb-1">Login with:</p>
                        <a href="/" title=""><i className="pr-2 fa fa-facebook"></i></a>
                        <a href="/" title=""><i className="pr-2 fa fa-google"></i></a>
                      </div>
                    
                  </div>
  
                </div>
                <div className="nav-item favorites"><a href="/" title="" className="bg-primary text-white d-block px-2 py-1 position-relative"><i className="mr-2 ion-ios-heart"></i> <span className="favorite-counter d-flex position-absolute justify-content-center align-items-center">0</span></a></div>
                <div className="nav-item minicart"><a href="/" title="" className="text-white d-block px-2 py-1 position-relative mobile-menu-trigger"><i className="ion-bag"></i><span className="minicart-summary position-absolute bg-primary rounded-circle d-flex align-items-center justify-content-center p-1">0</span></a></div>
            </nav>
          </div>			
        </div>
      </div>
    </div>
    <Promo />
    <div className="header-middle py-3 bg-white">
      <div className="container">
        <div className="row">				
          <div className="col-12 header-middle-content h-100 align-items-top">	
            <div className="row">	
              <div className="col-3">
                <p><i className="text-primary ion-iphone align-top mr-2"></i>Contact us at: 021 361 52 05</p>
              </div>
              <div className="col justify-content-center d-flex py-3 flex-wrap" id="logo">
                <a href="/" title="" className="d-block">
                  <img src={logo} alt="" className="img-fluid" />
                </a>
                <p className="w-100 font-weight-light text-center mb-0 mt-2 brand-motto d-block">For your legs <span>|</span> For his eyes</p>                
              </div>						
              <div className="col-3 search-box ">
                <p className="mb-2 text-right">You don't have an account ? Sign-in <a href="/" className="text-primary">now</a>.</p>                
                <form method="GET" action="/" className="header-search d-flex position-relative justify-content-end">						
                  <input type="text" className="form-control" name="q" id="q" placeholder="Cauta un produs..." autoComplete="off" />
                  <button type="submit" className="btn btn-light col-auto border-0 position-absolute"><i className="ion-ios-search"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>		
    </div>	
    <div className="header-lower bg-white">
		<div className="container">
			<div className="row">				
        <nav className="nav nav-main col-12 px-3 d-flex justify-content-center">
          <ul id="NavMain">
            <li className="firstItem">
              <Link  to="/">Homepage</Link>                 
            </li>            
            <li className="lastItem">
              <Link to="/products">Sosete</Link>
            </li>
          </ul>                         
        </nav>
			</div>	
		</div>
		
	</div>
  </div> 
  )
}
