function parse() {
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);
	request.onreadystatechange = function() {
		console.log("Hello!");
		if (request.readyState == 4) {
			console.log("Got the data back!");
			data = request.responseText;
			console.log(data);
			msg = JSON.parse(data);
			elem = document.getElementById("messages");
			for (i = 0; i < msg.length; i++) {
				elem.innerHTML += "<p>" + msg[i]["content"] + " - " + msg[i]["username"] + "</p>";
			}
		}
	};
	request.send(null);
}