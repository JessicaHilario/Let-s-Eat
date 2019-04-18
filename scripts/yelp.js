'use strict';

document.getElementById('submit').onclick = function() {
	var input = document.getElementById('input').value;  // Get input from search bar
	//document.getElementById('search').innerHTML = input;
	var location = document.getElementById('location').value;
	yelpSearch(input, location);  // Call yelp query function with 'input' as search parameter
};
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'p8eXXM3q_ks6WY_FWc2KhV-EmLhSpbJf0P-SATBhAIM4dNCgsp3sH8ogzJPezOT6LzFQlb_vcFfxziHbHuNt8RwxtWY0-vRpx7C0nPz5apIT4A5LYGmaVfuwPrf3WXYx';

// function yelpSearch(e, request)
// {
// const searchRequest = {
//   term: "mexican",
//   location: 'huntington beach, ca'
// };


// Query Yelp API with 'input' as search criteria
function yelpSearch(input, location)
{
	// For some reason the yelp result will only be displayed if I change innerHTML first
	document.getElementById('search').innerHTML = "Please Wait...";
	document.getElementById('search').innerHTML = "";

	// Create search query
	const searchRequest = {
	  term: input,
	  location: location
	};

	const client = yelp.client(apiKey);

	client.search(searchRequest).then(response => {
		var i;
		for(i in response.jsonBody.businesses)
		{

			const result = response.jsonBody.businesses[i];
			const jsonResult = JSON.stringify(result, null, 4);
			console.log(jsonResult);
			document.getElementById('search').innerHTML += "<br> <br>" + jsonResult;
		}
	}).catch(e => {
	  console.log(e);
	});
}
//}