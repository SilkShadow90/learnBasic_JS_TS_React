import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ApiService from '../utils/ApiService';

const Test = () => {
  const { id } = useParams();
  useAuth();
  const test = ApiService.getTest(id);

  return (
    <div>
      <div className="uk-section uk-section-muted">
        <div className="uk-container uk-container-large">
          <h1 className="uk-heading-medium">{test.title}</h1>
          <div className="uk-text-center" uk-grid="true">
            {test.description}
          </div>
        </div>
      </div>
    </div>
  );
};

Test.localeName = 'Тест';
Test.params = ['id'];

// Test.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default Test;
