function searchPrescription(){
  var number = document.getElementById("insurancePolicyNumber").value;
/*  if(number == ""){
    return;
  }*/

  var url
  var getRequest = new XMLHttpRequest();


  getRequest.addEventListener("load", () => {
    const parsedData = JSON.parse(getRequest.responseText);
    console.log(parsedData);
    var table = document.getElementById("prescription");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(1);
    cell1.innerHTML = parsedData[0].insurancePolicyNumber;
    cell2.innerHTML = parsedData[0].description;
    cell3.innerHTML = parsedData[0].date;
  });

  getRequest.open("GET", "http://127.0.0.1:4000/api/prescription/"+number);
  getRequest.send();



}
