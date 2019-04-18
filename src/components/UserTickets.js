import React, { Component } from 'react';
import moment from 'moment';
// import { Link } from 'react-router-dom'

import Ticket from '../components/hallComponents/Ticket.js';
import {Link} from "react-router-dom";

class UserTickets extends Component{
    state = {
        clickBtn: false,
        disabled: false,
        id: null
    };
    handlerBtnOk = () => {
        this.setState({ clickBtn: false,disabled: false, id: null });
        console.log('this.state ', this.state.clickBtn);
    }

    handleBtnClick = id => () => {
        this.setState({ clickBtn: true, disabled: true, id: id });
        console.log('this.state ', this.state.clickBtn);
    }

    render() {
        const { user, movie, session, roomName } = this.props
        const tickets = JSON.parse(localStorage.getItem('tickets'));
        const ticketItem = tickets.map( (itemTicket, index) => {
            const currentUser = itemTicket.user === user._id && user.local;
            const currentSession = session && session.find( el => el._id === itemTicket.session);
            const currentMovie = movie && movie.find( el => el._id === currentSession.movie);
            const currentRoom = currentSession && roomName  && roomName.find( el => el._id === currentSession.room).name;
              console.log(currentUser,  currentSession,  currentMovie,  currentRoom, "Ticked")
            return currentUser && currentSession && currentMovie && currentRoom && (
                <React.Fragment>
                    <tr className='table-ticket__item-row' key={index}>
                        <th className='table-ticket__item-col'> {currentMovie.title} </th>
                        <th className='table-ticket__item-col'> {moment(currentSession.date).format('DD MMMM YYYY HH:mm')} </th>
                        <th className='table-ticket__item-col'> {(currentRoom === 'green' && "Зеленый") || (currentRoom === 'yellow' && "Желтый") } </th>
                        <th className='table-ticket__item-col'>
                            <button className='table-ticket__item-col-link' onClick={this.handleBtnClick(itemTicket._id)}>
                                Показать
                            </button>
                        </th>
                    </tr>
                    <div key={itemTicket._id}
                        className={this.state.id && this.state.id === itemTicket._id ? "block-ticket-visible" : "block-ticket-unvisible"}>
                        <div className = 'block-tickets-window'>
                            <div className = 'block-tickets-window__success'>
                                <Ticket movieName = {currentMovie.title} userName = {`${currentUser.firstName} ${currentUser.lastName}`}
                                        row = {itemTicket.row} place = {itemTicket.place}
                                        time = {moment(currentSession.date).format('HH:mm')} date = {moment(currentSession.date).format('DD.MM.YYYY')}
                                        hall = {currentRoom}
                                />
                            </div>
                            <Link to = {`/personal/${localStorage.getItem('user')}/tickets`}>
                                <div className = "block-ticketBtn" onClick={this.handlerBtnOk}> OK </div>
                            </Link>
                        </div>
                    </div>
                </React.Fragment>
            )
        });

        return (
            <div className='block-ticket'>
                <h2 className='block-ticket__header'>История покупки билетов </h2>
                <table className='table-ticket'>
                    {/*<caption> Все би </caption>*/}
                    <thead className='table-ticket__header'>
                        <tr className='table-ticket__header-row'>
                            <th className='table-ticket__header-col'>Фильм</th>
                            <th className='table-ticket__header-col'>Сеанс</th>
                            <th className='table-ticket__header-col'>Зал</th>
                            <th className='table-ticket__header-col'>Просмотр</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticketItem}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default UserTickets;
