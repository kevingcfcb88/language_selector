import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';

class App extends React.Component {
  state = { language: 'en' };

  onLanguageChange = lang => {
    this.setState({ language: lang });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('en')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('nl')} />
        </div>
        <div>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
