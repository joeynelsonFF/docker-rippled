const { default: getAccountInfo } = require('ripple-lib/dist/npm/ledger/accountinfo');

const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  //server: 'wss://s1.ripple.com' // Public rippled server hosted by Ripple, Inc.
  server: 'ws://localhost'
});
api.on('error', (errorCode, errorMessage) => {
  console.log(errorCode + ': ' + errorMessage);
});
api.on('connected', () => {
  console.log('connected');
});
api.on('disconnected', (code) => {
  // code - [close code](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) sent by the server
  // will be 1000 if this was normal closure
  console.log('disconnected, code:', code);
  //preparePayment()
});
api.connect().then(() => {
  /* insert code here */
  //preparePayment()
  getAccountInfoTest()
    .then( (data) => {
      console.log(`API.getAccountInfo>>`)
      console.log(data)
    })
}).then(() => {
  return api.disconnect();
}).catch(console.error);





//
function getAccountInfoTest() {
  const myAddress = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh';
  return api.getAccountInfo(myAddress);
}


// Transaction Flow


// 1. prepare payment
function preparePayment() {
  const address = 'r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59';
  const payment = {
    "source": {
      "address": "r9cZA1mLK5R5Am25ArfXFmqgNwjZgnfk59",
      "maxAmount": {
        "value": "0.01",
        "currency": "USD",
        "counterparty": "rMH4UxPrbuMa1spCBR98hLLyNJp4d8p4tM"
      }
    },
    "destination": {
      "address": "rpZc4mVfWUif9CRoHRKKcmhu1nx2xktxBo",
      "amount": {
        "value": "0.01",
        "currency": "USD",
        "counterparty": "rMH4UxPrbuMa1spCBR98hLLyNJp4d8p4tM"
      }
    }
  };
  return api.preparePayment(address, payment).then(prepared => {
      /* ... */
      console.log("preparePayment()...")
      console.log(prepared)
    }).catch(error => {
      /* ... as with all prepare* methods, use a Promise catch block to handle errors ... */
      console.log(error)
    })
}
