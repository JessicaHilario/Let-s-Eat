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
// Wait for submit button to be clicked
document.getElementById('submit').onclick = function() {
	var input = document.getElementById('input').value;  // Get inputs
	//document.getElementById('search').innerHTML = input;
	var location = document.getElementById('location').value;
	yelpSearch(input, location);  // Call yelp query function with inputs as search parameters
};
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'p8eXXM3q_ks6WY_FWc2KhV-EmLhSpbJf0P-SATBhAIM4dNCgsp3sH8ogzJPezOT6LzFQlb_vcFfxziHbHuNt8RwxtWY0-vRpx7C0nPz5apIT4A5LYGmaVfuwPrf3WXYx';

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

	// Create yelp client to send/recieve API request
	const client = yelp.client(apiKey);

	// Call Yelp API with searchRequest
	// Returns:  Top 20 results
	client.search(searchRequest).then(response => {
		var i;
		// Iterate through 20 results
		for(i in response.jsonBody.businesses)
		{
			// Get JSON data for next restaurant
			const result = response.jsonBody.businesses[i];
			// Iterate through key:value JSON attributes
			for(var key in result)
			{
				// Print key:value line by line
				if(result.hasOwnProperty(key))
				{
					document.getElementById('search').innerHTML += "<strong>" + key + ":</strong>  " + JSON.stringify(result[key], null, 4) + "<br>";
				}
			}
			// Line breaks between results
			document.getElementById('search').innerHTML += "<br><br>";
			//document.getElementById('search').innerHTML += jsonResult + "<br> <br>";// + jsonResult;
		}
	}).catch(e => {
	  console.log(e);
	});
}
//}
>>>>>>> c2a78420ba9f9c580b5fc0ce5dc2179dde2f28be
