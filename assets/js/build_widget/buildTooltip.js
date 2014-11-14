BuildWidget.prototype.buildTooltip = function () {
	var self = this;

	this.scatterGroup.selectAll("circle")
		.on("mouseover", function (d) {
			var myCircle = d3.select(this);

			myCircle.attr("stroke-width", 3);

			var tooltipWidth = parseInt(d3.select(".tooltip").style("padding-left"),10) + parseInt(d3.select(".tooltip").style("width"),10) + parseInt(d3.select(".tooltip").style("padding-right"),10);

			var top = (parseFloat(myCircle.attr("cy")) + self.params.margin.top);
			var left = (parseFloat(myCircle.attr("cx")) + self.params.margin.left + self.params.brushThickness + self.params.margin.mid );

			if ( parseFloat(myCircle.attr("cx")) > (self.params.width / 2) ) {
				left -= tooltipWidth;
			}

			d3.select(".tooltip")
				.style("top",  top + "px")
				.style("left", left + "px")
				.classed("hidden", false)
				.select("p").text(d.organization_name);

		}).on("mouseout", function () {
			d3.select(this).attr("stroke-width", 0);

			d3.select(".tooltip").classed("hidden", true);
		});
};
