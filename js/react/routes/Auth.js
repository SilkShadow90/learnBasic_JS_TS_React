import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import useAuth from '../hooks/useAuth';

const Auth = () => {
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  const onChange = (event) => {
    setName(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setUser(name);
  };

  useEffect(() => {
    setLoading(false);
  }, [user]);

  return (
    <div className="fullScreen">
      <div className="uk-section uk-section-muted">
        <div className="uk-container uk-container-small">
          <div className="uk-card uk-card-body uk-card-secondary">
            <form onSubmit={onSubmit}>
              <fieldset className="uk-fieldset">
                <legend className="uk-legend">Авторизация</legend>

                <div className="uk-margin">
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Ведите имя"
                    value={name}
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className="uk-button uk-button-default" disabled={!name}>
                  Ok
                </button>
              </fieldset>
            </form>
            <Loader isVisible={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
