import React from 'react';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="uk-margin">
      <div className="uk-section uk-section-muted">
        <div className="uk-container uk-container-large">
          <div className="uk-text-center" uk-grid="true">
            <div className="uk-width-3-3">
              <div className="uk-text-left uk-text-large">Привет {user}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.localeName = 'Главная';

export default Dashboard;
