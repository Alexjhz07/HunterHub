import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// this is just an example to show you how we could make calls to the backend
class HackList extends Component {

    constructor(props) {
        super(props);

        // for any state values(bascially like class variables) initialize them here
        this.state = {
            pickerValue: "",
            serverContent: "",
            hackers:"",
        }
        this.updateFromServer();
    }

    // if you want to make class methods, follow this format
    updateFromServer = () => {
        fetch(this.props.url + "/get/hackers").then(res => res.json()).then(res => {
            console.log(res);
            this.setState({
                hackers: res,
            });
        });
    }


    render() {
        return (
            <div className="hacker-list">
                {/* <input
                    value={this.state.pickerValue}
                    onChange={(e) => this.setState({ pickerValue: e.target.value })}
                ></input> */}

                {Object.keys(this.state.hackers).map((hackerId) => {
                    let hacker = this.state.hackers[hackerId]
                    return(<div>
                        <h1>{hacker.name}</h1>
                        <p>{hacker.description}</p>
                    
                    </div>)
                })}

                {/* <Button onClick={this.updateFromServer}> Update</Button> */}
                {/* <div className="server-content">{this.state.serverContent}</div> */}

            </div>
        );
    }
}


export default HackList;