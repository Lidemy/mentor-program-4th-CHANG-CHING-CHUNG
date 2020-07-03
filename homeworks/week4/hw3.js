/* eslint-disable no-shadow */
const req = require('request');

const input = process.argv[2];

function searchInformationOfCountry(countryName) {
  if (countryName !== undefined) {
    req.get(`https://restcountries.eu/rest/v2/name/${countryName}`, (err, res, body) => {
      try {
        if (res.statusCode === 200) {
          const countries = JSON.parse(body);
          countries.forEach((country) => {
            console.log('============');
            console.log(`國家: ${country.name}`);
            console.log(`首都: ${country.capital}`);
            console.log(`貨幣: ${country.currencies[0].code}`);
            console.log(`國碼: ${country.callingCodes[0]}`);
            console.log('============');
          });
        } else {
          console.log('找不到國家資訊');
        }
      } catch (err) {
        console.log('ERROR!');
      }
    });
  } else {
    console.log('Please enter a country name!');
  }
}


searchInformationOfCountry(input);
