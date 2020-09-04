var axios = require('axios');
const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? 'http://localhost:1337' : 'https://secure-form-api.herokuapp.com'
const formUUID ="78d51d9e-0285-4022-81c5-7f14955315d0"

module.exports.data = axios.get(`${current}/api/forms/${formUUID}`)
  .then(response => {
    let form = response.data
    console.log('we here')
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

