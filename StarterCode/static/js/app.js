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

  //console.log(dropdownId);

  // loop the array and then add the array values to the html file element
  for (id in dropdownId) {
    select.add(new Option(dropdownId[id]));
  }

  //Clear node out so it doesnt set value to first item in array
  d3.select("#selDataset").node().value = "";

  // Set dropdown on document to a variable
  var dropdown = d3.select("#selDataset");

  // Create function for when an ID is selected
  function handleDrop() {
    var inputValue = dropdown.property("value");
    console.log(inputValue);

    // Condition statment to find the index of the value that was selected. Samples and dropdownId arrays index match
    if (dropdownId.indexOf(inputValue) !== -1) {
      var idIndex = dropdownId.indexOf(inputValue);
      console.log("Value located!");
      console.log(idIndex);

      // The Indexof method returns the index of the value in the array. Use that value to find the OTUs for the selected value
      var labels = samples[idIndex].otu_ids;
      var values = samples[idIndex].sample_values;
      var hovertext = samples[idIndex].otu_labels;
      console.log();
      console.log(values);

      // Top 10 values (sample_values)
      var topValues = values.sort((a, b) => b - a).slice(0, 10);
      console.log(topValues);

      // Get "OTU ID" in front of each label
      var mappedLabels = labels.map((x) => "OTU ID" + " " + x);
      //console.log(mappedLabels);

      // *********** Create trace to set up bar graph ********** //
      var trace1 = {
        x: topValues,
        y: mappedLabels,
        type: "bar",
        orientation: "h",
        text: hovertext,
      };

      var data = [trace1];

      var layout = {
        title: "Top 10 OTUs",
      };

      Plotly.newPlot("bargraph", data, layout);

      // ************* Create trace to set up bubble graph *************//
      var trace2 = {
        x: labels,
        y: values,
        mode: "markers",
        marker: {
          color: [
            "rgb(93, 164, 214)",
            "rgb(255, 144, 14)",
            "rgb(44, 160, 101)",
            "rgb(255, 65, 54)",
            "rgb(93, 164, 214)",
            "rgb(255, 144, 14)",
            "rgb(44, 160, 101)",
            "rgb(255, 65, 54)",
            "rgb(44, 160, 101)",
            "rgb(255, 65, 54)",
          ],

          opacity: [2, 1.8, 1.6, 1.4, 1.2, 1, 0.8, 0.6, 0.4, 0.2],
          size: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        },
      };

      var data2 = [trace2];

      var layout2 = {
        title: "Top 10 OTUs Bubble Chart",
        showlegend: false,
        height: 600,
        width: 600,
      };

      Plotly.newPlot("bubblegraph", data2, layout2);
    } else {
      console.log("Value not found!");
    }
  }
  // Create event handler for dropdown selection
  dropdown.on("change", handleDrop);

  // //console.log(samples[0].otu_ids
});
