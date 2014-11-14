BuildWidget.prototype.buildBox = function (target) {
	target.append("rect")
		.attr("x", 10)
		.attr("y", 10)
		.attr("width", 170)
		.attr("height", 155)
		.attr("fill", "#fff")
		.attr("stroke", this.params.uiColour.grey)
		.attr("stroke-width", 1)
		.attr("opacity", 0.8);
}

BuildWidget.prototype.buildColourKey = function (target) {
	var self = this;

	this.colourGroup = target.append("g")
							.attr("class","colourGroup")
							.attr("transform","translate(0,20)");

	this.colourGroup.selectAll("text")
		.data(self.data.type)
		.enter()
	  .append("text")
		.attr("x", self.params.key.horizontalShift)
		.attr("y", function (d,i) {
			return (i * self.params.key.verticalShift[0]) + 10;
		})
		.attr("dx", 15)
		.text(function (d) {
			return d;
		});

	this.colourGroup.selectAll("rect")
		.data(self.data.type)
		.enter()
	  .append("rect")
		.attr("x", self.params.key.horizontalShift)
		.attr("y", function (d,i) {
			return i * self.params.key.verticalShift[0];
		})
		.attr("width", 10)
		.attr("height", 10)
		.attr("fill", function (d) {
			return self.typeColourScale(d);
		});
};

BuildWidget.prototype.buildRadiusKey = function (target) {
	var self = this;

	this.radiusGroup = target.append("g")
						.attr("class","radiusGroup")
						.attr("transform","translate(0,95)");


	this.radiusGroup.selectAll("circle")
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

	this.radiusGroup.selectAll("line")
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

	this.radiusGroup.selectAll("text")
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

	this.radiusGroup.append("text")
		.attr("x", self.params.key.horizontalShift)
		.attr("y", 0)
		.attr("dx", -3)
		.text(self.params.key.keyHead);
};

BuildWidget.prototype.buildColourList = function (target) {
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

