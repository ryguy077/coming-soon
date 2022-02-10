import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (

      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">DevsDoSomething</a>
          </div>
          <div className="social">
            <a href="https://twitter.com/devsdos0mething" title="Twitter-DDOS" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>For the FIRST time EVER, be a part of the BIG GAME with Super Sol Sunday Squares</h1>
            <p> You’ve waited all year for THIS. Almost there... Website coming soon.</p>
          </div>
          <a href="https://discord.gg/e8y8gshy">
            <div className="cta">Join us on Discord</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;