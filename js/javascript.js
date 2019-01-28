/*
const btn = document.querySelector('button');
const output = document.querySelector('#output');

btn.addEventListener('click', getJoke);

function getJoke() {
	console.log('new joke coming');
	const xhr = new XMLHttpRequest();
	const url = 'https://api.chucknorris.io/jokes/random';
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				const obj = JSON.parse(xhr.responseText);
				output.innerHTML = obj.value + '<br><img src="' + obj.icon_url + '">';
			}else {
				output.innerHTML = 'ERROR';
			}
		}
	}
	xhr.open('GET', url);
	xhr.send();

	xhr.addEventListener('progress', callBackfn);
	xhr.addEventListener('load', callBackfn);
	xhr.addEventListener('error', callBackfn);


}

function callBackfn(e) {
	console.log(e);
}

*/
/*
//second example


const btn = document.querySelector('button');
const output = document.querySelector('#output');
const intake = document.querySelector('input');
const url = 'https://randomuser.me/api/';

btn.addEventListener('click', getInput);

function getInput() {
	const xhr = new XMLHttpRequest();
	let tempVal = intake.value;
	let tempURL = url + '?results=' + tempVal;
	xhr.onload = function(res) {
		if(xhr.readyState === 4 && xhr.status == 200) {
			let data = JSON.parse(xhr.responseText).results;
			outputHTML(data);
		} else {
			console.log('error');
		}
	}
	xhr.open('GET', tempURL);
	xhr.send();
	console.log(intake.value);
}

function outputHTML(data) {
	console.log(data);
	output.innerHTML = '';
	for(let x = 0; x<data.length; x++) {
		output.innerHTML += data[x].email + '<br>';
	}
}

*/


const btn = document.querySelector('button');
const output = document.querySelector('#output');
const intake = document.querySelector('input');
//third example url
const url = 'https://randomuser.me/api/';
//fourth example
//const  url = 'https://api.myjson.com/bins/m8kso';

btn.addEventListener('click', getInput);

// function getInput() {
// 	let tempVal = intake.value;
// 	let tempURL = url + '?results=' + tempVal;
// 	fetch(tempURL)
// 	.then(function(response) {
// 		return response.json();
// 	})
// 	.then(function(data) {
// 		console.log(data.results);
// 		for(let x=0; x<data.results.length; x++) {
// 			output.innerHTML+= data.results[x].name.first + '<br>';
// 		}
// 	})
// }

function getInput() {
	fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data.message);
		for(let x=0; x<data.message.length; x++) {
			console.log(data.message[x].output);
		}
	})
	.catch(function(error) {
		console.log(error);
	})
}




