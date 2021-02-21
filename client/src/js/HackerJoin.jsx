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

class HackerJoin extends Component {


    constructor(props) {
        super(props);

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
           <main id="formMain">
                <form id="survey">
                    <h1>Join HunterHub</h1>
                    <label htmlFor="name" >Name</label>
                    <input type="text" placeholder="John Doe" name="name" value={this.state.username} onChange={(val)=>this.setState({name: val.target.value})} />
                    <label htmlFor="email"  >E-mail</label>
                    <input type="email"  placeholder="example@example.com" name="name" value={this.state.email} onChange={(val)=>this.setState({email: val.target.value})} />
                    <label htmlFor="name"  >Description</label>
                    <input type="text" placeholder="Loves finding security flaws!" name="name"  value={this.state.description} onChange={(val)=>this.setState({description: val.target.value})} />
                    <label htmlFor="name">Password</label>
                    <input type="password" name="name" />
                    <label htmlFor="name">Image</label>
                    <input type="file"
        id="avatar" name="avatar"
        accept="image/png, image/jpeg"></input>
                    <button type="button"  onClick={this.uploadToServer} >Submit</button>
                </form>
            </main>
                {this.state.shouldRe ? <Redirect to="/"/> : ""}
  

            </div>
        );
    }
}


export default HackerJoin;