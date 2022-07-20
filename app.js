const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

console.log(process.argv)
const adress = process.argv[2]

if(!adress){
    console.log("please provide adress!!!! ")
} else{
    geoCode(adress, (error, {latitude, longitude, location}= {})=>{
        if (error){
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log('Data: ', forecastData)
        })
    })
}










// CallStack -- A simple data structure provided by v8 javascript engine . the function of callstack is to track the execution of program  by keeping track of all the functions running concurrently.
// when we debug the issue, first line you will see issue
// next lines you see set of functions failed in recursive -- back way i.e., called as callstack tracking

/* 
SetTimeout 
*/

// settimeout is nodejs api which was internall created by cpp
// when we call settimeout in node js 1=> it goes to callstack and then 2=> node apis and then once the timer is completed
// 3=> then it goes to event loop queue till the callstack is empty
// event loop queue gets executed only once everything else in callstack is done, which means callstack should be empty
// only then you can run event loop queue

//const request = require('request')
// const weatherAppUrl = 'http://api.weatherstack.com/current?access_key=cd89b3c2905dcf820aeeb61eb42d104f&query=34.053691,-118.242766&units=f'
// request({ url: weatherAppUrl, json: true}, (error, response)=>{

//     if (error){
//         console.log('Unable to connect Weather Service!!!!!!')
//     } else if (response.body.error){
//         console.log("Unable to find Location!!")
//     } else{
//         const data = response.body.current.temperature
//         const rainchance = response.body.current.precip
//         console.log(response.body.current.weather_descriptions[0] + ' It is currently ' + data + ' degrees out. There is a ' + rainchance + ' % chance of rain. ')
//     }
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
