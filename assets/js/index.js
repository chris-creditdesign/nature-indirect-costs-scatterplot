(function() {
		var init = function($)
		{
		/*	Both jQuery and D3 are available so hide the status message and show the graphic */
		$(".status-message").css("display","none");
		$(".outer-wrapper").css("display","block");

			/*	Load D3 */
			$.getScript("http://d3js.org/d3.v3.min.js", function() {


				d3.csv("data/indirect-costs-calculated.csv", function (data) {
					var params = buildParams();

					var idcData = buildData(data);			

					var idcGraphic = new BuildWidget("#idc-graphic", params, idcData);

					idcGraphic.buildGraphic();
					idcGraphic.buildScales();
					idcGraphic.buildAxes();
					idcGraphic.buildBrush();
					idcGraphic.enterScatterPlot(idcGraphic.scatterGroup, true);
					idcGraphic.enterScatterPlot(idcGraphic.miniMapGroup, false);
					idcGraphic.buildMiniMap();

					idcGraphic.buildKey("#key");
					// idcGraphic.buildCheckboxes("#states");
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