


function searchPrescription(){
  var number = document.getElementById("insurancePolicyNumber").value;
  var table = document.getElementById("prescription");
/*  if(number == ""){
    return;
  }*/
  console.log(table.rows.length-1);
  var j = table.rows.length-1;
  while(j != 0){
    table.deleteRow(j);
    j--;
  }

  var url
  var getRequest = new XMLHttpRequest();


  getRequest.addEventListener("load", () => {
    const parsedData = JSON.parse(getRequest.responseText);
    console.log(parsedData);
    for(var i = 0; i<parsedData.length;i++){
      var table = document.getElementById("prescription");
      console.log(table.rows.length-1);
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = parsedData[i].insurancePolicyNumber;
      cell2.innerHTML = parsedData[i].date;
      cell3.innerHTML = parsedData[i].description;
      cell4.innerHTML = parsedData[i]._id;
    }
    prescList(parsedData);

  });

  getRequest.open("GET", "http://127.0.0.1:4000/api/prescription/"+number);
  getRequest.send();
}


function prescList(prescriptions){

  console.log("$$$$$$$$$$$$$$$$$");
  console.log(prescriptions);
  console.log(prescriptions.length);

  var select = document.getElementById("prescriptionDropdown");

  var length = select.options.length;
  for (i = 0; i < length; i++) {
    select.options[i] = null;
  }

  for(var i = 0; i < prescriptions.length; i++) {
    var id = prescriptions[i]._id;
    var elem = document.createElement("option");
    elem.textContent = id;
    elem.value = id;
    select.appendChild(elem);
  }
}


function deletePrescription(){
  var prescs = document.getElementById("prescriptionDropdown");
  var redeemedPresc = prescs.options[prescs.selectedIndex].text;
  console.log("Redeemed prescription: " + redeemedPresc);

  var url = "http://127.0.0.1:4000/api/prescription/" + redeemedPresc;
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url, true);
  xhr.onload = function () {
	   var users = JSON.parse(xhr.responseText);
	   if (xhr.readyState == 4 && xhr.status == "200") {
		     console.table(users);
         searchPrescription();
	      } else {
		        console.error(users);
	         }
  }
  xhr.send(null);

}
