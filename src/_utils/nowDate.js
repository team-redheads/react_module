import moment from 'moment';
import 'moment/locale/ru';

export const nowDate = moment();  // сегодняшняя дата
// export const nowDate = new Date( 2019, 3, 17   , 10, 0).toJSON(); // сегодняшняя дата


// export const nowDay  = moment(nowDate).format('dddd' );
// export const nowTime = moment(nowDate).format('HH:mm');
// console.log('nowTime', nowTime);