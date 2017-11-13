import React from 'react';
import PropTypes from 'prop-types';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDismissible: props.dismissible,
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
      modifier
    } = this.props;

    const { hideAlert, showDismissible } = this.state;

    if (hideAlert) {
      return null;
    }

    return (
      <div className={`alert alert-${modifier} ${showDismissible && 'alert-dismissible fade show'}`} role="alert">
        {children}

        {
          showDismissible &&
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
