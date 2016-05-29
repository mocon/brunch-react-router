import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var Emergency = React.createClass({
  getInitialState: function() {
    return {
      pageTitle: 'Emergency Contact Information'
    }
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  render: function() {
    return (
      <div>
        <Header pageTitle={this.state.pageTitle} />
        <section className="main-content -p-v-4 -p-h-2">
          <div className="container"> 
            <h3>For a <strong>medical emergency</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">15</div>
            
            <hr />
            
            <h3>To contact the <strong>police</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">17</div>
            
            <hr />
            
            <h3>To contact the <strong>Cannes Hospital</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 4 93 69 71 50</div>
            <div className="map-box border-radius-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.0476461539893!2d7.003625316357538!3d43.56389027912457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce821d972496a7%3A0xc0480e0f02b211a7!2s15+Avenue+des+Broussailles%2C+06400+Cannes%2C+France!5e0!3m2!1sen!2sus!4v1464214888870" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            
            <hr />
            
            <h3>To contact <strong>Riviera Medical Services</strong> for house calls, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 4 93 26 12 70</div>
            
            

          </div>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = Emergency;
