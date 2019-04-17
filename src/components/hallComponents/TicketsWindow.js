import React from 'react';
import Ticket from './Ticket.js';
import { Link } from 'react-router-dom';

export default ({tickets, errTickets, user, movieName, movieDate, movieTime, hallName}) => {
  return(
    <div className = 'tickets-wrap'>
      <div className = 'tickets-window'>
        <div className = 'tickets-window__success'>
          {
            tickets.map((el,index) => (
              <Ticket movieName = {movieName} userName = {user}
                      row = {el.row} place = {el.place}
                      time = {movieTime} date = {movieDate}
                      key = {index} hall = {hallName}
               />
            ))
          }
        </div>
        <div className = 'tickets-window__fail'>
          {
            errTickets.map((el, index) => (
              <Ticket movieName = {movieName} userName = {user}
                      row = {el.row} place = {el.place}
                      time = {movieTime} date = {movieDate} error = {true}
                      key = {index} hall = {hallName}
               />
            ))
          }
        </div>
        <Link to = {`/personal/${localStorage.getItem('user')}`}>
          <div className = "tikcetBtn">OK</div>
        </Link>
      </div>
    </div>
  )
}
