BuildWidget.prototype.enterScatterPlot = function (target, main) {
	var self = this;

	// var typeOfOrg = ["Higher Ed", "Hosp", "NP res inst", "Other"];

	target.selectAll("circle")
			.data(this.data, function (d) {
				return d.organization_name;
			})
			.enter()
		  .append("circle")
			.attr("cx", function (d) {
				return main ? self.xScale(d.FY13) : self.xMiniMapScale(d.FY13);
			})
			.attr("cy", function (d) {
				return main ? self.yScale(d.calculated_indirect_cost) : self.yMiniMapScale(d.calculated_indirect_cost);
			})
			.attr("r", function (d) {
				return main ? self.radiusScale(d.funding) : 0.5;
			})
			.attr("opacity", 0.8)
			.attr("fill", function (d) {
				if (d.institution_type === "Higher Ed") {
					return self.params.colour[0];
				} else if (d.institution_type === "Hosp") {
					return self.params.colour[1];
				} else if (d.institution_type === "NP res inst") {
					return self.params.colour[2];
				} else {
					return self.params.colour[3];
				}
			});

	// d3.select(".scale")
	//   .append("ul")
	// 	.selectAll("li")
	// 	.data(typeOfOrg)
	// 	.enter()
	//   .append("li")
	// 	.attr("class", "palette")
	// 	.attr("title", function(d) { return d.key; })
	// 	.text(function(d) {
	// 		return d;
	// 	})
	// 	.style("border-color", function(d,i) { 
	// 		return self.params.colour[i];
	// 	});
};

BuildWidget.prototype.updateScatterPlot = function () {
	var self = this;

	this.scatterGroup.selectAll("circle")
			.attr("cx", function (d) {
				return self.xScale(d.FY13);
			})
			.attr("cy", function (d) {
				return self.yScale(d.calculated_indirect_cost);
			});

};
