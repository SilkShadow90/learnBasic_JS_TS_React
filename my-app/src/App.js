import './App.css';

function App() {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }
      
      const user = {
        firstName: 'Марья',
        lastName: 'Моревна'
      };
      
     return (
        <h1>
          Здравствуй, {formatName(user)}!
        </h1>
      );
      
}

export default App;