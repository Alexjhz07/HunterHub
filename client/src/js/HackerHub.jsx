import React, { Component, useState } from "react";
import { Container, Button, Modal, Spinner, Form } from "react-bootstrap";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

import HackList from "./HackList.jsx"
import JoinHacker from "./HackerJoin.jsx"


const cookies = new Cookies();

class HackerHub extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <Container fluid> 
        <HashRouter>

          <Switch>
            <Route path="/:id" render={({ match }) => (
              <div>
              </div>
            )} />


            <Route path="/">
              <div>
                {/* Welcome to HackHub! */}
                <JoinHacker url={this.props.url} />
              </div>
            </Route>

            <Route path="/join">
              <div>
                {/* Welcome to HackHub! */}
                <HackList url={this.props.url} />
              </div>
            </Route>

          </Switch>
        </HashRouter>

      </Container>
    );
  }
}


export default HackerHub;