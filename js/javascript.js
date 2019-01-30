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
//const url = 'https://randomuser.me/api/';
//fourth example
//const  url = 'https://api.myjson.com/bins/m8kso';
//5th example api
//const url = 'https://jsonplaceholder.typicode.com/photos';
//start wars api example
//const url ='https://swapi.co/api/planets/';
//country api
const url = 'https://restcountries.eu/rest/v2/all';
//btn.addEventListener('click', getInput);

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

//fourth example
// function getInput() {
// 	fetch(url)
// 	.then(res => res.json()) 
// 	.then(json => console.log(json))
// 	.catch(error => console.log(error));
// }

// function getInput() {
// 	fetch(url)
// 	.then(function(res) {
// 		return res.json();
// 	})
// 	.then(function(data) {
// 		console.log(data);
// 	})
// }




// function getInput1() {
// 	fetch(url)
// 	.then(function(res) {
// 		return res.json();
// 	})
// 	.then(function(data) {
// 		console.log(data[0].url);
// 		document.querySelector('img').src= 'data[0].url';
// 	})
// }



//country function

// let myData = {};
// fetch(url)
// .then(function(res) {
// 	return res.json();
// })
// .then(function(data) {
// 	myData = data;
// 	buildSelect(data);
// })

// function buildSelect(d) {
// 	let select = document.createElement('select');
// 	d.forEach(function(item, index) {
// 		let option = document.createElement('option');
// 		console.log(item, index);
// 		option.value = index;
// 		option.textContent = item.name;
// 		select.appendChild(option);
// 	})
// 	document.querySelector('body').appendChild(select);
// }
let myData = {};
fetch(url)
.then(function(res) {
	return res.json();
})
.then(function(data) {
	myData = data;		
	buildSelect(data);
})

function buildSelect(d) {
	let select = document.createElement('select');
	d.forEach(function(item, index) {
		let option = document.createElement('option');
		console.log(item, index);
		option.value = index;
		option.textContent = item.name;
		select.appendChild(option);
	})
	select.addEventListener('change', outputData);
	document.querySelector('body').appendChild(select);
}

function outputData(e) {
	console.log(e);
	console.log(e.target.value);
	console.log(myData[e.target.value]);
	let obj = myData[e.target.value];
	output.innerHTML = '<h1>' + obj.name + '</h1>';
	output.innerHTML += '<p>Region: ' + obj.region + '</p>';
	document.querySelector('img').src = obj.flag;
}




















