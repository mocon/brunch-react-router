import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var ThingsToKnow = React.createClass({
  getInitialState: function() {
    return {
      pageTitle: 'Some useful things to know'
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
            <h3>To <strong>dial a French phone number from France</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">0, then the number</div>
            
            <hr />

            <h3>To <strong>dial a USA phone number from France</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">001, then the number</div>
            
            <hr />

            <h3>To <strong>dial a French phone number from the USA</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">011, then 33, then the number</div>
            
            <hr />
            
            <h3>To contact the <strong>Apple Store</strong> at MCS Cannes, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 4 92 18 92 00</div>
            <div className="map-box border-radius-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5832560895724!2d7.023184088434243!3d43.55272831398582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce8194744e17c1%3A0x45b203041cf57f4!2s7+Rue+Teisseire%2C+06400+Cannes%2C+France!5e0!3m2!1sen!2sus!4v1464216359864" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            
            <hr />
            
            <h3>To contact the <strong>Apple Store</strong> at Nice, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 4 92 12 51 50</div>
            <div className="map-box border-radius-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.446276931504!2d7.193015416359311!3d43.659687579121176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd14204d5fdb1%3A0x17f294a8cea1b19a!2sAvenue+Eug%C3%A8ne+Donade%C3%AF%2C+06700+Saint-Laurent-du-Var%2C+France!5e0!3m2!1sen!2sus!4v1464216488783" width="100%" height="100%" frameborder="0"></iframe>
            </div>
            
            <hr />

            <h3>To exchange currency at <strong>Travelex Cannes</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 4 93 39 41 45</div>
            <div className="map-box border-radius-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.6097379868747!2d7.014528316357326!3d43.5521763791249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce818de45daaeb%3A0x51fe8b9a33ed5883!2s8+Rue+d&#39;Antibes%2C+06400+Cannes%2C+France!5e0!3m2!1sen!2sus!4v1464216983395" width="100%" height="100%" frameborder="0"></iframe>
            </div>

            <hr />

            <h3>To cure a hangover at the <strong>Pharmacie Anglo-Française</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 4 93 38 53 79</div>
            <div className="map-box border-radius-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5924699744496!2d7.022810916357332!3d43.55253627912479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce819437882fbf%3A0x776c6143b5e0d93b!2s95+Rue+d&#39;Antibes%2C+06400+Cannes%2C+France!5e0!3m2!1sen!2sus!4v1464217134571" width="100%" height="100%" frameborder="0"></iframe>
            </div>

            <hr />

            <h3>To cure a hangover at the <strong>Mang' Oz Juice Bar</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 4 89 68 68 40</div>
            <div className="map-box border-radius-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.5636289246227!2d7.019506416357306!3d43.55313737912476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce819397cae62f%3A0xd1efe55bd9873895!2s33+Rue+Hoche%2C+06400+Cannes%2C+France!5e0!3m2!1sen!2sus!4v1464217248353" width="100%" height="100%" frameborder="0"></iframe>
            </div>

            <hr />

            <h3>To get your dry cleaning done at the <strong>Washing Service</strong>, dial:</h3>
            <div className="phone-number-box border-radius-md type-bold">33 6 15 71 09 25</div>
            <div className="map-box border-radius-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.2646775691633!2d7.015620516357435!3d43.559367679124506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce81ed86597907%3A0x42fce2bcab9000b5!2s53+Avenue+du+Mar%C3%A9chal+Gallieni%2C+06400+Cannes%2C+France!5e0!3m2!1sen!2sus!4v1464217473840" width="100%" height="100%" frameborder="0"></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = ThingsToKnow;
