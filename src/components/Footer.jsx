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
  {
    link: 'LinkedIn.com',
    title: 'LinkedIn',
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
    </div>
  );
}

export default Footer;
