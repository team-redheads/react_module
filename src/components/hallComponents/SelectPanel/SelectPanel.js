import React, { Component } from 'react';
import {connect}   from 'react-redux';
import * as actions from '../../../actions/actionHall.js';

let mapStateToProps = state => ({
  places: state.places.places,
  price: state.places.price
})

class SelectPanel extends Component {

  clickDelHandler = elem => event => {
    let newArr = [...this.props.places]
    newArr.splice(newArr.indexOf(elem),1)
    this.props.setPlaces(newArr)
  }

  allDel = event => {
    this.props.setPlaces([])
  }

  render(){
    let p = this.props
    return(
      <div className = 'panel'>
        <h2>Выбранные места</h2>
        <p style = {{ display: p.places.length ? 'none' : 'block' }}>
          Для продолжения необходимо выбрать хотя бы одно место на схеме зала
        </p>
        <div className = 'panel__item-bar'
          style = {{ display: !p.places.length ? 'none' : 'block' }}>
            <div className = 'panel__item-bar__line'>
              <span>Ряд</span>
              <span>Место</span>
              <span>Цена</span>
            </div>
            {p.places.map( (elem,ind ) =>(
              <div className = 'panel__item-bar__line' key = {ind}>
                <span>{elem.row}</span>
                <span>{elem.place}</span>
                <span>{p.price} грн
                  <span className = 'panel__item-bar__line__del'
                    onClick = {this.clickDelHandler(elem)}>x</span>
                </span>
              </div>
            ))}
            <div className = 'panel__item-bar__sum'
              style = {{ display: p.places.length <=1 ? 'none' : 'block' }}>
              <span>Удалить все</span>
              <span className = 'panel__item-bar__line__del'
                onClick = {this.allDel}>x</span>
            </div>
            <div className = 'panel__item-bar__sum'>
              <span>Всего:</span>
              <span>
                {p.places.reduce((prev,elem) => (
                  prev += p.price
                ),0)}
              </span>
            </div>
        </div>
      </div>
    )
  }
}
 SelectPanel = connect ( mapStateToProps, actions)( SelectPanel )
 export default SelectPanel
