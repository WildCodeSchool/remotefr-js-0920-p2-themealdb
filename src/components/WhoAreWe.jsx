import React from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import './WhoAreWe.css';

function WhoAreWe() {
  return (
    <main className="team-main">
      <article className="team-history">
        <h1 className="team-h1">Our Team of enthusiasts</h1>
        <img src={img1} alt="first site" />
        <p>
          Party of a simple adventure with friends in April 2015, The Traveling
          Taste Buds became a business in November 2020. Following the many
          cooking recipes that have reached us on our contact form on the first
          site, the idea came to us of creating a second site which allow us to
          list thousands of different recipes.
        </p>
      </article>

      <article className="team-content">
        <img
          src="https://avatars0.githubusercontent.com/u/43884584?s=400&u=bbba901f0fa0cd299a051b09a9a416d1ae28622c&v=4"
          alt="Cédric Priouret"
        />
        <h3>Cédric Priouret</h3>
        <p>
          Chef for 25 years in renowned restaurants (The Golden Wave in
          St-Tropez, Alain Ducasse in Paris but also Jean Georges in New-York
          and Club Gascon in London). Due to health problems, I stopped working
          in the kitchen. I now devote myself 100% to the management of the site
          Travelers Taste Buds.
        </p>
      </article>
      <article className="team-content">
        <img
          src="https://avatars1.githubusercontent.com/u/64069872?s=400&v=4"
          alt="Matisse Famularo"
        />
        <h3>Matisse Famularo</h3>
        <p>
          I am the Web Development Manager of the site. Before becoming a
          developer, I was a pastry chef; I also take care of all the dessert
          recipes.
        </p>
      </article>
      <article className="team-content">
        <img
          src="https://avatars3.githubusercontent.com/u/69686253?s=400&u=2e5dec1c9013d5cd5deeeb10c7c8ab1ed84366a8&v=4"
          alt="Miguel santos"
        />
        <h3>Miguel Santos</h3>
        <p>
          {`I am the owner of the restaurant "Furia de Mar" in Lisbon, Portugal.
          Portuguese gastronomy specialist (they nickname me "The King of Cod")
          It is with real pleasure that I joined the team of "Traveling Taste
          Buds" to transmit my knowledge and my passion.`}
        </p>
      </article>
      <article className="team-content">
        <img src={img2} alt="Christophe Castan" />
        <h3>Christophe Castan </h3>
        <p>
          I am part of the starting team of the creation of the site 1 of the
          Traveling Taste Buds. I am always in contact with my friends Floran,
          Justine and Corentin who have created a training school to become a
          cook : the &#8220;Delicious Cook School&#8220;. Sometimes,they advise
          me and give me their opinion. I take care of the promotion of the site
          and social networks.
        </p>
      </article>
    </main>
  );
}

export default WhoAreWe;
