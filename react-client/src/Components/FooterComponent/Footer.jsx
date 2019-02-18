import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="social">
          <h1>Open<span>Source</span></h1>
          <h3>Occidental College</h3>
          <a href="https://www.facebook.com/oxyopensourceclub"><img src='../../Assets/facebook.svg'></img></a>
          <a href="https://www.instagram.com/oxyopensource/"><img src="../../Assets/instagram.svg"></img></a>
          <a href="https://bit.ly/oxyos-slack-spring2019"><img src="../../Assets/slack.svg"></img></a>
          <a href="https://github.com/oxy-os/oxyos.org"><img src="../../Assets/github.svg"></img></a>
        </div>
        <div id="contact">
          <p>1600 Campus Road</p>
          <p>Los Angeles, CA</p>
          <p>90041</p>
          <p><a href="mailto:opensource@oxy.edu">opensource@oxy.edu</a></p>
        </div>
      </footer>
    )
  }
}

export default Footer;
