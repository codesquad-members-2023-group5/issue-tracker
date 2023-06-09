import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import Icon from '../common/Icon';
import { $Header, $RightSection, $UserProfile, $LogoIcon } from './style';

const Header = ({ userImgSrc }) => {
  const [themeMode, toggleTheme] = useTheme();

  return (
    <$Header>
      <Link to="/">
        <$LogoIcon width={199} height={25} name="defaultLogo" />
      </Link>
      <$RightSection>
        <button type="button" onClick={toggleTheme}>
          <Icon width={32} height={32} name={themeMode === 'light' ? 'lightMode' : 'darkMode'} />
        </button>
        <$UserProfile src={userImgSrc} alt="myImg" />
      </$RightSection>
    </$Header>
  );
};

Header.propTypes = {
  userImgSrc: PropTypes.string,
};

export default Header;
