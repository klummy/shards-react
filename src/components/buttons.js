import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { omit } from '../utils';

const Button = (props) => {
  const {
    children,
    modifier,
    outline,
    pill,
    size,
    squared
  } = props;

  const otherProps = omit(props, ['modifier', 'outline', 'pill', 'size', 'squared']);

  return (
    <button
      className={classnames({
        btn: true,
        [`btn-${outline ? 'outline-' : ''}${modifier}`]: !!modifier,
        'btn-pill': pill,
        [`btn-${size}`]: size,
        'btn-squared': squared
      })}

      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  modifier: '',
  outline: false,
  pill: false,
  size: '',
  squared: false
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  modifier: PropTypes.string,
  outline: PropTypes.bool,
  pill: PropTypes.bool,
  size: PropTypes.string,
  squared: PropTypes.bool
};

export default Button;
