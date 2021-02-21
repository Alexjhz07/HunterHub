import React, { Component, useState } from "react";
import {
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation,
} from "react-router-dom";
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
        <HashRouter>

          <Switch>
            <Route path="/join">
              <div>
                {/* <Link to='/'><button>Find Hackers</Button></Link> */}
                <HackerJoin url={this.props.url}  />
              </div>
            </Route>

            <Route path="/">
              <div>
                {/* Welcome to HackHub! */}
                {/* <Link to='/join'><Button>Become a Hacker</Button></Link> */}
                <HackList url={this.props.url} />
              </div>
            </Route>

            <Route path="/:id" render={({ match }) => (
              <div>
              </div>
            )} />

          </Switch>
        </HashRouter>

    );
  }
}


export default HackerHub;