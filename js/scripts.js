// EVENT LISTENER WITH NO PARAMETERS
function checkUsername(e) {
  // get target of event
  var target = e.target;
  console.log(target);
}

var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);


// EVENT LISTENER WITH PARAMETERS
function checkUsername(e, minLength) {
  // get target of event
  var target = e.target;
}

var el = document.getElementById('username');
el.addEventListener('blur', function(e) {
  checkUsername(e, 5); 
}, false);
