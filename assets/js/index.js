(function() {
		var init = function($)
		{
			/*	Load D3 */
			$.getScript("//www.nature.com/polopoly_static/js/d3.v3.min.js", function() {

				d3.csv("//www.nature.com/polopoly_fs/7.21891!/file/indirect-costs-calculated.txt", function (error, data) {
					
					if (error) {
						$(".status-message").css("display","block");
					} else {

						$(".status-message").css("display","none");
						$(".outer-wrapper").css("display","block");

						var params = buildParams();

						var idcData = buildData(data);			

						var idcGraphic = new BuildWidget("#idc-graphic", params, idcData);

						idcGraphic.buildCheckboxes("#type", idcGraphic.data.type);
						idcGraphic.buildCheckboxes("#states", idcGraphic.data.state);
						idcGraphic.updateData();
						idcGraphic.buildGraphic();
						idcGraphic.buildScales();
						idcGraphic.buildAxes();
						idcGraphic.buildBrush();
						idcGraphic.buildMiniMap();
						idcGraphic.enterScatterPlot(idcGraphic.scatterGroup, true);
						idcGraphic.buildTooltip();
						idcGraphic.enterScatterPlot(idcGraphic.miniMapGroup, false);

						if (idcGraphic.params.width > 350 ) {
							idcGraphic.buildBox(idcGraphic.keyGroup);
							idcGraphic.buildColourKey(idcGraphic.keyGroup);
							idcGraphic.buildRadiusKey(idcGraphic.keyGroup);
							idcGraphic.buildButton(idcGraphic.keyGroup);
						} else {
							idcGraphic.buildColourList("#key");
							idcGraphic.buildFootnote("#widget-footnote");
						}

						$(".outer-wrapper #show-hide").click(function () {
							var mySection = $(this).parent("section");

							if (!mySection.hasClass("open-section")) {
								mySection.addClass("open-section");	
							} else {
								mySection.removeClass("open-section");
							}
						});

						$(".outer-wrapper .options input").change(function () {
							var thisProp;

							if ($(this).val() === "all") {

								thisProp = $(this).prop("checked");
								$(".outer-wrapper #states input").prop("checked", thisProp);	
							}

							idcGraphic.updateData();
							idcGraphic.updateView();
						});
					}
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