import { createContext } from 'react';
import AlertReducer from './AlertReducer';
import { useReducer } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
