'use strict';
define(function (require) {
    const yelp = require('yelp-fusion');
});
//document.getElementById("container").innerHTML = "test";
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'p8eXXM3q_ks6WY_FWc2KhV-EmLhSpbJf0P-SATBhAIM4dNCgsp3sH8ogzJPezOT6LzFQlb_vcFfxziHbHuNt8RwxtWY0-vRpx7C0nPz5apIT4A5LYGmaVfuwPrf3WXYx';

var filter = "mexican";
var place = "Huntington Beach, CA";
const searchRequest = {
  // term: "Mexican",
  // location: 'Huntington Beach, CA'
  filter, place
};

const yelpClient = yelp.client(apiKey);

yelpClient.search(searchRequest).then(response => 
{
	var i;
	for(i in response.jsonBody.businesses)
	{
	  const result = response.jsonBody.businesses[i];
	  const prettyJson = JSON.stringify(result, null, 4);
	  console.log(prettyJson);
	}
}).catch(e => {
  console.log(e);
});