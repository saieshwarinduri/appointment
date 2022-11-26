import './index.css'

const AppointmentItem = props => {
  const {listDetails, changeitemstarVaue} = props
  const {Title, Date, isStarred, id} = listDetails
  console.log(id)

  const changefaverote = () => {
    changeitemstarVaue(id)
  }
  return (
    <li className="listAppointmentContainer">
      <div className="titleStarButton">
        <p className="listItemTitle">{Title}</p>
        <button
          type="button"
          className="starButton"
          id="star"
          onClick={changefaverote}
        >
          {!isStarred && (
            <img
              className="starimage"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              alt="star"
            />
          )}
          {isStarred && (
            <img
              className="starimage"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
          )}
        </button>
      </div>
      <p className="dateClass">Date:{Date}</p>
    </li>
  )
}

export default AppointmentItem
