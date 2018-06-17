import React from 'react'
import Datetime from 'react-datetime'
import styled from 'react-emotion'

// this styled component is used solely to override the date picker styles.
const DatePickerContainer = styled(Datetime)(props => `
  & .rdtPicker {
    width: auto;
    border-radius: 2px;
    padding: 15px 20px 30px;
    border-color: ${props.theme.gray8};
    font-weight: 600;
    box-shadow: 0px 30px 60px -35px rgba(0,0,0,0.8);
  }

  & .rdtPicker td,
  & .rdtPicker th {
    width: 28px;
    padding: 5px;
    border-color: transparent;
  }

  & .rdtPicker td {
    font-size: 10px;
    border-radius: 50px;
  }

  & .rdtPicker td.rdtToday {
    color: ${props.theme.primaryColor};
  }

  & .rdtPicker td.rdtActive,
  & .rdtPicker td.rdtActive:hover {
    position: relative;
    background-color: ${props.theme.promaryColorFill};
    color: ${props.theme.primaryColor};
    text-shadow: none;
  }

  /* this is new */
  & .rdtPicker td.rdtActive:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid ${props.theme.primaryColor};
    border-radius: 50%;
  }

  & .rdtPicker th {
    font-size: 12px;
  }

  & .rdtPicker .dow {
    border-bottom: 1px solid ${props.theme.gray8};
  }

  & .rdtPicker th.rdtSwitch {
    font-size: 14px;
  }

  & .rdtPicker th.rdtNext,
  & .rdtPicker th.rdtPrev {
    position: relative;
  }

  /* this is new */
  & .rdtPicker th.rdtNext:after,
  & .rdtPicker th.rdtPrev:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 2px;
    background: ${props.theme.grayDark};
    top: 22px;
  }

  /* this is new */
  & .rdtPicker th.rdtNext:after {
    left: 2px;
  }

  /* this is new */
  & .rdtPicker th.rdtPrev:after {
    left: 12px;
  }

  & .rdtPrev span,
  & .rdtNext span {
    position: relative;
    color: ${props.theme.grayDark};
    font-size: 24px;
  }

  & .rdtPicker thead tr:first-child th:hover {
    background: #fff;
  }

  /* this is new */
  & .rdtPicker thead tr:first-child th:hover span {
    color: ${props.theme.primaryColor};
  }

  /* this is new */
  & .rdtPicker thead tr:first-child th.rdtNext:hover:after,
  & .rdtPicker thead tr:first-child th.rdtPrev:hover:after {
    background-color: ${props.theme.primaryColor};
  }

  & td.rdtMonth,
  & td.rdtYear {
    height: 40px;
    width: 40px;
  }

  & .rdtPicker td.rdtToday:before {
    border-bottom-color: ${props.theme.primaryColorLight};
  }
`)

const DatePicker = ({
  closeOnSelect,
  viewMode,
  timeFormat,
  ...rest
}) => (
  <DatePickerContainer
    closeOnSelect={closeOnSelect}
    viewMode={viewMode}
    timeFormat={timeFormat}
    {...rest}
  />
)

DatePicker.propTypes = {
}

DatePicker.defaultProps = {
  closeOnSelect: true,
  viewMode: 'days',
  timeFormat: false
}

export default DatePicker
