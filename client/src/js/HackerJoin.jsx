import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form , Card} from "react-bootstrap";

import Cookies from 'universal-cookie';
import {
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
const cookies = new Cookies();

// this is just an example to show you how we could make calls to the backend
class HackerJoin extends Component {


    constructor(props) {
        super(props);

        // for any state values(bascially like class variables) initialize them here
        this.state = {
            pickerValue: "",
            serverContent: "",
            hackers:"",
            name:"",
            email:"",
            description:"",
            shouldRe: false,
        }
    }

 
    uploadToServer = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: this.state.name, 
                email:this.state.email,
                description:this.state.description
            })
        };
        fetch(this.props.url + '/post/hacker', requestOptions)
            .then((response) =>{
                this.setState({shouldRe: true})
            });
    }


    render() {
        return (
            <div className="hacker-list">
                {/* <h1>JOIN</h1> */}
                {/* <input
                    value={this.state.pickerValue}
                    onChange={(e) => this.setState({ pickerValue: e.target.value })}
                ></input>
                <input
                    value={this.state.pickerValue}
                    onChange={(e) => this.setState({ pickerValue: e.target.value })}
                ></input> */}
                {this.state.shouldRe ? <Redirect to="/"/> : ""}
     
                                <Card className="m-5">
                                        <Card.Body>
                                                <Card.Title>Join HackerHub</Card.Title>
                                                <Form>

                                                        <Form.Group controlId="formBasicEmail">
                                                                <Form.Label>Name</Form.Label>
                                                                <Form.Control   value={this.state.username} onChange={(val)=>this.setState({name: val.target.value})} type="username" placeholder="John Appleseed" />
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmailaddr">
                                                                <Form.Label>Email</Form.Label>
                                                                <Form.Control   value={this.state.email} onChange={(val)=>this.setState({email: val.target.value})} type="email" placeholder="john@example.com" />
                                                        </Form.Group>
                                                   <Form.Group controlId="description">
                                                                <Form.Label>Description</Form.Label>
                                                                <Form.Control   value={this.state.description} onChange={(val)=>this.setState({description: val.target.value})} type="text" placeholder="I love java and c++, and can find all sorts of bugs!" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicPassword">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control isInvalid={this.state.isInvalid} value={this.state.password} onChange={this.passswordChange} type="password" className="" placeholder="Password" />
                                                                <Form.Control.Feedback type="invalid">
                                                                        Not valid
                                                                </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group className="">
                                                                <Button variant="primary" type="submit" className={ "login-button"}  onClick={this.uploadToServer}>
                                                                    Join
                                                                </Button>
                                                        </Form.Group>
                                                </Form> 
                                        </Card.Body>
                                </Card>


                {/* <Button onClick={this.updateFromServer}> Update</Button> */}
                {/* <div className="server-content">{this.state.serverContent}</div> */}

            </div>
        );
    }
}


export default HackerJoin;