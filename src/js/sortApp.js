"use strict";

var sortApp = angular.module("sortApp", []);

sortApp.controller('sortCtrl', ['$scope',
	function($scope) {
		// mock data 
		$scope.countries = [
		  {
			"CountryName": "Brazil",
			"CapitalName": "Brasilia",
			"CapitalLatitude": "-15.78333333",
			"CapitalLongitude": "-47.916667",
			"CountryCode": "BR",
			"ContinentName": "South;America",
			"TimeZone": "UTC-3",
			"Temperature": "21",
			"Pressure": "457",
			"Conditions": "Sunny",
			"Humidity": "12"
		  },
		  {
			"CountryName": "Colombia",
			"CapitalName": "Bogota",
			"CapitalLatitude": "4.6",
			"CapitalLongitude": "-74.083333",
			"CountryCode": "CO",
			"ContinentName": "South;America",
			"TimeZone": "UTC-5",
			"Temperature": "12",
			"Pressure": "1866",
			"Conditions": "Windy",
			"Humidity": "20"
		  },
		  {
			"CountryName": "Egypt",
			"CapitalName": "Cairo",
			"CapitalLatitude": "30.05",
			"CapitalLongitude": "31.25",
			"CountryCode": "EG",
			"ContinentName": "Africa",
			"TimeZone": "UTC+2",
			"Temperature": "14",
			"Pressure": "1025",
			"Conditions": "Sunny",
			"Humidity": "12"
		  },
		  {
			"CountryName": "France",
			"CapitalName": "Paris",
			"CapitalLatitude": "48.86666667",
			"CapitalLongitude": "2.333333",
			"CountryCode": "FR",
			"ContinentName": "Europe",
			"TimeZone": "UTC+1",
			"Temperature": "11",
			"Pressure": "1123",
			"Conditions": "Cloudy",
			"Humidity": "25"
		  },
		  {
			"CountryName": "Iraq",
			"CapitalName": "Baghdad",
			"CapitalLatitude": "33.33333333",
			"CapitalLongitude": "44.4",
			"CountryCode": "IQ",
			"ContinentName": "Asia",
			"TimeZone": "UTC+3",
			"Temperature": "13",
			"Pressure": "678",
			"Conditions": "Cloudy",
			"Humidity": "45"
		  },
		  {
			"CountryName": "South;Korea",
			"CapitalName": "Seoul",
			"CapitalLatitude": "37.55",
			"CapitalLongitude": "126.983333",
			"CountryCode": "KR",
			"ContinentName": "Asia",
			"TimeZone": "UTC+9",
			"Temperature": "12",
			"Pressure": "500",
			"Conditions": "Windy",
			"Humidity": "40"
		  },
		  {
			"CountryName": "Kosovo",
			"CapitalName": "Pristina",
			"CapitalLatitude": "42.66666667",
			"CapitalLongitude": "21.166667",
			"CountryCode": "KO",
			"ContinentName": "Europe",
			"TimeZone": "UTC+1",
			"Temperature": "2",
			"Pressure": "400",
			"Conditions": "Snowy",
			"Humidity": "35"
		  },
		  {
			"CountryName": "Mexico",
			"CapitalName": "Mexico;City",
			"CapitalLatitude": "19.43333333",
			"CapitalLongitude": "-99.133333",
			"CountryCode": "MX",
			"ContinentName": "Central;America",
			"TimeZone": "UTC-6",
			"Temperature": "16",
			"Pressure": "1058",
			"Conditions": "Sunny",
			"Humidity": "13"
		  },
		  {
			"CountryName": "Nepal",
			"CapitalName": "Kathmandu",
			"CapitalLatitude": "27.71666667",
			"CapitalLongitude": "85.316667",
			"CountryCode": "NP",
			"ContinentName": "Asia",
			"TimeZone": "UTC+5.75",
			"Temperature": "13",
			"Pressure": "1168",
			"Conditions": "Sunny",
			"Humidity": "19"
		  },
		  {
			"CountryName": "Portugal",
			"CapitalName": "Lisbon",
			"CapitalLatitude": "38.71666667",
			"CapitalLongitude": "-9.133333",
			"CountryCode": "PT",
			"ContinentName": "Europe",
			"TimeZone": "UTC+0",
			"Temperature": "13",
			"Pressure": "1895",
			"Conditions": "Sunny",
			"Humidity": "17"
		  },
		  {
			"CountryName": "United;States",
			"CapitalName": "Washington;DC",
			"CapitalLatitude": "38.883333",
			"CapitalLongitude": "-77",
			"CountryCode": "US",
			"ContinentName": "Central;America",
			"TimeZone": "UTC-5",
			"Temperature": "10",
			"Pressure": "1356",
			"Conditions": "Cloudy",
			"Humidity": "55"
		  },
		  {
			"CountryName": "Uruguay",
			"CapitalName": "Montevideo",
			"CapitalLatitude": "-34.85",
			"CapitalLongitude": "-56.166667",
			"CountryCode": "UY",
			"ContinentName": "South;America",
			"TimeZone": "UTC-3",
			"Temperature": "12",
			"Pressure": "887",
			"Conditions": "Partly;cloudy",
			"Humidity": "20"
		  },
		  {
			"CountryName": "India",
			"CapitalName": "Delhi",
			"CapitalLatitude": "28.7041",
			"CapitalLongitude": "77.1025",
			"CountryCode": "IN",
			"ContinentName": "Asia",
			"TimeZone": "UTC+5.5",
			"Temperature": "14",
			"Pressure": "996",
			"Conditions": "Sunny",
			"Humidity": "5"
		  },
		  {
			"CountryName": "Australia",
			"CapitalName": "Canberra",
			"CapitalLatitude": "-35.2809",
			"CapitalLongitude": "149.13",
			"CountryCode": "AU",
			"ContinentName": "Australia",
			"TimeZone": "UTC+11",
			"Temperature": "29",
			"Pressure": "1142",
			"Conditions": "Sunny",
			"Humidity": "5"
		  },
		  {
			"CountryName": "New;zealand",
			"CapitalName": "Wellington",
			"CapitalLatitude": "-41.2865",
			"CapitalLongitude": "174.7762",
			"CountryCode": "NZ",
			"ContinentName": "New;zealand",
			"TimeZone": "UTC+13",
			"Temperature": "15",
			"Pressure": "1000",
			"Conditions": "Windy",
			"Humidity": "10"
		  },
		  {
			"CountryName": "Russia",
			"CapitalName": "Moscow",
			"CapitalLatitude": "55.7558",
			"CapitalLongitude": "37.6173",
			"CountryCode": "RU",
			"ContinentName": "Russia",
			"TimeZone": "UTC+3",
			"Temperature": "-2",
			"Pressure": "190",
			"Conditions": "Snowy",
			"Humidity": "20"
		  },
		  {
			"CountryName": "Canada",
			"CapitalName": "Ottawa",
			"CapitalLatitude": "45.4215",
			"CapitalLongitude": "-75.6972",
			"CountryCode": "CA",
			"ContinentName": "North;America",
			"TimeZone": "UTC-5",
			"Temperature": "5",
			"Pressure": "1234",
			"Conditions": "Windy",
			"Humidity": "15"
		  },
		  {
			"CountryName": "Singapore",
			"CapitalName": "Singapore",
			"CapitalLatitude": "1.3521",
			"CapitalLongitude": "103.8198",
			"CountryCode": "SG",
			"ContinentName": "Asia",
			"TimeZone": "UTC+8",
			"Temperature": "30",
			"Pressure": "654",
			"Conditions": "Sunny",
			"Humidity": "5"
		  }
		];
		
		
		$scope.sortType     = 'CountryName'; // set the default sort type
		$scope.sortReverse  = false;  // set the default sort order
		$scope.searchCountry   = '';     // set the default search/filter term
	}
]);


sortApp.filter('convertToLocal', function () {
    return function (input, states) {
        return utcToLocal(input);
    };
})

// bootstrap multiple ng-apps in single page angularjs
angular.bootstrap(document.getElementById("countryTable"), ['sortApp']);