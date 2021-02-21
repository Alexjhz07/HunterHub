import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form, Card } from "react-bootstrap";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class HackList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pickerValue: "",
            serverContent: "",
            hackers:"",
            searchTerm:"",
        }
        this.updateFromServer();
    }

    updateFromServer = () => {
        fetch(this.props.url + "/get/hackers").then(res => res.json()).then(res => {
            console.log(res);
            this.setState({
                hackers: res,
            });
        });
    }


    isHackerInSearch = (hackerId) =>{
        let hacker= this.state.hackers[hackerId];
        let searchTerm = this.state.searchTerm.toLowerCase();
        return (hacker.name.toLowerCase().indexOf(searchTerm) != -1 
             || hacker.description.toLowerCase().indexOf(searchTerm) != -1
             || hacker.email.toLowerCase().indexOf(searchTerm) != -1)
    }

    render() {
        return (
            <div id="slideShow">
                <input
                    value={this.state.searchTerm}
                    onChange={(e) => this.setState({ searchTerm: e.target.value })}
                    placeholder="Search for a Hacker"
                ></input>

                <div id="humans">
                {Object.keys(this.state.hackers).map((hackerId) => {
                    let hacker = this.state.hackers[hackerId]
                    return( this.isHackerInSearch(hackerId) ?
                        <div class="card" key={hackerId}>
                                <img src={"./img/" + hackerId + ".jpeg"} class="profile-image" />
                                <div class="human-container">
                                    <h4><b>{hacker.name}</b></h4>
                                    <p>{hacker.description}</p>
                                    <button type="button"  onClick={this.uploadToServer} >Hire me!</button>
                                </div>
                        </div> : ""
                    )
                    })}
                </div>
            </div>

        );
    }
}


export default HackList;