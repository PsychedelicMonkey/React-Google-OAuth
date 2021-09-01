import React, { Component, Fragment } from 'react';
import {
  Toast,
  ToastBody,
  ToastHeader,
} from 'reactstrap';
import { connect } from 'react-redux';

class Alert extends Component {
  render() {
    const { alerts } = this.props;

    return (
      <Fragment>
        { alerts ? (
          <div className="alerts">
            { alerts.map(alert => (
              <Toast>
                <ToastHeader icon={alert.color}>{alert.alertType}</ToastHeader>
                <ToastBody>{alert.msg}</ToastBody>
              </Toast>
            )) }
          </div>
        ) : null }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  alerts: state.alert.alerts,
});

export default connect(mapStateToProps)(Alert);
