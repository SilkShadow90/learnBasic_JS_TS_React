import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ApiService from '../utils/ApiService';
import Card from '../components/Card';

const Tests = () => {
  useAuth();
  const history = useHistory();
  const tests = ApiService.getTests();

  return (
    <div>
      <div className="uk-section uk-section-muted">
        <div className="uk-container uk-container-large">
          <h1 className="uk-heading-medium">Тесты</h1>
          <div className="uk-text-center" uk-grid="true">
            {tests.map((test) => (
              <Card
                key={test.id}
                title={test.title}
                description={test.description}
                onClick={() => history.replace(`/test/${test.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Tests.localeName = 'Тесты';

export default Tests;
