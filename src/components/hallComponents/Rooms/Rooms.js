import React, { Component } from 'react';
import { connect }   from 'react-redux';
import * as actions from '../../../actions/actionHall.js';
import axios from "axios";
import UserIcon from './UserIcon.js';

let mapStateToProps = state => ( { places: state.places.places } )

class Rooms extends Component {
  generateHall = () => {
    let res = []
    let line = []
    let showState = JSON.parse( JSON.stringify (this.props.room.space) )
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
    console.log( res,"res" )
    return res
  }
  mouseHandler = elem => event => {
    if ( !elem.free && !this.checkId(elem._id) ) event.target.style.background = 'orange'
  }

  mouseOutHandler = elem => event => {
    if ( !elem.free && !this.checkId ( elem._id ) ) event.target.style.background = '#239903'
  }

  checkId = id => this.props.places.some( el => el._id === id )

  clickHanler = elem => event => {
    console.log( elem._id,"elem._id" )
    if ( elem.free ) return
    let newMass = [...this.props.places]
    let check = newMass.reduce( ( prev, el, ind ) => el._id === elem._id ? ind : prev ,-1 )
    check > -1 ? newMass.splice( check ,1 ) : newMass.push(elem)
    this.props.setPlaces( newMass )
    console.log( 'cilck', this.props.places.indexOf(elem) )
  }

  render () {
    return (
      <div className = 'room'>
        <h1 className = 'room__title'>{/*this.state.room.name*/}</h1>
        <div className = 'room__screen'></div>
        <div className = 'room__hall'>
          {this.generateHall ().map( (line, ind) =>(
            <div className ='room__hall__line' key = {ind}>
              {line.map( (elem,index ) => {
                let inStock = this.checkId(elem._id)
                return(
                <div className = 'room__hall__line__cell'
                     key = {index + ind}
                     title = {`ряд: ${elem.row}; место: ${elem.place}; цена: ${this.props.price}`}
                     style = {{background: inStock ? 'orange' : elem.free ? 'gray' : '#239903',
                              color: elem.free ? 'gray' : '#239903'}}
                     onMouseOver = {this.mouseHandler(elem)}
                     onMouseOut = {this.mouseOutHandler(elem)}
                     onClick = {this.clickHanler(elem)}>
                     {inStock ? <UserIcon check = {true}/> : elem.free ? <UserIcon /> : elem.place}
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
