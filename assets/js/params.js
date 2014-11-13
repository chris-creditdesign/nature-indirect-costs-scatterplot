function buildParams () {
	var params = {};

	params.colour =  [	"#e9bb09",
						"#01a4c6",
						"#88be3d",
						"#ab2715"
					];

	/*	Margin, Width and height */
	params.margin = {top: 20, right: 20, mid: 30, bottom: 50, left: 50};
	params.brushThickness = 60;
	params.width = jQuery('.section').width()  - params.margin.left - params.brushThickness - params.margin.mid - params.margin.right;
	params.height = jQuery('.section').width() - params.margin.top - params.margin.mid - params.brushThickness - params.margin.bottom;
	/*	Global variable to control the length of D3 transitons */
	params.duration = 450;
	params.delay = 450;

	return params;
}
