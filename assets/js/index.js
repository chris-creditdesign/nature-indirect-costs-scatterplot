(function() {
		var init = function($)
		{
		/*	Both jQuery and D3 are available so hide the status message and show the graphic */
		$(".status-message").css("display","none");
		$(".outer-wrapper").css("display","block");

			/*	Load D3 */
			$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js", function() {


				d3.csv("data/costs-basic.csv", function (data) {
					var params = buildParams();

					var idcGraphic = new BuildWidget("#idc-graphic", params, data);

					idcGraphic.buildGraphic();
					idcGraphic.buildScales();
					idcGraphic.buildAxes();
				});

			}); /* End of d3js getscript call

		/* End of active code */
		};

	setTimeout(function()
	{
	if (typeof jQuery !== 'undefined')
	{
		init(jQuery);
	} else
	{
		setTimeout(arguments.callee, 60);
	}
	}, 60);

})();