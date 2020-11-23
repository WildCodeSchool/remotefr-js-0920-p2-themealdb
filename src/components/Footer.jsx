import React from 'react';
import './Footer.css';

const reseauxSociaux = [
  {
    link: 'Facebook.com',
    title: 'Facebook',
  },
  {
    link: 'Twitter.com',
    title: 'Twitter',
  },
  {
    link: 'Instagram.com',
    title: 'Instagram',
  },
];

function Footer() {
  return (
    <div className="Footer">
      <ul className="Menu">
        {reseauxSociaux.map(({ link, title }) => (
          <li key={title}>
            <a href={link}>
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
      <p>© 2020 The Traveling Taste Buds: The Return</p>
    </div>
  );
}

export default Footer;
