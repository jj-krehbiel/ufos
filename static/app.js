// Assign the data from `data.js` to a descriptive variable
var ufo_data = data;

// Select the forms
var dateForm = d3.select("#datetime")
var cityForm = d3.select("#city")
var stateForm = d3.select("#state")
var countryForm = d3.select("#country")
var shapeForm = d3.select("shape")

// Select the button
var button = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

var matchcount = 0

// Create event handlers
button.on("click", runEnter);

// Fill table with all the data
var filteredData = ufo_data;
filteredData.forEach(function(ufoSighting) {
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    var filteredData = ufo_data;
    var matchcount = 0;
    console.log(matchcount);
    // Get the value properties of the input elements
    var inputValue1 = dateForm.property("value");
    inputValue1 = inputValue1.toLowerCase();
    console.log("dateForm", inputValue1);

    var inputValue2 = cityForm.property("value");
    inputValue2 = inputValue2.toLowerCase();
    console.log(inputValue2);
    
    var inputValue3 = stateForm.property("value");
    inputValue3 = inputValue3.toLowerCase();
    console.log(inputValue3);

    var countryMenu = d3.selectAll("#country").node();
    var countryMenuID = countryMenu.id;
    var inputValue4 = countryMenu.value;
    console.log(inputValue4);
    console.log(countryMenuID);

    var shapeMenu = d3.selectAll("#shape").node();
    var shapeMenuID = shapeMenu.id;
    var inputValue5 = shapeMenu.value;
    console.log(inputValue5);
    console.log(shapeMenuID);

    // var filteredData = ufo_data
    if (inputValue1) {
        filteredData = filteredData.filter(sightings => sightings.datetime === inputValue1.trim())
    }

    if (inputValue2) {
        filteredData = filteredData.filter(sightings => sightings.city === inputValue2.trim())
    }

    if (inputValue3) {
        filteredData = filteredData.filter(sightings => sightings.state === inputValue3.trim())
    }

    if (inputValue4) {
        filteredData = filteredData.filter(sightings => sightings.country === inputValue4.trim())
    }

    if (inputValue5) {
        filteredData = filteredData.filter(sightings => sightings.shape === inputValue5.trim())
    }
    

    tbody.html("");
    filteredData.forEach(function(ufoSighting) {
        var row = tbody.append("tr");
        matchcount += 1;
        console.log(matchcount);
        
        Object.entries(ufoSighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
            });
        });
        if (matchcount === 0) {
            window.alert("There's no matching data :(")
        }
    }
