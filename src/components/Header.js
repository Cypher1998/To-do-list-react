import Button from './Button';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import TaskContext from '../context/task/TaskContext';

const Header = () => {
  const location = useLocation();
  const { togglePage, showPage } = useContext(TaskContext);

  return (
    <header style={userStyle}>
      <h1>TO-DO-LIST</h1>
      {location.pathname === '/' && (
        <Button
          text={showPage ? 'Close' : 'Add'}
          styling="toggle-btn"
          color={showPage ? '#ad0d0d' : 'indigo'}
          onClick={togglePage}
        />
      )}
    </header>
  );
};

const userStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#005fcd',
  padding: '0.75rem 0.5rem',
  borderRadius: '5px',
};

export default Header;
