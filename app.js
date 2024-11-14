function clockFunction() {
    let date = new Date();
    let getHour = date.getHours();
    let getMinutes = date.getMinutes();
    let getSeconds = date.getSeconds();

    let viewHour = document.querySelector('.hour');
    let viewMinute = document.querySelector('.min');
    let viewSeconds = document.querySelector('.sec'); 
    let ampm = document.querySelector('.ampm'); 

    function dualFunction(dual){
       return dual < 10 ? '0' + dual : dual
    }

    
    let period = getHour >= 12 ? "PM" : "AM";
    getHour % 12 === 0 ? 12 : getHour % 12;


    viewHour.innerHTML = dualFunction(getHour);
    viewMinute.innerHTML = dualFunction(getMinutes);
    viewSeconds.innerHTML = dualFunction(getSeconds);
    ampm.innerHTML = period;
}


clockFunction();
setInterval(clockFunction,1000);


let title = document.querySelector('.title');

let arr = ["one","two", 'three', "four"];
let count = 0;
setInterval(()=>{
  title.innerHTML = arr[count];
  count++;

  if(count == arr.length){
    count = 0;
  }
},1000);