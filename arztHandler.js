var patients = [];

// function addPatient(){
//
//     var id = document.getElementById("newPatientID").value;
//     var firstname = document.getElementById("newPatientFirstname").value;
//     var lastname = document.getElementById("newPatientLastname").value;
//
//     var patient = { "firstname": firstname, }
//
//
// }


function addPrescription()  {

    //hardcoded doctor
    // var doc = {"firstname":"Bob", "lastname":"Kelso", "personalnumber":"BK-666"}
    var doc = "BK-666"
    var desc = document.getElementById("prescriptionDesc").value;
      var pats = document.getElementById("patientDropDown");
    var selPatID = pats.options[pats.selectedIndex].text;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;


    var url = "http://127.0.0.1:4000/api/prescription";
    var data = {};
    data.Patient = selPatID;
    data.Doctor  = doc;
    data.description = desc:
    data.date = today;
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
	     var prescriptions = JSON.parse(xhr.responseText);
	      if (xhr.readyState == 4 && xhr.status == "201") {
		        console.table(prescriptions);
	      } else {
		        console.error(prescriptions);
	         }
    }
    xhr.send(json);

    document.getElementById("prescriptionDesc").value = "";
}


function getPatients(){

  var url  = "http://127.0.0.1:4000/api/users";
  var xhr  = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onload = function () {
	   var patients = JSON.parse(xhr.responseText);
	    if (xhr.readyState == 4 && xhr.status == "200") {
		      console.table(users);
	       } else {
		         console.error(users);
	          }
  }
  xhr.send(null);






  var select = document.getElementById("patientDropDown");
  var ids = []
  // for each patient element put ID in ids


  for(var i = 0; i < ids.length; i++) {       //erstellt für jeden Patienten ein Element
    var id = ids[i];                          // im Dropdown Menü mit Patient ID
    var elem = document.createElement("option");
    elem.textContent = id;
    elem.value = id;
    select.appendChild(id);
  }​





}