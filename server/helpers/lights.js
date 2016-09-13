const request = require('request');
//uncomment for development, will need lightsurl file
const lightsurl = process.env.LIGHTS_URL || require('../../lightsurl').url;

//function to get the status of the light on/off
exports.getStatus = function (cb) {
  const light = {};
  request.get(lightsurl, function(error, res, body) {
    if (error) {
      light.status = 'N/A';
    }
    if(JSON.parse(body).value === null || JSON.parse(body).value === '0') {
      light.status = 'off';
    } else {
      light.status = 'on';
    }
    cb(JSON.stringify(light));
  });
};

// function to toggle the light on/off
exports.toggle = function (cb) {
  const light = {};
  request.post(lightsurl, function(error, res, body) {
    if (error) {
      light.status = 'N/A';
    }
    if(JSON.parse(body).value === null || JSON.parse(body).value === '0') {
      light.status = 'off';
    } else {
      light.status = 'on';
    }
    cb(JSON.stringify(light));
  });
};
