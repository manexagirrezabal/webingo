

//https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getThreeRandomNumbers(min,max) {
  return getNRandomNumbers(min,max,3);
}

function getNRandomNumbers(min,max,howmany) {
  var result = [];
  while (result.length < howmany) {
    var candidate = getRndInteger(min,max);
    if (!result.includes(candidate)) {
      result.push(candidate)
    }
  }
  return result.sort();
}

function embed_lottery_image () {
  return '<img src="loteria.jpg" width="60" height="60"/>';
}

function generate_table() {
  var table = document.getElementById("bingotaula");
  table.innerHTML = "";

  var allnumbers = [];
  for (var colidx = 0 ; colidx < 9 ; colidx++) {
    var candidates = getThreeRandomNumbers(colidx*10,colidx*10+10);
    allnumbers.push(candidates);
  }
//  alert(allnumbers);

  var emptycells = [] ;
  emptycells[0] = getNRandomNumbers(0,9,4);
  emptycells[1] = getNRandomNumbers(0,9,4);
  emptycells[2] = getNRandomNumbers(0,9,4);
//  alert(emptycells[1]);  

  for (var rowidx = 0 ; rowidx < 3 ; rowidx++) {
    var row = document.createElement("tr");
    for (var colidx = 0 ; colidx < 9 ; colidx++) {
         var cell = document.createElement("td");
         var idx = colidx*3 + rowidx;
//         if (emptycells.includes(idx)) {
         if (emptycells[rowidx].includes(colidx)) {
	   cell.innerHTML = embed_lottery_image();
	 }
	 else {
           cell.innerHTML = allnumbers[colidx][rowidx];
         }
         row.append(cell);
    }
    table.append(row);
  }
}


//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var numbers = [];
for (var i =0; i< 90; i++) {
  numbers.push(i);
}


shuffle(numbers);


function generate_number() {
  var lekua = document.getElementById("zenbakilekua");

  var zenbakia = numbers.pop();

  lekua.innerHTML = zenbakia;

  var ateratakoak = document.getElementById("ateratakoak");

  ateratakoak.innerHTML = ateratakoak.innerHTML + " " + zenbakia.toString();
  
}
