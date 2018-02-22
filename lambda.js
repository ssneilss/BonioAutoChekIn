import moment from 'moment';
import request from 'request';

const httpRequest = request.defaults({ jar: true });

const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const userId = process.env.USER_ID;

exports.handler = () => {
  const clockType = moment().hour() < 4 ? 'S' : 'E'
  httpRequest.post('https://femascloud.com/bonio2016/Accounts/login', {
    form: {
      'data[Account][username]': username,
      'data[Account][passwd]': password,
      'data[remember]': '0',
    }
  }, (err1, response1) => {
    httpRequest.post('https://femascloud.com/bonio2016/users/clock_listing', {
      form: {
        _method: 'POST',
        'data[ClockRecord][user_id]': userId,
        'data[AttRecord][user_id]': userId,
        'data[ClockRecord][shift_id]': '1',
        'data[ClockRecord][period]': '1',
        'data[ClockRecord][clock_type]': clockType,
      }
    }, (err2, response2) => {
      console.log(response2);
    })
  });
};
