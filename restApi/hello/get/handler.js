'use strict';

module.exports.hello = (event, context, callback) => {
  let response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${process.env.FIRST_NAME}!`,
      input: event,
    }),
  };

  callback(null, response);
};
