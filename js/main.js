/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var kvalitejson = [
	{
	    "gender":  "Flicka",
	    "year":  [
	        ["18 / 19"]
	    ],
	    "radie":  4.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s":  11.0,
	    "stanine_h":  2.0,
	    "stanine_f":  1.0,
	    "cx_h":  10.0,
	    "cx_f":  1.0,
	    "stanine_s":  2.0,
	    "klass":  [
	        ["8C"]
	    ],
	    "stavning":  11.0,
	    "läsh": 10.0,
	    "nyanländ": "ja",
	    "läsf": 1.0
	}, {
	    "gender": "Pojke",
	    "year": [
	        ["18 / 19"]
	    ],
	    "radie": 5.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s":"",
	    "stanine_h":"",
	    "stanine_f":"",
	    "cx_h":"",
	    "cx_f":"",
	    "stanine_s":"",
	    "klass": [
	        ["7 C"]
	    ],
	    "stavning":"",
	    "läsh":"",
	    "nyanländ": "nej",
	    "läsf": "",
	}, {
	    "gender": "Flicka",
	    "year": [
	        ["18 / 19"]
	    ],
	    "radie": 5.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s": 21.0,
	    "stanine_h": 5.0,
	    "stanine_f": 6.0,
	    "cx_h": 18.0,
	    "cx_f": 14.0,
	    "stanine_s": 4.0,
	    "klass": [
	        ["7 C"]
	    ],
	    "stavning": 21.0,
	    "läsh": 18.0,
	    "nyanländ": "nej",
	    "läsf": 14.0
	}, {
	    "gender": "Flicka",
	    "year": [
	        ["18 / 19"]
	    ],
	    "radie": 5.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s": 29.0,
	    "stanine_h": 7.0,
	    "stanine_f": 6.0,
	    "cx_h": 27.0,
	    "cx_f": 14.0,
	    "stanine_s": 7.0,
	    "klass": [
	        ["7 C"]
	    ],
	    "stavning": 29.0,
	    "läsh": 27.0,
	    "nyanländ": "nej",
	    "läsf": 14.0
	}, {
	    "gender": "Flicka",
	    "year": [
	        ["18 / 19"]
	    ],
	    "radie": 5.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s": 23.0,
	    "stanine_h": 6.0,
	    "stanine_f": 5.0,
	    "cx_h": 23.0,
	    "cx_f": 13.0,
	    "stanine_s": 5.0,
	    "klass": [
	        ["7 C"]
	    ],
	    "stavning": 23.0,
	    "läsh": 23.0,
	    "nyanländ": "nej",
	    "läsf": 13.0
	}, {
	    "gender": "Pojke",
	    "year": [
	        ["18 / 19"]
	    ],
	    "radie": 5.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s":"",
	    "stanine_h":"",
	    "stanine_f":"",
	    "cx_h":"",
	    "cx_f":"",
	    "stanine_s":"",
	    "klass": [
	        ["7 C"]
	    ],
	    "stavning":"",
	    "läsh":"",
	    "nyanländ": "nej",
	    "läsf": "",
	}, {
	    "gender": "Pojke",
	    "year": [
	        ["18 / 19"]
	    ],
	    "radie": 5.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s": 17.0,
	    "stanine_h": 5.0,
	    "stanine_f": 4.0,
	    "cx_h": 18.0,
	    "cx_f": 11.0,
	    "stanine_s": 3.0,
	    "klass": [
	        ["7 C"]
	    ],
	    "stavning": 17.0,
	    "läsh": 18.0,
	    "nyanländ": "nej",
	    "läsf": 11.0
	}, {
	    "gender": "Pojke",
	    "year": [
	        ["18 / 19"]
	    ],
	    "radie": 5.0,
	    "termin": [
	        ["HT"]
	    ],
	    "cx_s":"",
	    "stanine_h":"",
	    "stanine_f": 5.0,
	    "cx_h":"",
	    "cx_f": 12.0,
	    "stanine_s":"",
	    "klass": [
	        ["7 C"]
	    ],
	    "stavning":"",
	    "läsh":"",
	    "nyanländ": "nej",
	    "läsf": 12.0
	}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 4.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 8.0,
    "stanine_h": 2.0,
    "stanine_f": 2.0,
    "cx_h": 11.0,
    "cx_f": 5.0,
    "stanine_s": 1.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 8.0,
    "läsh": 11.0,
    "nyanländ": "ja",
    "läsf": 5.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 4.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 2.0,
    "stanine_h": 2.0,
    "stanine_f": 1.0,
    "cx_h": 8.0,
    "cx_f": 3.0,
    "stanine_s": 1.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 2.0,
    "läsh": 8.0,
    "nyanländ": "ja",
    "läsf": 3.0
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 29.0,
    "stanine_h": 6.0,
    "stanine_f": 7.0,
    "cx_h": 24.0,
    "cx_f": 16.0,
    "stanine_s": 7.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 29.0,
    "läsh": 24.0,
    "nyanländ": "nej",
    "läsf": 16.0
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 33.0,
    "stanine_h": 6.0,
    "stanine_f": 4.0,
    "cx_h": 21.0,
    "cx_f": 10.0,
    "stanine_s": 8.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 33.0,
    "läsh": 21.0,
    "nyanländ": "nej",
    "läsf": 10.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 4.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 27.0,
    "stanine_h": 2.0,
    "stanine_f": 1.0,
    "cx_h": 9.0,
    "cx_f": 4.0,
    "stanine_s": 6.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 27.0,
    "läsh": 9.0,
    "nyanländ": "ja",
    "läsf": 4.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 22.0,
    "stanine_h": 3.0,
    "stanine_f": 1.0,
    "cx_h": 13.0,
    "cx_f": 4.0,
    "stanine_s": 5.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 22.0,
    "läsh": 13.0,
    "nyanländ": "nej",
    "läsf": 4.0
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 34.0,
    "stanine_h": 7.0,
    "stanine_f": 5.0,
    "cx_h": 25.0,
    "cx_f": 13.0,
    "stanine_s": 9.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 34.0,
    "läsh": 25.0,
    "nyanländ": "nej",
    "läsf": 13.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 4.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 8.0,
    "stanine_h": 3.0,
    "stanine_f": 2.0,
    "cx_h": 12.0,
    "cx_f": 5.0,
    "stanine_s": 1.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 8.0,
    "läsh": 12.0,
    "nyanländ": "ja",
    "läsf": 5.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 26.0,
    "stanine_h":"",
    "stanine_f": 5.0,
    "cx_h":"",
    "cx_f": 13.0,
    "stanine_s": 6.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 26.0,
    "läsh":"",
    "nyanländ": "nej",
    "läsf": 13.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 4.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 0.0,
    "stanine_h": 1.0,
    "stanine_f": 2.0,
    "cx_h": 6.0,
    "cx_f": 5.0,
    "stanine_s": 1.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 0.0,
    "läsh": 6.0,
    "nyanländ": "ja",
    "läsf": 5.0
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 9.0,
    "stanine_h": 3.0,
    "stanine_f": 2.0,
    "cx_h": 12.0,
    "cx_f": 7.0,
    "stanine_s": 2.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 9.0,
    "läsh": 12.0,
    "nyanländ": "nej",
    "läsf": 7.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 20.0,
    "stanine_h":"",
    "stanine_f":"",
    "cx_h":"",
    "cx_f":"",
    "stanine_s": 4.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 20.0,
    "läsh":"",
    "nyanländ": "nej",
    "läsf": "",
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 29.0,
    "stanine_h": 3.0,
    "stanine_f": 4.0,
    "cx_h": 14.0,
    "cx_f": 10.0,
    "stanine_s": 7.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 29.0,
    "läsh": 14.0,
    "nyanländ": "nej",
    "läsf": 10.0
}, {
    "gender": "Pojke",
    "year": [
        ["18 / 19"]
    ],
    "radie": 4.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 10.0,
    "stanine_h": 2.0,
    "stanine_f": 2.0,
    "cx_h": 9.0,
    "cx_f": 6.0,
    "stanine_s": 2.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 10.0,
    "läsh": 9.0,
    "nyanländ": "ja",
    "läsf": 6.0
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 27.0,
    "stanine_h": 5.0,
    "stanine_f": 5.0,
    "cx_h": 20.0,
    "cx_f": 13.0,
    "stanine_s": 6.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 27.0,
    "läsh": 20.0,
    "nyanländ": "nej",
    "läsf": 13.0
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 31.0,
    "stanine_h": 6.0,
    "stanine_f": 8.0,
    "cx_h": 21.0,
    "cx_f": 18.0,
    "stanine_s": 7.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 31.0,
    "läsh": 21.0,
    "nyanländ": "nej",
    "läsf": 18.0
}, {
    "gender": "Flicka",
    "year": [
        ["18 / 19"]
    ],
    "radie": 5.0,
    "termin": [
        ["HT"]
    ],
    "cx_s": 23.0,
    "stanine_h": 6.0,
    "stanine_f": 7.0,
    "cx_h": 21.0,
    "cx_f": 16.0,
    "stanine_s": 5.0,
    "klass": [
        ["7 C"]
    ],
    "stavning": 23.0,
    "läsh": 21.0,
    "nyanländ": "nej",
    "läsf": 16.0
}];

var headtitle = document.getElementById('headtitle');
var headtitletext = "";
if(kvalitejson.length < 1) {
   headtitletext = "Det finns ingen information inlagd i tabellen";
} else {
   headtitletext = "Kvalitétsäkring [svenska]; resultat för klass " + kvalitejson[0].klass +", " + kvalitejson[0].year +", "+kvalitejson[0].termin;
}
headtitle.innerHTML = headtitletext;

var test3 = "Läshastighet";
if(kvalitejson.length > 0) {
    if(kvalitejson[0].klass == "8A" || kvalitejson[0].klass == "8B" || kvalitejson[0].klass == "8C") {
        test3 = "Ordförståelse";
    }
}


kvalitejson = kvalitejson.sort((a, b) => { return a.stavning - b.stavning; });
kvalitejson = kvalitejson.filter((a) => { return (a.stavning !== "" && a.stanine_s !== "") ||
 													(a["läsf"] !== "" && a.stanine_f !== "") ||
													(a["läsh"] !== "" && a.stanine_h !== "")});

var modify;
for(var i = 0; i < kvalitejson.length; i++) {
	for(var j = i+1; j < kvalitejson.length; j++) {
		// STAVNING
		modify = 0.5;

		// Tar fram heltalet och decimalen var för sig för nuvarande tal
		var current = parseInt(Math.trunc(parseFloat(kvalitejson[i].cx_s)));
		var currentdec = parseFloat(kvalitejson[i].cx_s) % 1;

		// Efterföljande tal
		var next = parseInt(kvalitejson[j].cx_s);

		modify = modify + currentdec;
		if(current == next) {

			kvalitejson[j].cx_s = parseInt(kvalitejson[j].cx_s) + modify;
		}

		// LÄSFÖRSTÅELSE
		modify = 0.5;
		// Tar fram heltalet och decimalen var för sig för nuvarande tal
		var currentlas = parseInt(Math.trunc(parseFloat(kvalitejson[i]["cx_f"])));
		var currentlasdec = parseFloat(kvalitejson[i]["cx_f"]) % 1;

		// Efterföljande tal
		var nextlas = parseInt(kvalitejson[j]["cx_f"]);

		modify = modify + currentlasdec;
		if(currentlas == nextlas) {

			kvalitejson[j]["cx_f"] = parseInt(kvalitejson[j]["cx_f"]) + modify;
		}

		// LÄSHASTIGHET
		modify = 0.5;
		// Tar fram heltalet och decimalen var för sig för nuvarande tal
		var currentlas = parseInt(Math.trunc(parseFloat(kvalitejson[i]["cx_h"])));
		var currentlasdec = parseFloat(kvalitejson[i]["cx_h"]) % 1;

		// Efterföljande tal
		var nextlas = parseInt(kvalitejson[j]["cx_h"]);

		modify = modify + currentlasdec;
		if(currentlas == nextlas) {

			kvalitejson[j]["cx_h"] = parseInt(kvalitejson[j]["cx_h"]) + modify;
		}
	}
}


/******************************
*	DIMENSIONS AND MARGINS	  *
******************************/
const widthinput = 450;
const heightinput = 400;

// var simulation;
var margin = {
		top: 10,
		right: 75,
		bottom: 150,
		left: 50
	};
// var repelForce = d3.forceManyBody().strength(-50);
// var repelForce = d3.forceManyBody().strength(0).distanceMax(1).distanceMin(1);
var width = widthinput - margin.left - margin.right,
	height = heightinput - margin.top - margin.bottom;

// STAVNING
var g = d3.select("#chart-area-stavning")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// LÄSFÖRSTÅELSE
var glasf = d3.select("#chart-area-lasf")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// LÄSHASTIGHET
var glash = d3.select("#chart-area-lash")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// SUMMA GENDER STAVNING
var gsumgender = d3.select("#chart-area-sumstavninggender")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// SUMMA GENDER LÄSFÖRSTÅELSE
var gsumgenderlasf = d3.select("#chart-area-sumlasfgender")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// SUMMA GENDER LÄSHASTIGHET
var gsumgenderlash = d3.select("#chart-area-sumlashgender")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// SUMMA NYANLÄNDA STAVNING
var gsumarrival = d3.select("#chart-area-sumstavningarrival")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// SUMMA NYANLÄNDA LÄSFÖRSTÅELSE
var gsumarrivallasf = d3.select("#chart-area-sumlasfarrival")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// SUMMA NYANLÄNDA LÄSHASTIGHET
var gsumarrivallash = d3.select("#chart-area-sumlasharrival")
		.append("svg")
			.attr("width", width + margin.left +  margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

// var flag = true;
var t = d3.transition().duration(750);


// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
/******************************
*			X-AXIS			  *
******************************/
// x-scale
var x = d3.scaleLinear()
			.range([0, width]);

var xScaleSumGender = d3.scaleBand()
							.padding(0.4)
    						.range([0, width]);

var xScaleSumArrival = d3.scaleBand()
							.padding(0.4)
    						.range([0, width]);

// x-axis stavning
var xAxisGroupStavning = g.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis läsförståelse
var xAxisGroupLasf = glasf.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis läshastighet
var xAxisGroupLash = glash.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis Summa gender
var xAxisGroupSumGender = gsumgender.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis Summa gender läsförståelse
var xAxisGroupSumGenderLasf = gsumgenderlasf.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis Summa gender läshastighet
var xAxisGroupSumGenderLash = gsumgenderlash.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis Summa arrival stavning
var xAxisGroupSumArrival = gsumarrival.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis Summa arrival läsförståelse
var xAxisGroupSumArrivalLasf = gsumarrivallasf.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-axis Summa arrival läshastighet
var xAxisGroupSumArrivalLash = gsumarrivallash.append("g")
		.attr("transform", "translate(0, " + height + ")");

// x-label Stavning
g.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Stavning");

// x-label Läsförståelse
glasf.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Läsförståelse");

// x-label Läsförståelse
glash.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text(test3);

// x-label summa gender stavning
gsumgender.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde stavning");

// x-label summa gender läsförståelse
gsumgenderlasf.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde läsförståelse");

// x-label summa gender läshastighet
gsumgenderlash.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde " + test3.toLowerCase());

// x-label summa gender stavning
gsumarrival.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde stavning");

// x-label summa gender läsförståelse
gsumarrivallasf.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde läsförståelse");

// x-label summa gender läshastighet
gsumarrivallash.append("text")
	.attr("x", width/2)
	.attr("y", height + 50)
	.attr("text-anchor", "middle")
	.text("Medelvärde " + test3.toLowerCase());

/******************************
*			Y-AXIS			  *
******************************/
// y-scale
var y = d3.scaleLinear()
			.range([height, 0]);

// y-axis
var yAxisGroup = g.append("g");

// y-axis LÄSFÖRSTÅELSE
var yAxisGroupLasf = glasf.append("g");

// y-axis LÄSHASTIGHET
var yAxisGroupLash = glash.append("g");

// y-axis SUMMA GENDER
var yAxisGroupSumGender = gsumgender.append("g");

// y-axis SUMMA GENDER LÄSFÖRSTÅELSE
var yAxisGroupSumGenderLasf = gsumgenderlasf.append("g");

// y-axis SUMMA GENDER LÄSHASTIGHET
var yAxisGroupSumGenderLash = gsumgenderlash.append("g");

// y-axis SUMMA ARRIVAL STAVNING
var yAxisGroupSumArrival = gsumarrival.append("g");

// y-axis SUMMA ARRIVAL LÄSFÖRSTÅELSE
var yAxisGroupSumArrivalLasf = gsumarrivallasf.append("g");

// y-axis SUMMA ARRIVAL LÄSHASTIGHET
var yAxisGroupSumArrivalLash = gsumarrivallash.append("g");

// y-label
var yLabel = g.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label LÄSFÖRSTÅELSE
var yLabel = glasf.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label LÄSHASTIGHET
var yLabel = glash.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label SUMMA GENDER STAVNING
var yLabel = gsumgender.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label SUMMA GENDER LÄSFÖRSTÅELSE
var yLabel = gsumgenderlasf.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label SUMMA GENDER LÄSHASTIGHET
var yLabel = gsumgenderlash.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label SUMMA ARRIVAL STAVNING
var yLabel = gsumarrival.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label SUMMA ARRIVAL LÄSFÖRSTÅELSE
var yLabel = gsumarrivallasf.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

// y-label SUMMA ARRIVAL LÄSHASTIGHET
var yLabel = gsumarrivallash.append("text")
	.attr("x", - height/2)
	.attr("y", - 25)
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.text("Stanine");

/******************************
*			Z-AXIS			  *
******************************/
// var color = d3.scaleOrdinal(d3.schemeSet2);
// var color = d3.scaleOrdinal(d3.schemeAccent);
var color = d3.scaleOrdinal(["#83b179","#b58650","#5d849d","#876851"]);
/******************************
*			JSON			  *
******************************/

var data = getData(kvalitejson);
// "data/revenues.json"
function getData(data) {

	// VERKAR INTE BEHÖVA FÖRBEEREDA INDATA
	// data.forEach((d) => {
	// 	if(d.stavning !== "") {
	// 		d.stavning = +d.stavning
	// 	}
	// 	console.log("d.stavning > ", d.stavning);
	// });
	// data.forEach((d) => { d.stanine_s = +d.stanine_s });
	// data.forEach((d) => { d["läsf"] = +d["läsf"] });
	// data.forEach((d) => { d.stanine_f = +d.stanine_f });
	// data.forEach((d) => { d["läsh"] = +d["läsh"] });
	// data.forEach((d) => { d.stanine_h = +d.stanine_h });
	// console.log(data);

	// d3.interval(function(){
	// 	var newData = flag ? data : data.slice(1);
	// 	update(newData);
	// 	flag = !flag;
	// },1000);
	update(data);
	return data;
}
function update(data) {
	// yLabel.text(label);
	// var value = flag ? "revenue" : "profit";
	// var value = "stanine_s";

	// console.log("Average 'Flicka': """, average("Flicka", "stanine_h", data));
	// console.log("Average 'Pojke': """, average("Pojke", "stanine_s", data));
	// var averageFlickaStavning = average("Flicka", "stanine_s", data)
	// var averagePojkeStavning = average("Pojke", "stanine_s", data)

	var averageStavning = [
		{
			gender: "Flicka",
			value: average("gender", "Flicka", "stanine_s", data)
		},
		{
			gender: "Pojke",
			value: average("gender", "Pojke", "stanine_s", data)
		}
	];

	var averageLasf = [
		{
			gender: "Flicka",
			value: average("gender", "Flicka", "stanine_f", data)
		},
		{
			gender: "Pojke",
			value: average("gender", "Pojke", "stanine_f", data)
		}
	];

	var averageLash = [
		{
			gender: "Flicka",
			value: average("gender", "Flicka", "stanine_h", data)
		},
		{
			gender: "Pojke",
			value: average("gender", "Pojke", "stanine_h", data)
		}
	];

	var averageStavningArrival = [
		{
			arrival: "ja",
			value: average("nyanländ", "ja", "stanine_s", data)
		},
		{
			arrival: "nej",
			value: average("nyanländ", "nej", "stanine_s", data)
		}
	];

	var averageLasfArrival = [
		{
			arrival: "ja",
			value: average("nyanländ", "ja", "stanine_f", data)
		},
		{
			arrival: "nej",
			value: average("nyanländ", "nej", "stanine_f", data)
		}
	];

	var averageLashArrival = [
		{
			arrival: "ja",
			value: average("nyanländ", "ja", "stanine_h", data)
		},
		{
			arrival: "nej",
			value: average("nyanländ", "nej", "stanine_h", data)
		}
	];
	// Uppdatera domain
	x.domain([0, 36 ]);
	y.domain([ 0, 10]);

	xScaleSumGender.domain(["Pojke", "Flicka"]);
	xScaleSumArrival.domain(["Nyanlända", "Övriga"]);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(x);
	xAxisGroupStavning.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(x);
	xAxisGroupLasf.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(x);
	xAxisGroupLash.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleSumGender);
	xAxisGroupSumGender.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleSumGender);
	xAxisGroupSumGenderLasf.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleSumGender);
	xAxisGroupSumGenderLash.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleSumArrival);
	xAxisGroupSumArrival.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleSumArrival);
	xAxisGroupSumArrivalLasf.transition(t).call(xAxisCall);

	// Uppdatera x-axis beroende på nya skalan
	var xAxisCall = d3.axisBottom(xScaleSumArrival);
	xAxisGroupSumArrivalLash.transition(t).call(xAxisCall);

	// Uppdatera y-axis beroende på nya skalan
	var yAxisCall = d3.axisLeft(y);
	yAxisGroup.transition(t).call(yAxisCall);

	// Uppdatera y-axis beroende på nya skalan
	var yAxisCall = d3.axisLeft(y);
	yAxisGroupLasf.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(y);
	yAxisGroupLash.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(y);
	yAxisGroupSumGender.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(y);
	yAxisGroupSumGenderLasf.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(y);
	yAxisGroupSumGenderLash.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(y);
	yAxisGroupSumArrival.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(y);
	yAxisGroupSumArrivalLasf.transition(t).call(yAxisCall);

	var yAxisCall = d3.axisLeft(y);
	yAxisGroupSumArrivalLash.transition(t).call(yAxisCall);

	/************************************
	*		UPDATE PATTERN				*
	*	1. JOIN new data				*
	*	2. EXIT oboslete elements		*
	*	3. UPDATE existing elements		*
	*	4. ENTER new elements	  		*
	************************************/
	// JOIN new data with old elements
	// var node = g.selectAll('circle')
	// 				.data(data, function(d) {
	// 					return d.stavning;
	// 				});
	// force.start();

	// simulation = d3.forceSimulation(data)
	// 			.force("x", d3.forceX(10).strength(-10))
	// 		  	.force("collide", d3.forceCollide(4))
	// 			.stop();
	//
	// for (var i = 0; i < 50; ++i) simulation.tick();

	// STAVNING
	var node = g.selectAll("circle").data(data).enter()
				   .append('circle')
				   		.attr("class", (d) => {
							var cl = "node";
							if(d['nyanländ'] == "ja") {
								cl = "newanlandnode";
							}
							return cl;
						})
						.attr("cx", (d) => { return x(d.cx_s); })
						.attr("r", (d) => { return d.radie - 2.5; })
						.attr("fill", (d) => { return color(d.gender); })
						.attr("cy", (d) => { return y(d["stanine_s"]); })
						.style("display", (d) => { return d.stavning === "" ? "none" : ""})
						.on("mouseover", function(d) {
							tooltip.transition()
								.duration(100)
								.style("opacity", 0.9)
								.style("display", "block");
							tooltip.html(d.gender + " <br/> Nyanländ: " +d["nyanländ"] + "<br/> (" + d.stavning
								+ ", " + d["stanine_s"] + ")")
								.style("left", (d3.event.pageX + 10) + "px")
								.style("top", (d3.event.pageY - 28) + "px");
							})
						.on("mouseout", function(d) {
							tooltip.transition()
								.duration(500)
								.style("opacity", 0)
								.style("display", "none");
						});

	// LÄSFÖRSTÅESLE
	var nodelasf = glasf.selectAll("circle").data(data).enter()
				   .append('circle')
				   .attr("class", (d) => {
						   var cl = "node";
						   if(d['nyanländ'] == "ja") {
							   cl = "newanlandnode";
						   }
						   return cl;
					   	})
						.attr("cx", (d) => { return x(d["cx_f"]); })
						.attr("r", (d) => { return d.radie - 2.5; })
						.attr("fill", (d) => { return color(d.gender); })
						.attr("cy", (d) => { return y(d["stanine_f"]); })
						.style("display", (d) => { return d["läsf"] === "" ? "none" : ""})
						.on("mouseover", function(d) {
							tooltip.transition()
								.duration(200)
								.style("opacity", .9)
								.style("display", "block");
							tooltip.html(d.gender + " <br/> Nyanländ: " +d["nyanländ"] + "<br/> (" + d["läsf"]
								+ ", " + d["stanine_f"] + ")")
								.style("left", (d3.event.pageX + 10) + "px")
								.style("top", (d3.event.pageY - 28) + "px");
							})
						.on("mouseout", function(d) {
							tooltip.transition()
								.duration(500)
								.style("opacity", 0)
								.style("display", "none");
						});

	// LÄSHASTIGHET
	var nodelash = glash.selectAll("circle").data(data).enter()
				   .append('circle')
				   .attr("class", (d) => {
						  var cl = "node";
						  if(d['nyanländ'] == "ja") {
							  cl = "newanlandnode";
						  }
						  return cl;
					  	})
						.attr("cx", (d) => { return x(d["cx_h"]); })
						.attr("r", (d) => { return d.radie - 2.5; })
						.attr("fill", (d) => { return color(d.gender); })
						.attr("cy", (d) => { return y(d["stanine_h"]); })
						.style("display", (d) => { return d["läsh"] === "" ? "none" : ""})
						.on("mouseover", function(d) {
							tooltip.transition()
								.duration(200)
								.style("opacity", .9)
								.style("display", "block");
							tooltip.html(d.gender + " <br/> Nyanländ: " +d["nyanländ"] + "<br/> (" + d["läsh"]
								+ ", " + d["stanine_h"] + ")")
								.style("left", (d3.event.pageX + 10) + "px")
								.style("top", (d3.event.pageY - 28) + "px");
							})
						.on("mouseout", function(d) {
							tooltip.transition()
								.duration(500)
								.style("opacity", 0)
								.style("display", "none");
						});

	var barStavning = gsumgender.selectAll("rect").data(averageStavning).enter()
					.append("rect")
					.attr('x', (d) => xScaleSumGender(d.gender))
				    .attr('y', (d) => y(d.value))
				    .attr('height', (d) => height - y(d.value))
				    .attr('width', xScaleSumGender.bandwidth())
					.attr('fill', (d) => { return color(d.gender)})
					.text(function(d) { return d.value; });

	// text gender sum stavning
	gsumgender.selectAll(".text")
	  .data(averageStavning)
	  .enter()
	  .append("text")
	  .attr("class","text")
	  .attr("x", (function(d) { return xScaleSumGender(d.gender) + (xScaleSumGender.bandwidth() / 2)}  ))
	  .attr("y", function(d) { return y(d.value) - 5; })
	  .attr("text-anchor", "middle")
	  .text(function(d) { return d.value; });

	var barLasf = gsumgenderlasf.selectAll("rect").data(averageLasf).enter()
					.append("rect")
					.attr('x', (d) => xScaleSumGender(d.gender))
				    .attr('y', (d) => y(d.value))
				    .attr('height', (d) => height - y(d.value))
				    .attr('width', xScaleSumGender.bandwidth())
					.attr('fill', (d) => { return color(d.gender)});

	// text gender sum läsförståelse
	gsumgenderlasf.selectAll(".text")
	  .data(averageLasf)
	  .enter()
	  .append("text")
	  .attr("class","text")
	  .attr("x", (function(d) { return xScaleSumGender(d.gender) + (xScaleSumGender.bandwidth() / 2) }  ))
	  .attr("y", function(d) { return y(d.value) - 5; })
	  .attr("text-anchor", "middle")
	  .text(function(d) { return d.value; });

	var barLash = gsumgenderlash.selectAll("rect").data(averageLash).enter()
					.append("rect")
					.attr('x', (d) => xScaleSumGender(d.gender))
				    .attr('y', (d) => y(d.value))
				    .attr('height', (d) => height - y(d.value))
				    .attr('width', xScaleSumGender.bandwidth())
					.attr('fill', (d) => { return color(d.gender)});

	// text gender sum läshastighet
	gsumgenderlash.selectAll(".text")
	  .data(averageLash)
	  .enter()
	  .append("text")
	  .attr("class","text")
	  .attr("x", (function(d) { return xScaleSumGender(d.gender) + (xScaleSumGender.bandwidth() / 2) }  ))
	  .attr("y", function(d) { return y(d.value) - 5; })
	  .attr("text-anchor", "middle")
	  .text(function(d) { return d.value; });

	var barStavningArrival = gsumarrival.selectAll("rect").data(averageStavningArrival).enter()
		.append("rect")
		.attr('x', (d) => {
			 if(d.arrival == "ja") {
				  return xScaleSumArrival("Nyanlända");
			 } else {
				 return xScaleSumArrival("Övriga");
			 }
		 })
		.attr('y', (d) => y(d.value))
		.attr('height', (d) => height - y(d.value))
		.attr('width', xScaleSumArrival.bandwidth())
		.attr('fill', (d) => { return color(d.arrival)})
		.text(function(d) { return d.value; });

	  // text gender sum stavning
  	gsumarrival.selectAll(".text")
  	  .data(averageStavningArrival)
  	  .enter()
  	  .append("text")
  	  .attr("class","text")
	  .attr('x', (d) => {
		   if(d.arrival == "ja") {
				return xScaleSumArrival("Nyanlända") + (xScaleSumArrival.bandwidth() / 2);
		   } else {
			   return xScaleSumArrival("Övriga") + (xScaleSumArrival.bandwidth() / 2);
		   }
	   })
  	  .attr("y", function(d) { return y(d.value) - 5; })
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.value; });

	var barLasfArrival = gsumarrivallasf.selectAll("rect").data(averageLasfArrival).enter()
		.append("rect")
		.attr('x', (d) => {
			 if(d.arrival == "ja") {
				  return xScaleSumArrival("Nyanlända");
			 } else {
				 return xScaleSumArrival("Övriga");
			 }
		 })
		.attr('y', (d) => y(d.value))
		.attr('height', (d) => height - y(d.value))
		.attr('width', xScaleSumArrival.bandwidth())
		.attr('fill', (d) => { return color(d.arrival)})
		.text(function(d) { return d.value; });

	  // text gender sum stavning
  	gsumarrivallasf.selectAll(".text")
  	  .data(averageLasfArrival)
  	  .enter()
  	  .append("text")
  	  .attr("class","text")
	  .attr('x', (d) => {
		   if(d.arrival == "ja") {
				return xScaleSumArrival("Nyanlända") + (xScaleSumArrival.bandwidth() / 2);
		   } else {
			   return xScaleSumArrival("Övriga") + (xScaleSumArrival.bandwidth() / 2);
		   }
	   })
  	  .attr("y", function(d) { return y(d.value) - 5; })
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.value; });

	var barLasfArrivalLash = gsumarrivallash.selectAll("rect").data(averageLashArrival).enter()
		.append("rect")
		.attr('x', (d) => {
			 if(d.arrival == "ja") {
				  return xScaleSumArrival("Nyanlända");
			 } else {
				 return xScaleSumArrival("Övriga");
			 }
		 })
		.attr('y', (d) => y(d.value))
		.attr('height', (d) => height - y(d.value))
		.attr('width', xScaleSumArrival.bandwidth())
		.attr('fill', (d) => { return color(d.arrival)})
		.text(function(d) { return d.value; });

	  // text gender sum stavning
  	gsumarrivallash.selectAll(".text")
  	  .data(averageLashArrival)
  	  .enter()
  	  .append("text")
  	  .attr("class","text")
	  .attr('x', (d) => {
		   if(d.arrival == "ja") {
				return xScaleSumArrival("Nyanlända") + (xScaleSumArrival.bandwidth() / 2);
		   } else {
			   return xScaleSumArrival("Övriga") + (xScaleSumArrival.bandwidth() / 2);
		   }
	   })
  	  .attr("y", function(d) { return y(d.value) - 5; })
  	  .attr("text-anchor", "middle")
  	  .text(function(d) { return d.value; });


	// UPDATE STAVNING
	node.transition(t)
		.attr("cy", (d) => { return y(d["stanine_s"]); })
		.attr("cx", (d) => { return x(d.cx_s); })
		.attr("r", (d) => { return d.radie; })

	// UPDATE LÄSFÖRSTÅELSE
	nodelasf.transition(t)
		.attr("cy", (d) => { return y(d["stanine_f"]); })
		.attr("cx", (d) => { return x(d["cx_f"]); })
		.attr("r", (d) => { return d.radie; })

	// UPDATE LÄSHASTIGHET
	nodelash.transition(t)
		.attr("cy", (d) => { return y(d["stanine_h"]); })
		.attr("cx", (d) => { return x(d["cx_h"]); })
		.attr("r", (d) => { return d.radie; })

	// ENTER STAVNING
	node.enter()
		.append('circle')
			.attr("class", "node")
			.attr("stroke", "#474747")
			.attr("cx", (d) => { return x(d.cx_s); })
			.attr("r", (d) => { return d.radie - 1; })
			.attr("fill", (d) => { return color(d.gender); })
			.attr("cy", y(0))
			.transition(t)
				.attr("cy", (d) => { return y(d["stanine_s"]); })

	// ENTER LÄSFÖRSTÅELSE
	nodelasf.enter()
		.append('circle')
			.attr("class", "node")
			.attr("stroke", "#474747")
			.attr("cx", (d) => { return x(d["cx_f"]); })
			.attr("r", (d) => { return d.radie - 1; })
			.attr("fill", (d) => { return color(d.gender); })
			.attr("cy", y(0))
			.transition(t)
				.attr("cy", (d) => { return y(d["stanine_f"]); })

	// ENTER LÄSHASTIGHET
	nodelash.enter()
		.append('circle')
			.attr("class", "node")
			.attr("stroke", "#474747")
			.attr("cx", (d) => { return x(d["cx_h"]); })
			.attr("r", (d) => { return d.radie - 1; })
			.attr("fill", (d) => { return color(d.gender); })
			.attr("cy", y(0))
			.transition(t)
				.attr("cy", (d) => { return y(d["stanine_h"]); })

	console.log("color.domain: ", color.domain());
	console.log("color: ", color);
	var legendcolor = color.domain();

	// Lägger först till Nyanlända.
	// Tar därefter bort "ja", "nej" som tillhör stapeldiagrammen för nyanlända
	legendcolor.push("Nyanländ");
	legendcolor.splice(2,1);
	legendcolor.splice(2,1);
	console.log("legendcolor > ", legendcolor);

	console.log("legendcolor: ", legendcolor);
	// draw legend
	var legend = glash.selectAll(".legend")
	  .data(legendcolor)
	.enter().append("g")
	  .attr("class", "legend")
	  .attr("transform", function(d, i) { return "translate(0," + i * 30 + ")"; });

	// draw legend colored rectangles
	legend.append("circle")
	  .attr("cx", width + 25)
	  .attr("cy", 10)
	  .attr("r", 10)
	  .style("fill", (d) => {
		  var fillcolor = color(d);
		  if(d == "Nyanländ") {
			  fillcolor = color("Pojke");
		  }
		  return fillcolor;
	   })
	  .style("stroke", (d) => {
		  var strokecolor = "#2b2b2b";
		  if(d == "Nyanländ") {
			  strokecolor = "#692424";
		  }
		  return strokecolor;
	  })
	  .style("stroke-width", (d) => {
		  		var width = "1px";
				console.log("d ", d)
				if(d == "Nyanländ") {
					width ="3px";
				}
				return width;
		    }
	    )

	// draw legend text
	legend.append("text")
	  .attr("x", width + 10)
	  .attr("y", 9)
	  .attr("dy", ".35em")
	  .style("text-anchor", "end")
	  .text(function(d) { return d;})
}

function average(filter, value, field, data) {
	var sum = 0;
	var average = 0.0;
	var filteredData;
	var counter = 0;

	filteredData = data.filter((obj) => {
		return obj[filter] === value;
	});

	filteredData.forEach((obj) => {
		if(obj[field] !== "") {
			sum = sum + obj[field];
			counter++;
		}
	});

	average = round(sum/counter, 1);
	return average;
}

// Hjälpfunktion för att avrunda ett tal
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
