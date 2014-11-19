BuildWidget.prototype.enterScatterPlot = function (target, main) {
	var self = this;

	target.selectAll("circle")
			.data(this.data.activeData, function (d) {
				return d.organization_name;
			})
			.enter()
		  .append("circle")
			.attr("cx", function (d) {
				return main ? self.xScale(d.floatFY13) : self.xMiniMapScale(d.floatFY13);
			})
			.attr("cy", function (d) {
				return main ? self.yScale(d.floatCalculated_indirect_cost) : self.yMiniMapScale(d.floatCalculated_indirect_cost);
			})
			.attr("r", 0)
			.attr("opacity", 0.8)
			.attr("fill", function (d) {
				return self.typeColourScale(d.institution_type);
			})
			.attr("stroke", self.params.uiColour.darkGrey)
			.attr("stroke-width", 0)
			.classed("hidden", false)
			.attr("r", function (d) {
				if ( main ) {
					if ( self.params.width > 350  ) {
						return self.radiusScale(d.intFunding)
					} else {
						return 3;
					}
				} else {
					return 1;
				}
			});

};

BuildWidget.prototype.updateScatterPlot = function () {
	var self = this;

	this.scatterGroup.selectAll("circle")
			.data(this.data.activeData, function (d) {
				return d.organization_name;
			})
			.attr("cx", function (d) {
				return self.xScale(d.floatFY13);
			})
			.attr("cy", function (d) {
				return self.yScale(d.floatCalculated_indirect_cost);
			})
			.classed("hidden", false);
};

BuildWidget.prototype.exitScatterPlot = function () {
	var self = this;

	this.scatterGroup.selectAll("circle")
		.data(this.data.activeData, function (d) {
			return d.organization_name;
		})
		.exit()
		.classed("hidden", true);
};
