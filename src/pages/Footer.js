import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <div className="details">Copyright &copy; 2021</div>
      {location.pathname === '/' && (
        <Link to="/about" className="link">
          About
        </Link>
      )}
    </footer>
  );
};

export default Footer;
