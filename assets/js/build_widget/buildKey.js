BuildWidget.prototype.buildColourKey = function (target) {
	var self = this;

	d3.select(target)
	  .append("ul")
		.selectAll("li")
		.data(self.data.type)
		.enter()
	  .append("li")
		.attr("class", "palette")
		.attr("title", function(d) { return d.key; })
		.text(function(d) {
			return d;
		})
		.style("border-color", function(d) {
			return self.typeColourScale(d)
		});
};

BuildWidget.prototype.buildRadiusKey = function (target) {
	var self = this;

	var keyRange = [100000000, 600000000];

	target.selectAll("circle")
		.data(keyRange)
		.enter()
		.append("circle")
		.attr("cx", (self.params.height - 20))
		.attr("cy", (self.params.width - 20))
		.attr("r", function(d) {
			return self.radiusScale(d);
		})
		.style("stroke", "#999")
		.style("stroke-width", 1.5)
		.style("fill", "none");
};

