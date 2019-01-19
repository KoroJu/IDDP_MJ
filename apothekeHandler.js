var ids = [];


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
    if (getRequest.readyState != 4 && getRequest.status != "200") {
      console.error(parsedData);
      return;
    }
    console.log(parsedData);
    for(var i = 0; i<parsedData.length;i++){
      var table = document.getElementById("prescription");
      console.log(table.rows.length-1);
      var row = table.insertRow(i+1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = parsedData[i].insurancePolicyNumber;
      cell2.innerHTML = parsedData[i].date;
      cell3.innerHTML = parsedData[i].description;
      cell4.innerHTML = i+1
      ids[i] = parsedData[i]._id;
      console.log(ids);

    }
    prescList(parsedData);

  });

  getRequest.open("GET", "http://127.0.0.1:4000/api/prescription/"+number);
  getRequest.send();
}


function prescList(prescriptions){
  var select = document.getElementById("prescriptionDropdown");
    var i;
    for(i = select.options.length - 1 ; i >= 0 ; i--)
    {
      select.remove(i);
    }


  console.log("$$$$$$$$$$$$$$$$$");
  console.log(prescriptions);
  console.log(prescriptions.length);

  for(var i = 0; i < prescriptions.length; i++) {
    var id = i+1;
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

  var url = "http://127.0.0.1:4000/api/prescription/" + ids[redeemedPresc-1];
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
