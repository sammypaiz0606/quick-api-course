var xhr = new XMLHttpRequest();
var url = 'http://api.icndb.com/jokes/random';
xhr.onreadystatechange = function() {
	console.log(xhr.readyState);
	if(xhr.readyState == 4) {
		console.log(xhr.response);
	}
}
xhr.open('GET', url);
xhr.send();
console.log(xhr);