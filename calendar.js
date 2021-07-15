var currentMonth = 0
var currentYear = 2000

const monthNames = ["Janury", "February", "May", "April","March", "June", "July", "August", "September", "October", "November", "December"]

//initialize function
function init() {



    let currentDate = new Date()
    currentMonth=currentDate.getMonth()
    currentYear=currentDate.getFullYear()
    
    document.getElementById("currentMonth").innerText = monthNames[currentMonth]
    document.getElementById("currentYear").innerText = currentYear.toString()
    updateDays()

}



function nextYear() {

    currentYear += 1
    document.getElementById("currentYear").innerText = currentYear.toString()


    updateDays()
}
function previousYear() {

    if (currentYear != 0) {
        currentYear -= 1
        document.getElementById("currentYear").innerText = currentYear.toString()

    
        updateDays()
    }
}

function nextMonth() {

    currentMonth += 1
   // alert(monthNames[currentMonth])
    if (currentMonth >= 12) {
        currentMonth = 0
        nextYear()// change the year and update display days
      
    }
    else {
        updateDays()// update display days
    }



    document.getElementById("currentMonth").innerText = monthNames[currentMonth]


}

function previousMonth() {

    currentMonth -= 1
    alert(monthNames[currentMonth])
    if (currentMonth <0) {
        currentMonth = 11
        previousYear()// change the year and update display days
    
    }
    else {
        updateDays()// update display days
    }



    document.getElementById("currentMonth").innerText = monthNames[currentMonth]


}

function updateDays() {


    ////Fragment extracted(and modified) from
    let firstDay = new Date(currentYear, currentMonth,0).getDay()
    let daysInMonth = new Date(currentYear, currentMonth+1,0).getDate()+1

   if(firstDay>=6){
       firstDay-=7
   }
    ////
    let maxblocks = 42
    let dpicker = document.getElementById("dayPicker")
    dpicker.innerHTML=""
    for(let i=0;i<maxblocks;i+=1){
        let daybox = document.createElement("div")
        let dayset= (i-firstDay)+1//day to be show in the container
        
        //filter days of the month
        if(i>firstDay && dayset<=daysInMonth){

            daybox.setAttribute("class","day")
            daybox.innerText=(i-firstDay).toString()
        }
        else{
            //placeholder of days outside of the moth
            daybox.setAttribute("class","dayMark")
            daybox.innerText="nope"
        }
        dpicker.appendChild(daybox)
        

     
    } 

    // console.log("month:"+monthNames[currentMonth]+ " start:"+ firstDay+" end:"+daysInMonth)
    //code here to reload days
}
