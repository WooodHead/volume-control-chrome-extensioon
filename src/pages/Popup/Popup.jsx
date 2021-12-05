import React from 'react';
import logo from '../../assets/img/logo.svg';

import Slider from 'antd/lib/slider';
import Button from 'antd/lib/button';
import './Popup.less';

import 'antd/lib/slider/style';
import 'antd/lib/button/style';

console.log('Slider', Slider);

const Popup = () => {
  return (
    <div className="App">
      <header className="bg-red App-header">
        <Slider defaultValue={30} />
        <Button type="primary">asdfsaf</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
