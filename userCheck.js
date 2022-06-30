var selectedUser;
var userCheck = false

function dictionary() {
	outlet(0, "clear");
  
  outlet(0, ["append", "select..."]);

  var incomingDict = new Dict(arguments[0]);
  var incomingUsers = incomingDict.get("items"); // array of incoming users
	
  for (i = 0; i<incomingUsers.length; i++) {
		var user = incomingUsers[i];
		outlet(0, ["append", user]);
		if(user == selectedUser) {
			userCheck = true;
		}	
	}
	if (userCheck) {
		outlet(0, ["set", selectedUser[0]]);
		userCheck = false;
	}
}

function anything() {
	selectedUser = arrayfromargs(messagename, arguments);
}