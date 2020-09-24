//Bring in JSON file and console log it
d3.json("samples.json").then(function (data) {
  console.log(data[0]);
});
