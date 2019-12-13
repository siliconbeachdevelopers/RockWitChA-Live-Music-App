import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Music from './components/Music'
import ShowLive from './components/ShowLive'
import SignInWithGoogle from './components/SignInWithGoogle'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ROUTES from './constants/routes'
import { firebase, auth } from './firebase/firebase'

import './App.css';

class App extends Component {
  state = {
    message: '',
    currentUser: null
  }

  async componentDidMount() {
    auth.onAuthStateChanged(async authUser => {
      if(authUser) {
        console.log(authUser)
        // const loginUser = await fetch(`/auth/users/${authUser.uid}`)
        // const loginUserJson = await loginUser.json()
        // console.log(loginUserJson)
        this.doSetCurrentUser(authUser)
      }
    })
  }

  doSetCurrentUser = currentUser => {
    this.setState({
      currentUser
    })
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className="App">
        <NavBar />
        <h1 className="header2">
        {
          currentUser
            ? currentUser.displayName
            : null
        }
        </h1>
        <h1 className='loginname'> {this.state.message}</h1>
        {/* <h1 className="head">Find Live Music!</h1> */}
        <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser}/>
        <h1 className="">Find Live Music!</h1>
        <Switch>
        
          <Route exact path={ROUTES.HOME} render={() => <div className="yellow">home</div>} />
          <Route exact path={ROUTES.LOGIN} render={() => <div className="landing"><span className="headername">Rock WitCha'<br></br></span>Login To Search Thousands of Live music shows around the country!</div>} />
          <Route exact path={ROUTES.SIGN_UP} render={() => <div className="yellow">sign-up</div>} />
          <Route exact path={ROUTES.MUSIC} component={ Music } />
          <Route exact path={`${ROUTES.MUSIC}/:id`} component={ ShowLive } />
        </Switch>
      
      </div>
    );
  }
}

export default App;
