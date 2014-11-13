BuildWidget.prototype.enterScatterPlot = function (target, main) {
	var self = this;

	target.selectAll("circle")
			.data(this.data.data, function (d) {
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
			.attr("r", function (d) {
				return main ? self.radiusScale(d.intFunding) : 0.5;
			})
			.attr("opacity", 0.8)
			.attr("fill", function (d) {
				return self.typeColourScale(d.institution_type);
			});
};

BuildWidget.prototype.updateScatterPlot = function () {
	var self = this;

	this.scatterGroup.selectAll("circle")
			.attr("cx", function (d) {
				return self.xScale(d.floatFY13);
			})
			.attr("cy", function (d) {
				return self.yScale(d.floatCalculated_indirect_cost);
			});

};
