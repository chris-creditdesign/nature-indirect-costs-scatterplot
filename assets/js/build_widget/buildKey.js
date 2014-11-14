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

	target.selectAll("circle")
		.data(self.params.key.keyRange)
		.enter()
	  .append("circle")
		.attr("cx", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("cy", self.params.key.verticalShift[0])
		.attr("r", function(d) {
			return self.radiusScale(d);
		})
		.style("stroke", this.params.uiColour.grey)
		.style("stroke-width", 0)
		.style("fill", this.params.uiColour.grey);

	target.selectAll("line")
		.data(self.params.key.keyRange)
		.enter()
	  .append("line")
		.attr("x1", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("y1", self.params.key.verticalShift[0])
		.attr("x2", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("y2", self.params.key.verticalShift[1])
		.attr("stroke", self.params.uiColour.lightGrey)
		.attr("stroke-width", 1);

	target.selectAll("text")
		.data(self.params.key.keyRange)
		.enter()
	  .append("text")
		.attr("x", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("y", self.params.key.verticalShift[1])
		.attr("text-anchor", "middle")
		.attr("dy", 13)
		.text(function (d) {
			return d / 1000000;
		});

	target.append("text")
		.attr("x", self.params.key.horizontalShift)
		.attr("y", 0)
		.attr("dx", -5)
		.text(self.params.key.keyHead);
};
