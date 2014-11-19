function buildParams () {
	var params = {};

	params.colour =  [	"#88be3d", /* Higher Ed */
						"#01a4c6", /* Hosp */
						"#e9bb09", /* NP res inst */
						"#ab2715"  /* Other */
					];

	params.uiColour = {
		veryLightGrey: "#ddd",
		lightGrey: "#999",
		grey: "#666",
		darkGrey: "#333"		
	};

	params.key = {
		keyRange: [1000000, 100000000, 500000000],
		verticalShift: [20, 36, 60],
		horizontalShift: 25,
		keyHead: "TOTAL, NIH FUNDING FOR 2013, US$ MILLION",
		xAxisLabel: "NEGOTIATED RATE, FROM INSTITUTIONS (%)",
		xAxisShort: "NEGOTIATED RATE (%)**",
		xAxisFootnote: "**FROM INSTITUTIONS",
		yAxisLabel: "CALCULATED RATE, FROM NIM RePORTER DATABASE (%)",
		yAxisShort: "CALCULATED RATE (%)*",
		yAxisFootnote: "*FROM NIM RePORTER DATABASE"
	};

	/*	Margin, Width and height */
	params.margin = {top: 20, right: 20, mid: 30, bottom: 50, left: 50};
	params.brushThickness = 30;
	params.handleWidth = 10;
	params.miniMapMargin = 10;
	params.miniMapThickness = params.margin.left + params.brushThickness - params.miniMapMargin;
	params.width = jQuery('.section').width()  - params.margin.left - params.brushThickness - params.margin.mid - params.margin.right;
	params.height = jQuery('.section').width() - params.margin.top - params.margin.mid - params.brushThickness - params.margin.bottom;

	params.duration = 450;
	
	params.startExtent = [25,75];
	params.fullExtent = [0,105];
	params.fullExtentInvert = [105,0];

	params.format = d3.format("0,000");

	return params;
}
