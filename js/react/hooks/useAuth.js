import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Cookies from '../utils/Cookies';

const useAuth = () => {
  const [user, setUserState] = useState(Cookies.getInstance().get('user'));
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    Cookies.getInstance().remove('user');
    history.replace('/auth');
  };

  const setUser = (name) => {
    setTimeout(
      () =>
        setUserState(() => {
          Cookies.getInstance().set('user', name, { path: '/' });

          return name;
        }),
      1000
    );
  };

  useEffect(() => {
    if (!user && location.pathname !== '/auth') {
      history.replace('/auth');
    }

    if (user && location.pathname === '/auth') {
      history.replace('/dashboard');
    }
  }, [user]);

  return { user: Cookies.getInstance().get('user'), setUser, logout };
};

export default useAuth;
