// Bring in JSON file and console log it
d3.json("samples.json").then(function (data) {
  //console.log(data);

  // Pull out samples array
  var samples = data[0].samples;
  console.log(samples);
  //console.log(samples[0].otu_ids);

  // Array to hold sample ID's
  var dropdownId = [];
  var select = document.getElementById("selDataset");

  // This for loop pushes all the sample id's into the dropdownId array
  for (var i = 0; i < samples.length; i++) {
    dropdownId.push(samples[i].id);
  }

  // loop the array and then add the array values to the html file element
  for (id in dropdownId) {
    select.add(new Option(dropdownId[id]));
  }

  //Clear node out so it doesnt set value to first item in array
  d3.select("#selDataset").node().value = "";

  // Set dropdown on document to a variable
  var dropdown = d3.select("#selDataset");

  var inputValue = dropdown;

  // Create function for when an ID is selected
  function handleDrop() {
    console.log("You're in the function!");
    console.log(inputValue);
  }
  // Create event handler for dropdown selection
  dropdown.on("change", handleDrop);
  //var stock = d3.select("#stockInput").node().value;
  //console.log(stock)
  //   console.log("You're in the function!");
  // }
  // //console.log(samples[0].otu_ids
});
