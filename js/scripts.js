// EVENT LISTENER WITH NO PARAMETERS
function checkUsername(e) {
  // get target of event
  var target = e.target;
}

var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);
