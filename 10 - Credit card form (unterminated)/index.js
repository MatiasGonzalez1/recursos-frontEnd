const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02502bc49cmsh612455862e76059p176e6ajsn17de932dc20f',
		'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
	}
};

fetch('https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6qeT4rvcak0&format=mp3&responseFormat=json&lang=en', options)
	.then(response => response.json())
	.then(response => console.log(response.YoutubeAPI))
	.catch(err => console.error(err));