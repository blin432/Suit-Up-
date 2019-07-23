import React, {Component} from 'react';
import {Form , Button, Col, Row, Container, Jumbotron} from 'react-bootstrap'
import {withRouter} from 'react-router-dom';
import '.././App.css';
import arrow from  '.././arrow3.jpg';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Homepage extends Component{
    

    render(){
      
        return(
            <div className="jumbo"  fluid>
                <Container className="wordsContainer">
                    <h1>It's Time To Suit Up</h1>
                    <p>
                    Don't look like this bum.
                    </p>
                    <p style={{fontSize:'32px'}}>Shop Now<Link to="/all">
                  <span style={{marginLeft:'20px'}}><img  style ={{height:'75px'}} src={arrow}></img></span>
                  </Link></p>
                </Container>
            </div>
        )
    }
}

export default withRouter(Homepage);
