import React from 'react';
import PropTypes from 'prop-types';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateVal: new Date()
    };

    this.onDateChangeHandler = this.onDateChangeHandler.bind(this);
  }

  componentDidMount() {

  }

  onDateChangeHandler(date) {
    console.log(date);
  }

  showDatepicker() {
    console.log('Show Date picker!!');
  }

  renderWeeks() {
    const date = this.state.dateVal;

    const days = [];

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 1;
    const lastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    console.log('First day', firstDay);

    const daysArr = ['', '', '', '', '', '', ''];

    for (let i = 0; i < 7; i += 1) {
      days[firstDay] = <td className="day" key={i}>{i}</td>;
    }

    console.log(days);

    return <tr>{days}</tr>;
  }

  renderDatePicker() {
    const date = this.state.dateVal;

    return (
      <div
        className="datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-bottom"
        style={{
          display: 'block',
          left: '0',
          top: '70px',
          zIndex: '10'
        }}
      >
        <div className="datepicker-days">
          <table className="table-condensed">
            <thead>
              <tr>
                <th
                  className="datepicker-title"
                  colSpan="7"
                  style={{
                  display: 'none'
                }}
                />
              </tr>

              <tr>
                <th className="prev">«</th>
                <th colSpan="5" className="datepicker-switch">
                  {
                    date.toLocaleString(undefined, {
                    month: 'long'
                  })} { date.getFullYear() }
                </th>
                <th className="next">»</th>
              </tr>

              <tr>
                <th className="dow">Su</th>
                <th className="dow">Mo</th>
                <th className="dow">Tu</th>
                <th className="dow">We</th>
                <th className="dow">Th</th>
                <th className="dow">Fr</th>
                <th className="dow">Sa</th>
              </tr>
            </thead>

            <tbody>
              {this.renderWeeks()}

              <tr>
                <td className="old day" data-date="1509235200000">29</td>
                <td className="old day" data-date="1509321600000">30</td>
                <td className="old day" data-date="1509408000000">31</td>
                <td className="day" data-date="1509494400000">1</td>
                <td className="day" data-date="1509580800000">2</td>
                <td className="day" data-date="1509667200000">3</td>
                <td className="day" data-date="1509753600000">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{
        position: 'relative'
      }}
      >
        Datepicker

        {this.renderDatePicker()}

        <input
          className="form-control"
          onClick={() => this.showDatepicker()}
          onFocus={() => this.showDatepicker()}
          type="text"
        />

      </div>

    );
  }
}

DatePicker.defaultProps = {

};

DatePicker.propTypes = {

};

export default DatePicker;
