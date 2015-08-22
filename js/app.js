$(function () {
	$('#searchTerm').submit(function (event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm) {
	var params = {
		s: searchTerm,
		r: 'json'
	};
	url = 'http://www.omdbapi.com';
	$.getJSON(url, params, function(data) {
			showResults(data.Search);
	});
}

function showResults (array) {
	var html = "";
	$.each(array, function(index,value) {
		console.log(value.Title);
		html += '<p>'+value.Title+'</p>';
	});
	$('#search-results').html(html);
}
