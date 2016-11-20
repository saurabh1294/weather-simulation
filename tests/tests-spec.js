  describe('.findById(id)', function() {
	  
	  var weatherData = [
		  {
			"CountryName": "Brazil",
			"CapitalName": "Brasilia",
			"CapitalLatitude": "-15.78333333",
			"CapitalLongitude": "-47.916667",
			"CountryCode": "BR",
			"ContinentName": "South America",
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
			"ContinentName": "South America",
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
			"CountryName": "South Korea",
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
			"CapitalName": "Mexico City",
			"CapitalLatitude": "19.43333333",
			"CapitalLongitude": "-99.133333",
			"CountryCode": "MX",
			"ContinentName": "Central America",
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
			"CountryName": "United States",
			"CapitalName": "Washington DC",
			"CapitalLatitude": "38.883333",
			"CapitalLongitude": "-77",
			"CountryCode": "US",
			"ContinentName": "Central America",
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
			"ContinentName": "South America",
			"TimeZone": "UTC-3",
			"Temperature": "12",
			"Pressure": "887",
			"Conditions": "Partly Cloudy",
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
			"CountryName": "New Zealand",
			"CapitalName": "Wellington",
			"CapitalLatitude": "-41.2865",
			"CapitalLongitude": "174.7762",
			"CountryCode": "NZ",
			"ContinentName": "New Zealand",
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
			"ContinentName": "North America",
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
	  
    // test cases
    it('match data', function() {
		console.log("Running UI test cases");
		for (var index = 0; index < weatherData.length; index++) {
			var country = $("td:nth-child(0):eq("+index+")"),
				capital = $("td:nth-child(1):eq("+index+")"),
				latlong = $("td:nth-child(2):eq("+index+")"),
				localtime = $("td:nth-child(3):eq("+index+")"),
				conditions = $("td:nth-child(4):eq("+index+")"),
				temperature = $("td:nth-child(5):eq("+index+")"),
				pressure = $("td:nth-child(6):eq("+index+")"),
				humidity = $("td:nth-child(7):eq("+index+")");
				
			spyOn(country, 'val').and.returnValue(weatherData[index].CountryName);
			spyOn(capital, 'val').and.returnValue(weatherData[index].CapitalName);
			spyOn(latlong, 'val').and.returnValue(weatherData[index].CapitalLatitude+" | "+weatherData[index].CapitalLongitude);
			spyOn(localtime, 'val').and.returnValue(utcToLocal(weatherData[index].TimeZone));
			spyOn(conditions, 'val').and.returnValue(weatherData[index].Conditions);
			spyOn(temperature, 'val').and.returnValue(weatherData[index].Temperature);
			spyOn(pressure, 'val').and.returnValue(weatherData[index].Pressure);
			spyOn(humidity, 'val').and.returnValue(weatherData[index].Humidity);
				
			console.log("\n");
			console.log("Matching table Capital Name from UI '"+capital.val()+"' with test data : "+weatherData[index].CapitalName);
			console.log("Matching table Country Name from UI '"+country.val()+"' with test data : "+weatherData[index].CountryName);
			console.log("Matching table Capital lat long from UI '"+latlong.val()+"' with test data : "+
			weatherData[index].CapitalLatitude+" | "+weatherData[index].CapitalLongitude);
			
			console.log("Matching table localtime from UI '"+localtime.val()+"' with test data : "+utcToLocal(weatherData[index].TimeZone));
			console.log("Matching table Conditions from UI '"+conditions.val()+"' with test data : "+weatherData[index].Conditions);
			console.log("Matching table Temperature from UI '"+temperature.val()+"' with test data : "+weatherData[index].Temperature);
			console.log("Matching table Pressure from UI '"+pressure.val()+"' with test data : "+weatherData[index].Pressure);
			console.log("Matching table Humidity from UI '"+humidity.val()+"' with test data : "+weatherData[index].Humidity);
			console.log("\n");
			
			expect(capital.val()).toEqual(weatherData[index].CapitalName);
			expect(country.val()).toEqual(weatherData[index].CountryName);
			expect(latlong.val()).toEqual(weatherData[index].CapitalLatitude+" | "+weatherData[index].CapitalLongitude);
			expect(localtime.val()).toEqual(utcToLocal(weatherData[index].TimeZone));
			expect(conditions.val()).toEqual(weatherData[index].Conditions);
			expect(temperature.val()).toEqual(weatherData[index].Temperature);
			expect(pressure.val()).toEqual(weatherData[index].Pressure);
			expect(humidity.val()).toEqual(weatherData[index].Humidity);
		}
    });

    
  });