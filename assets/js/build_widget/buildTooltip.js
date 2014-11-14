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
				.classed("hidden", false);
			
			d3.select("#name").text(d.organization_name);
			d3.select("#funding").text("$" + self.params.format(d.funding));
			d3.select("#fy13").text(d.FY13 + "%");
			d3.select("#calculated-indirect-cost").text(d.calculated_indirect_cost + "%");

		}).on("mouseout", function () {
			d3.select(this).attr("stroke-width", 0);

			d3.select(".tooltip").classed("hidden", true);
		});
};
