'use strict';


/*function printSearch(e)
{
	var search = document.getElementById("input").value;
	document.getElementById("container").innerHTML = search;
	return false;
}

if(search.attachEvent)
{
	search.attachEvent("submit", printSearch);
}
else
{
	search.addEventListener("submit", printSearch);
}*/
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'p8eXXM3q_ks6WY_FWc2KhV-EmLhSpbJf0P-SATBhAIM4dNCgsp3sH8ogzJPezOT6LzFQlb_vcFfxziHbHuNt8RwxtWY0-vRpx7C0nPz5apIT4A5LYGmaVfuwPrf3WXYx';

function yelpSearch(e, request)
{
	const searchRequest = {
	  term: "Mexican",
	  location: 'huntington beach, ca'
	};

	const client = yelp.client(apiKey);

	client.search(searchRequest).then(response => {
		var i;
		for(i in response.jsonBody.businesses)
		{
			const result = response.jsonBody.businesses[i];
			const jsonResult = JSON.stringify(result, null, 4);
			console.log(jsonResult);
		}
	}).catch(e => {
	  console.log(e);
	});
}
