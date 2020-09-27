// Bring in JSON file and console log it
d3.json("samples.json").then(function (data) {
  //console.log(data);

  // Pull out samples array
  var samples = data[0].samples;
  console.log(samples);
  //console.log(samples[0].id);

  // Array to hold sample ID's
  var dropdownId = [];

  for (var i = 0; i < samples.length; i++) {
    dropdownId.push(samples[i].id);
  }
  console.log(dropdownId);
});
