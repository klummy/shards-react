import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

  return (
    <span
      className={classnames({
        badge: true,
        [`badge-${modifier}`]: !!modifier,
        [`badge-outline-${modifier}`]: !!modifier && outline,
        'badge-pill': pill
      })}
      {...otherProps}
    >
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
