const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') // another way to do same

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString()); // we don't won't to run this in console
    clock.innerHTML = date.toLocaleTimeString();


}, 1000) // this constant declare here represents the (1000) = 1second
