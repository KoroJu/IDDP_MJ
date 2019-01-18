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
    for(var i = 0; i<parsedData.length;i++){
      var table = document.getElementById("prescription");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = parsedData[i].insurancePolicyNumber;
      cell2.innerHTML = parsedData[i].description;
      cell3.innerHTML = parsedData[i].date;}
  });

  getRequest.open("GET", "http://127.0.0.1:4000/api/prescription/"+number);
  getRequest.send();



}
