const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

var acc = document.getElementsByClassName("accordion");
var i;

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }

});

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
});
}

//timer stuff
var targetDate = new Date("April 15,2024 00:00:00").getTime();
var n = setInterval(function() {
  var currTime = new Date().getTime();
  var dist = targetDate - currTime;

  var days = Math.floor(dist / (1000 * 60 * 60 * 24));
  var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById('countdown').innerHTML = days + "d " + hours + "h ";

  if (dist < 0) {
    clearInterval(n);
    document.getElementById('countdown').innerHTML = "Sorry, this Program has Expired";
  }
}, 1000);

//close window
function closeWindow() {
  close();
}

//Questionaire
const button = document.querySelector('#sub_bu');
const form = document.getElementById('form_link');
const out = document.getElementById('queryOut');
const query = document.querySelectorAll('input[name ="employees"]');
button.addEventListener('click', () => {
  let n;
  for (const quer of query) {
    if (quer.checked) {
      n = quer.value;
      break;
    }
  }
  if (n == "u1" || n == "u6") {
    out.innerHTML = "Sorry, your business does not qualify for the ERC program.";
    form.style.display="none";
  }
  else {
    if (n == "u2" || n == "u3" || n == "u4" || n == "u5") {
      out.innerHTML = "Congratulations, your business may be qualified for the ERC program. Please fill out the form below to get in contact with us!";
      form.style.display="initial";
    }
  }
});
