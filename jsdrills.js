function wisePerson(wiseType, whatToSay) {
  return 'A wise ' + wiseType + ' once said: "' + whatToSay + '".';
}

function shouter(whatToShout) {
  return whatToShout.toUpperCase() + '!!!';
}

function textNormalizer(text) {
  return text.toLowerCase().trim()
}

function computeArea(width, height) {
	return (width * height)
}

function celsToFahr(celsTemp) {
	return (celsTemp * 1.8 + 32)
}

function fahrToCels(fahrTemp) {
	return ((fahrTemp - 32) / 1.8)
}

function isDivisible(divisee, divisor) {
	return divisee % divisor === 0;
}
function sanityCheck() { 
	if (true === true) { 
		console.log("true is still true. that's reasurring");
	}
}

function doTrafficLights() {
  var activeLight = getActiveLight();
  if (activeLight === "red") {
    turnRed();
  }
  if (activeLight === "yellow") {
    turnYellow();
  }
  if (activeLight === "green") {
    turnGreen();
  }
}


/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(function() {
  handleClicks();
})

function main() {
  try {
    doAllTheThings();
  }
  catch(e) {
    console.error(e);
    reportError(e);
  }
}

function doAllTheThings() {
  throw {
    message: "Everything's ruined",
    name: "FatalException",
    toString: function(){return this.name + ": " + this.message;} 
  }
}

function reportError(e) {
  $('.js-error-report').text("Uh oh, something went wrong! Here's what we know: " + e.message);
}



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


$(main);

