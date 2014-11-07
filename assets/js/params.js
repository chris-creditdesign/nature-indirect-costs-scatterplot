function buildParams () {
	var params = {};

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
	params.margin = {top: 60, right: 60, bottom: 60, left: 60};
	params.width = jQuery('.section').width()  - params.margin.left - params.margin.right;
	params.height = jQuery('.section').width() - params.margin.top - params.margin.bottom;
	/*	Global variable to control the length of D3 transitons */
	params.duration = 450;
	params.delay = 450;

	return params;

}
