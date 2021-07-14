import React, { useState, useEffect } from 'react';
import { ScrollButtonStyle } from '../../../style/Button';

const ScrollButton = props => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <ScrollButtonStyle
      onClick={scrollToTop}
      style={{ display: visible ? 'flex' : 'none' }}>
      {props.name}
    </ScrollButtonStyle>
  );
};

export default ScrollButton;
