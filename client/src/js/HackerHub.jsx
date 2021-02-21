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
import HackerJoin from "./HackerJoin.jsx"


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



            <Route path="/join">
              <div>
                <Link to='/'><Button>Find Hackers</Button></Link>
                <HackerJoin url={this.props.url}  />
              </div>
            </Route>

            <Route path="/">
              <div>
                {/* Welcome to HackHub! */}
                <Link to='/join'><Button>Become a Hacker</Button></Link>
                <HackList url={this.props.url} />
              </div>
            </Route>

            <Route path="/:id" render={({ match }) => (
              <div>
              </div>
            )} />

          </Switch>
        </HashRouter>

      </Container>
    );
  }
}


export default HackerHub;