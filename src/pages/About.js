import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <h4>This is an application to track your every day tasks.</h4>
      <p className="details">Version 1.0.1</p>
      <Link to="/" className="link">
        Go Back
      </Link>
    </div>
  );
};

export default About;
