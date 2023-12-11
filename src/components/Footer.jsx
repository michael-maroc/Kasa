import FooterLogo from '../assets/FooterLogo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img src={FooterLogo} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
