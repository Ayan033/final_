function checksymbol(letters){
    let numbers=[1,2,3,4,5,6,7,8,9,0];
    for(let l=0;l<numbers.length;l++){
        if(letters[0]==numbers[l]){
            return false;
        }
        else{
            return true;
        }
    }
}

function takevalue(){
    let var2=document.getElementById('Password');
    let var3=document.getElementById('btnPassword');
    if(var2.type=='password'){
        var2.type='text';
        var3.innerHTML="Unshow";
    }
    else{
        var2.type='password';
        var3.innerHTML='Show';
    }
}


function send() {
    let fname = document.getElementById("fname").value;
    let rfname = document.getElementById('repeatfname').value;
    let lname = document.getElementById('name').value;
    let email = document.getElementById('email').value;
if (fname.length < 1) {
    alert("Please input first name");
    return false;
}
else if (checksymbol(fname) == false) {
    alert("You cannot use symbols!");
    return false;
}
else if (fname.length > 32) {
    alert('No more than 32 letters');
    return false;
}
else {
    if (fname != rfname) {
        repeatfname.style.backgroundColor = 'red';
        return false;
    }
    else{
        repeatfname.style.backgroundColor='white';
        if(lname.length<1){
            alert("Please input last name");
            return false;
        }
        else if(lname.length>32){
            alert('No more than 32 letters in last name');
            return false;
        }
        else{
            if(email.length<1){
                alert("Please input email");
                return false;
            }
            else if(email.length>40){
                alert('No more than 40 letters in email');
                return false;
            }
            else{
                return true;
            }
        }
    }
}
}



// Set the date we're counting down to
var countDownDate = new Date("Jan 2, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
