 function pInput() {
     var input = document.getElementById("cInput").value;
     var parsed = vas(input);
     var output = "";
     for (var i in parsed) {
         output += String(i) + " : \n";
         output += "\tvalue : " + parsed[i]["value"] + "\n";
         output += "\ttype : " + parsed[i]["type"] + "\n";
         if (parsed[i]["type"] == "number") {
            output += "\tisInteger : " + parsed[i]["isInteger"] + "\n";
         }
         if (parsed[i]["isInteger"]) {
            output += "\tisEven : " + parsed[i]["isEven"] + "\n";
            output += "\tisPositive : " + parsed[i]["isPositive"] + "\n";
         }
     }
     document.getElementById("cOutput").value = output;
 }
