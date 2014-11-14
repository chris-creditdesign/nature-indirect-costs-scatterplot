function buildParams () {
	var params = {};

	params.colour =  [	"#88be3d", /* Higher Ed */
						"#01a4c6", /* Hosp */
						"#e9bb09", /* NP res inst */
						"#ab2715"  /* Other */
					];

	/*	Margin, Width and height */
	params.margin = {top: 20, right: 20, mid: 30, bottom: 50, left: 50};
	params.brushThickness = 30;
	params.width = jQuery('.section').width()  - params.margin.left - params.brushThickness - params.margin.mid - params.margin.right;
	params.height = jQuery('.section').width() - params.margin.top - params.margin.mid - params.brushThickness - params.margin.bottom;
	params.startExtent = [25,75];
	params.fullExtent = [0,105];
	params.fullExtentInvert = [105,0];

	return params;
}
