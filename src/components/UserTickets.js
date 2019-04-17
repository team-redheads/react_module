import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UserTickets extends Component{
    render() {
        return (
            <div className='block-ticket'>
                {/*UserTickets*/}
                <h2 className='block-ticket__header'>История покупки билетов </h2>
                <table className='table-ticket'>
                    {/*<caption> Все би </caption>*/}
                    <thead className='table-ticket__header'>
                        <tr className='table-ticket__header-row'>
                            <th className='table-ticket__header-col'>Дата покупки</th>
                            <th className='table-ticket__header-col'>Фильм</th>
                            <th className='table-ticket__header-col'>Сеанс</th>
                            <th className='table-ticket__header-col'>Зал</th>
                            <th className='table-ticket__header-col'>Просмотр</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-ticket__item-row'>
                            <th className='table-ticket__item-col'>2019.04.08 16:50</th>
                            <th className='table-ticket__item-col'>Капитан Марвел</th>
                            <th className='table-ticket__item-col'>11 апреля 2019 21:30</th>
                            <th className='table-ticket__item-col'>Зеленый</th>
                            <th className='table-ticket__item-col'>
                                <Link to="/" className='table-ticket__item-col-link'>
                                    Показать
                                </Link>
                            </th>
                        </tr>
                        <tr className='table-ticket__item-row'>
                            <th className='table-ticket__item-col'>2019.04.08 16:50</th>
                            <th className='table-ticket__item-col'>Капитан Марвел</th>
                            <th className='table-ticket__item-col'>11 апреля 2019 21:30</th>
                            <th className='table-ticket__item-col'>Зеленый</th>
                            <th className='table-ticket__item-col'>
                                <Link to='/' className='table-ticket__item-col-link'>
                                    Показать
                                </Link>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}
export default UserTickets;