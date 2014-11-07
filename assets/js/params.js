function buildParams () {
	var params = {};

	var height = 400;

	/*	Reduce height of main graphic for smaller screens */
	if (jQuery('.section').width() < 480 ) {
		height = 300;
	}

	params.colour =  ["#c1272d",   /* 1 */
							"#2a6755", /* 2 */
							"#fbb03b", /* 3 */
							"#d9e021", /* 3 */
							"#39b54a", /* 4 */
							"#00a99d", /* 5 */
							"#0071bc", /* 6 */
							"#1b1464", /* 7 */
							"#93278f", /* 8 */
							"#8c6239"  /* 9 */
						];

	/*	Margin, Width and height */
	params.margin = {top: 15, right: 30, bottom: 40, left: 80};
	params.lifeCycleMargin = {top: 10, right: 10, bottom: 20, left: 70};
	params.width = jQuery('.section').width()  - params.margin.left - params.margin.right;
	params.height = height - params.margin.top - params.margin.bottom;
	/*	Global variable to control the length of D3 transitons */
	params.duration = 450;
	params.delay = 450;

	return params;

}
