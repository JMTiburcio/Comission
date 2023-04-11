import './styles.css';

const Footer = () => {

    return (
      <footer className='footer'>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/acressability">Acessability</a></li>
          <li><a href="/helpcenter">Help Center</a></li>
          <li><a href="/privacy">Privacy & Terms</a></li>
          <li><a href="/ad">Ad Choices</a></li>
          <li><a href="/more">More</a></li>
        </ul>
        <div className='footer__label'>
          <label>Comission Corporation © 2022</label>
        </div>
      </footer>
    );
};

export default Footer;
