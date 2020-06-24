import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('en')}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange('nl')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
