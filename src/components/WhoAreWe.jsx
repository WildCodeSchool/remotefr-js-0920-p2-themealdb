import React from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';

function WhoAreWe() {
  return (
    <div className="About Us">
      <h1>About us</h1>
      <p>
        Party of a simple adventure with friends, The Traveling Taste Buds
        became a business.
      </p>
      <img src={img1} alt="first site" />
      <p>
        Following the many cooking recipes that have reached us on our contact
        form on the first site,
        <br /> the idea came to us of creating a second site which allow us to
        list thousands of different recipes.
      </p>
      <p>
        Here is our team of enthusiasts : - Cédric Priouret
        <img
          src="https://avatars0.githubusercontent.com/u/43884584?s=400&u=bbba901f0fa0cd299a051b09a9a416d1ae28622c&v=4"
          alt="Cédric Priouret"
        />
        - Matisse Famularo
        <img
          src="https://avatars1.githubusercontent.com/u/64069872?s=400&v=4"
          alt="Matisse Famularo"
        />
        - Miguel Santos
        <img
          src="https://avatars3.githubusercontent.com/u/69686253?s=400&u=2e5dec1c9013d5cd5deeeb10c7c8ab1ed84366a8&v=4"
          alt="Miguel santos"
        />{' '}
        - Christophe Castan <img src={img2} alt="Christophe Castan" />
      </p>
    </div>
  );
}

export default WhoAreWe;
