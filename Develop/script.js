let timeDate = moment().format('LL');
let timeNow = moment().format('LT');
let jumbo = $('.jumbotron');
let hour = $('#time')
let workDay = getLocal();

let btnIdx = 0

// Display Current Date and Time
$('h1').text(timeDate);
$('h2').text(timeNow);


// Activate planner and updates with local storage
$('.container').on('click', '.saveBtn', function() {
    getLocal();
    btnIdx = $(this).index('.saveBtn');

    var textContent = $(this).siblings('.text').val();
    workDay[btnIdx] = (textContent);

    pushLocal();
})


// Pass new call data to local storage
function pushLocal() {
    textString = JSON.stringify(workDay);
    localStorage.setItem("appointment", textString);    
}

// Recieved stored cal data from local storage
function getLocal() {
    let pullLocal = localStorage.getItem('appointment')
    if(pullLocal === null){
        pullLocal = [
            {
                description: '',
                hours: 9, 
            },
            {
                description: '',
                hours: 10, 
            },    
            {
                description: '',
                hours: 11, 
            },    
            {
                description: '',
                hours: 12, 
            },    
            {
                description: '',
                hours: 1, 
            },    
            {
                description: '',
                hours: 2, 
            },    
            {
                description: '',
                hours: 3,
            },    
            {
                description: '',
                hours: 4,
            },    
            {
                description: '',
                hours: 5
            }    
        ]
    } else {
        pullLocal = JSON.parse(pullLocal);
    }
    return pullLocal;
}




// function handleFormSubmit (e) {
//     e.preventDefault();    
// }

// function timeline () {
//     // moment time: h .. changes the time to a single number
//     let past;
//     let present;
//     let future;
//     const currentHour = moment().format(h);

//     if ([i].hours) {
        
//     }
    
// }


$('.container').children().each((i, e) => {
    
    let timeNow = moment().format('H');
    if ((i + 9) < timeNow) {
        $(e).css("background-color", '#BEBEBE')
    } else {
        $(e).css("background-color", "green")
    }
})

$('.container').children().find('#textarea').each((i, e) => $(e).val(workDay[i].description));