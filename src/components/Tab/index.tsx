import React, { useState } from 'react';
//styles
import { Tab } from './Tab.styles';
//Types
type Props = {
  text: string,
  activeTab: string,
  callback: () => void,
}

const Button: React.FC<Props> = ({ text, activeTab, callback }) => {
  if (activeTab === '') activeTab = 'playing movies';
  return (
    <>
        <Tab type='button' onClick={callback} className={text.toUpperCase() === activeTab.toUpperCase() ? 'actived' : ''}>
          {text}
        </Tab>
    </>
  );
};

export default Button;