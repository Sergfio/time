function showTime(){
    var time = new Date();
    var hours = time.getHours();    //0-23
    var minutes = time.getMinutes();        //0-59
    var seconds = time.getSeconds();    //0-59
    var ampm = hours > 12 ? 'pm' : 'am';
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds + ampm;   // hours
}

 time = setInterval(showTime, 1000);