import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { omit } from '../utils';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAlert: false
    };
  }

  dismissAlert() {
    this.setState({
      hideAlert: true
    });
  }

  render() {
    const {
      children,
      dismissible,
      modifier
    } = this.props;

    const { hideAlert } = this.state;
    const otherProps = omit(this.props, ['dismissible', 'modifier']);

    if (hideAlert) {
      return null;
    }

    return (
      <div
        className={classnames({
          alert: true,
          [`alert-${modifier}`]: !!modifier,
          'alert-dismissible': dismissible
        })}
        role="alert"
        {...otherProps}
      >
        {children}

        {
          dismissible &&
          <button type="button" className="close" onClick={() => this.dismissAlert()} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        }
      </div>
    );
  }
}

Alert.defaultProps = {
  children: null,
  dismissible: false
};

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]),
  dismissible: PropTypes.bool,
  modifier: PropTypes.string.isRequired
};

export default Alert;
