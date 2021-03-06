import React, { Component } from 'react';
import { connect }   from 'react-redux';
import * as actions from '../../../actions/actionHall.js';
import UserIcon from './UserIcon.js';
import Message from './Message.js';

const mapStateToProps = state => ( { places: state.places.places } )

class Rooms extends Component {
  state = {
    message: false
  }
  generateHall = () => {
    const res = []
    let line = []
    const showState = JSON.parse( JSON.stringify (this.props.room) )
    showState.sort( (a, b) => a.row - b.row ).forEach( (elem, ind, arr) =>{
      if ( elem.row === ( arr[ind+1] ? arr[ ind+1 ].row : null) ) {
        line.push( elem )
      }
      else {
        line.push( elem )
        res.push( line.sort( (a, b) => a.place - b.place ) )
        line = []
      }
    })
    return res
  }
  mouseOverHandler = elem => event => {
    if ( (!elem.free && !elem.booked) && !this.checkId(elem._id) ) event.target.style.background = 'orange'
  }

  mouseOutHandler = elem => event => {
    if ( (!elem.free && !elem.booked) && !this.checkId ( elem._id ) ) event.target.style.background = '#239903'
  }

  checkId = id => this.props.places.some( el => el._id === id )

  clickHanler = elem => event => {
    this.setState ({ message: true })
    if ( !localStorage.getItem('token') ) return
    if ( elem.free || elem.booked ) return
    const newMass = [...this.props.places]
    const check = newMass.reduce( ( prev, el, ind ) => el._id === elem._id ? ind : prev ,-1 )
    check > -1 ? newMass.splice( check ,1 ) : newMass.push(elem)
    this.props.setPlaces( newMass )
  }

  render () {
    const token = localStorage.getItem('token')
    return (
      <div className = 'room'>
        <div className = 'room__screen'></div>
        <div className = 'room__hall'>
          { !token && this.state.message ? <Message title = 'Выбор мест' btn = { true } description = 'Для продолжения необходимо войти в личный кабинет или зарегестрироваться' /> : false }
          {this.generateHall ().map( (line, ind) =>(
            <div className ='room__hall__line' key = {ind}>
              {line.map( (elem,index ) => {
                const inStock = this.checkId(elem._id)
                return(
                <div className = 'room__hall__line__cell'
                     key = {index + ind}
                     title = {`ряд: ${elem.row}; место: ${elem.place}; цена: ${this.props.price}`}
                     style = {{background: inStock ? 'orange' : elem.free || elem.booked ? 'gray' : '#239903',
                              color: elem.free || elem.booked ? 'gray' : '#239903'}}
                     onMouseOver = {this.mouseOverHandler(elem)}
                     onMouseOut = {this.mouseOutHandler(elem)}
                     onClick = {this.clickHanler(elem)}>
                     {inStock ? <UserIcon check = {true}/> : elem.free || elem.booked ? <UserIcon /> : elem.place}
                  </div>
              )})}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Rooms = connect ( mapStateToProps, actions )(Rooms)
export default Rooms
