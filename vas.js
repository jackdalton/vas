function vas(input) {
	input = input.replace(/["]/, "\0");
	var lines = input.split(/[\n;]+/);
	var vars = {};
	for (var i = 0; i < lines.length; i++) {
		var cLine = lines[i];
		if (cLine.indexOf("=") > -1 && cLine[0] != "#") {
			var vName = cLine.substring(0, cLine.indexOf("="));
			vName = vName.replace(/[\ ]/, "\0");
			var vValue = cLine.substring(cLine.indexOf("=") + 1);
			vars[vName] = {};
			vars[vName].name = vName;
			vars[vName].value = vValue;
			var vVB = Boolean(vValue);
			var vVN = Number(vValue);
			var vType = "string";
			if (typeof vVB == "boolean") {
				vType = "boolean";
				if (!(vValue == "true" || vValue == "false")) {
					vType = "string";
				}
			}
			if (!isNaN(vVN)) {
				vType = "number";
				if (vVN % 1 == 0) {
					vars[vName].isInteger = true;
					if (vVN > 0) {
						vars[vName].isPositive = true;
					} else {
						vars[vName].isPositive = false;
					}
					if (vVN % 2 == 0) {
						vars[vName].isEven = true;
					} else {
						vars[vName].isEven = false;
					}
				} else {
					vars[vName].isInteger = false;
				}
			}
			vars[vName].type = vType;
		}
	}
	return vars;
}
