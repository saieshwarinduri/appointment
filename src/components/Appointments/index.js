import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import AppointmentItem from '../AppointmentItem/index'

import './index.css'

class Appointments extends Component {
  state = {initialList: [], Title: '', Date: '', buttonStarred: false}

  titleInputChange = event => {
    this.setState({
      Title: event.target.value,
    })
  }

  changeitemstarVaue = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.map(eachlist => {
        if (id === eachlist.id) {
          return {...eachlist, isStarred: !eachlist.isStarred}
        }
        return eachlist
      }),
    }))
  }

  changeThestarState = () => {
    this.setState(prevState => ({
      buttonStarred: !prevState.buttonStarred,
    }))
  }

  dateInput = event => {
    this.setState({
      Date: format(new Date(event.target.value), 'dd MMMM yyyy, EEEE'),
    })
  }

  addListItem = () => {
    const {Title, Date} = this.state

    const appointment = {
      id: uuidv4(),
      Title,
      Date,
      isStarred: false,
    }
    this.setState(prevState => ({
      initialList: [...prevState.initialList, appointment],
      Title: '',
      Date: '',
    }))
  }

  render() {
    const {initialList, Title, date, buttonStarred} = this.state

    const calssColor = buttonStarred === true ? 'coloree' : ''

    const filteredList =
      buttonStarred === true
        ? initialList.filter(eachList => eachList.isStarred === true)
        : initialList
    console.log(filteredList)
    return (
      <div className="main_container">
        <div className="contentContainer">
          <h1 className="heading">Add Appointment</h1>
          <div className="imageInputContainer">
            <div className="inputContiner">
              <label className="TitleLabel" htmlFor="title">
                TITLE
              </label>
              <input
                className="input"
                id="title"
                type="text"
                onChange={this.titleInputChange}
                value={Title}
              />
              <label className="TitleLabel" htmlFor="date">
                Date
              </label>
              <input
                id="date"
                className="input"
                htmlFor="date"
                type="date"
                onChange={this.dateInput}
                value={date}
              />
              <button
                className="addButton"
                type="button"
                onClick={this.addListItem}
              >
                Add
              </button>
            </div>
            <img
              className="Imageelement"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="linebreak" />
          <div className="appointmentsListContainer">
            <h1 className="appointments">Appointments</h1>
            <button
              className={`buttonClass ${calssColor}`}
              type="button"
              onClick={this.changeThestarState}
            >
              Starred
            </button>
          </div>
          <ul className="listContainer">
            {filteredList.map(eachList => (
              <AppointmentItem
                listDetails={eachList}
                key={eachList.id}
                changeitemstarVaue={this.changeitemstarVaue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
