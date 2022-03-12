const moment = require("moment");

// Variable for date/time, Reads Day/M/D/Y
let timeDate = moment().format('llll');
let timeNow = moment().format('lt')
console.log(timeNow)
// Header
let jumbo = $('.jumbotron');
let dateHeader = $('#currentDay');
let btnIdx = 0


$('.container').on('click', '.saveBtn', function() {
    getLocal();
    btnIdx = $(this).index('.saveBtn');

    var textContent = $(this).siblings('.text').val();
    workDay[btnIdx] = (textContent);
    
    pushLocal();
})

function handleFormSubmit (e) {
    e.preventDefault();    
}

function pushLocal() {

}

function getLocal() {

}