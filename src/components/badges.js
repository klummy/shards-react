import React from 'react';
import PropTypes from 'prop-types';

import { omit } from '../../src/utils';

const Badges = (props) => {
  const {
    children,
    modifier,
    outline,
    pill
  } = props;

  const omittedProperties = [
    'modifier',
    'outline',
    'pill'
  ];
  const otherProps = omit(props, omittedProperties);

  const classes = `badge badge-${outline ? 'outline-' : ''}${modifier} ${pill ? 'badge-pill' : ''}`;

  return (
    // TODO: Move classes into a variable initialized before the component
    <span className={classes} {...otherProps}>
      {children}
    </span>
  );
};

Badges.defaultProps = {
  children: null,
  modifier: '',
  outline: false,
  pill: false
};

Badges.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  modifier: PropTypes.string,
  outline: PropTypes.bool,
  pill: PropTypes.bool
};

export default Badges;
