function none(e) {
  e.stopPropagation();
}
function show() {
  document.getElementById("enter-details").style.display = "block";
}
function dismiss() {
  document.getElementById("enter-details").style.display = "none";
  document.getElementById("form-success").style.display = "none";
}
function submit() {
  var person = {
    name: document.getElementById("form-name").value,
    email: document.getElementById("form-email").value,
    count_attending: document.getElementById("form-total-attending").value,
    message: document.getElementById("form-message").value,
  }
  fetch('https://api.invitivo.com/rsvp/30th', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `mutation {
        insert_guests(objects: [{ 
          name: "${person.name}" ,
          email: "${person.email}",
          count_attending: ${person.count_attending},
          message: "${person.message}"
        }]) {
          affected_rows
        }
      }`
    })
  }).then(function(response) {
    console.log(response.json());
    submitSuccess(person)
  })
}
function submitSuccess(person) {
  document.getElementById("form-success").style.display = "block";
  document.getElementById("form-success").innerText = "Yessss! " + person.name + ", you are on the list!";
}

document.getElementById("RSVP").addEventListener("click", show);
document.getElementById("enter-details").addEventListener("click", dismiss);
document.getElementById("form").addEventListener("click", none);
document.getElementById("submit").addEventListener("click", submit);