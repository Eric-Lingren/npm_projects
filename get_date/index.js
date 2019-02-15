let d1 = Date.now()

let d2 =  Date(Date.now())

let d3 = new Date()

// let d4 = Date.getDay()

console.log(d1)
console.log(d2)
console.log(d3)

function _getDayOfWeekShort(){
    let date = Date(Date.now())
    let splitDate = date.split(" ")
    let day = splitDate[0]
    return day
}

console.log(_getDayOfWeekLong())



function _getDayOfWeekLong(){
    let date = Date(Date.now())
    let splitDate = date.split(" ")
    let day = splitDate[0]
    switch(day){
        case 'Sun':
            return "Sunday";
            break;
        case 'Mon':
            return "Monday";
            break;
        case 'Tue':
            return "Tuesday";
            break;
        case 'Wed':
            return "Wednesday";
            break;
        case 'Thu':
            return "Thursday";
            break;
        case 'Fri':
            return "Friday";
            break;
        case 'Sat':
            return "Saturday";
            break;
        default:
            "We apparently had an error.  Apologies for breaking. :\( ";
            break;
    }
};

console.log(_getDayOfWeekLong())




function _getMonthShort(){
    let date = Date(Date.now());
    let splitDate = date.split(" ");
    let month = splitDate[1];
    return month;
};

console.log(_getMonthShort())



function _getMonthLong(){
    let date = Date(Date.now())
    let splitDate = date.split(" ")
    let month = splitDate[1]
    switch(month){
        case 'Jan':
            return "January";
            break;
        case 'Feb':
            return "February";
            break;
        case 'Mar':
            return "March";
            break;
        case 'Apr':
            return "April";
            break;
        case 'May':
            return "May";
            break;
        case 'Jun':
            return "June";
            break;
        case 'Jul':
            return "July";
            break;
        case 'Aug':
            return "August";
            break;
        case 'Sept':
            return "September";
            break;
        case 'Oct':
            return "October";
            break;
        case 'Nov':
            return "November";
            break;
        case 'Dec':
            return "December";
            break;
        default:
            return "We apparently had an error.  Apologies for breaking. :\( ";
            break;
    }
}

console.log(_getMonthLong())



function _getDayNumber(){
    let date = Date(Date.now());
    let splitDate = date.split(" ");
    let dayNumber = splitDate[2];
    console.log(typeof(dayNumber))
    return dayNumber;
}; 

console.log(_getDayNumber())