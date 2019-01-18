var patients = [];
var currentDoc = "5c41f6f0281e7154e8456e6b";




function addPatient(){

    var patID = document.getElementById("newPatientID").value;
    var url  = "http://127.0.0.1:4000/api/users/" + currentDoc;
    var xhr  = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onload = function () {
       var doc = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(doc);
            console.log(doc.doctor.insurancePolicyNumber);
            console.log("current patients list");
            doc.doctor.insurancePolicyNumber.push(Number(patID));
            console.log(doc.doctor.insurancePolicyNumber);
            console.log("Patients added locally");

            var url = "http://127.0.0.1:4000/api/users/" + currentDoc;

            var data = doc;
            var json2 = JSON.stringify(data);

            var xhr2 = new XMLHttpRequest();
            xhr2.open("PUT", url, true);
            xhr2.setRequestHeader('Content-type','application/json; charset=utf-8');
            xhr2.onload = function () {
	             var patients = JSON.parse(xhr2.responseText);
	             if (xhr2.readyState == 4 && xhr2.status == "200") {
		               console.log(patients.doctor.insurancePolicyNumber);
                   console.log("Patients added in DB");
	                } else {
		                  console.error(patients);
	                   }
                   }
            xhr2.send(json2);


           } else {
               console.error(patients);
              }
    }
    xhr.send(null);



}


function addPrescription()  {

    //hardcoded doctor
    //var doc = {"firstname":"Bob", "lastname":"Kelso", "personalnumber":"BK-666"}
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
    data.insurancePolicyNumber = selPatID ;    //selPatID
    data.personalnumber  = doc;
    data.description = desc;
    data.date = today;
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
	     var prescriptions = JSON.parse(xhr.responseText);
	      if (xhr.readyState == 4 && xhr.status == "200") {
		        console.table(prescriptions);
	      } else {
		        console.error(prescriptions);
            console.log(xhr.readyState);
            console.log(xhr.status);
	         }
    }
    xhr.send(json);

    document.getElementById("prescriptionDesc").value = "";
}


function getPatients(){

  var url  = "http://127.0.0.1:4000/api/users/" + currentDoc;
  var xhr  = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
     var patients = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
          console.table(patients);
          console.log(patients.doctor.insurancePolicyNumber.length);

          var select = document.getElementById("patientDropDown");
          var ids = patients.doctor.insurancePolicyNumber;
          // for each patient element put ID in ids


          for(var i = 0; i < ids.length; i++) {       //erstellt für jeden Patienten ein Element
            var id = ids[i];                          // im Dropdown Menü mit Patient ID
            var elem = document.createElement("option");
            elem.textContent = id;
            elem.value = id;
            select.appendChild(elem);
          }
         } else {
             console.error(patients);
            }
  }
  xhr.send(null);

}
