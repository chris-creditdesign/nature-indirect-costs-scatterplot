BuildWidget.prototype.buildBrush = function () {
	var self = this;

	var xDisplay = function () {
		var extent = self.xBrush.extent();

		self.xScale.domain(extent);

		self.updateView();
	};

	var xBrushend = function () {
		if (self.xBrush.extent()[0] === self.xBrush.extent()[1]) {
			d3.select(this).call(self.xBrush.extent(self.params.fullExtent));
			self.xScale.domain(self.params.fullExtent);

			self.updateView();
		}
	};

	var yDisplay = function () {
		var extent = self.yBrush.extent();

		self.yScale.domain(extent);

		self.updateView();
	};

	var yBrushend = function () {
		if (self.yBrush.extent()[0] === self.yBrush.extent()[1]) {
			d3.select(this).call(self.yBrush.extent(self.params.fullExtent));
			self.yScale.domain(self.params.fullExtent);

			self.updateView();
		}
	};

	var buildHandles = function (target, horizontal) {
		var handleGroup = target.selectAll(".resize").append("g") 
			.attr("transform", function(d, i) {
				if (horizontal) {
					return  i ? "translate(" + -(self.params.handleWidth) + ",0)" : "translate(0,0)";   
				} else {
					return  i ?  "translate(0,0)" : "translate(0," + -(self.params.handleWidth) + ")"; 
				}
			});

		handleGroup.append("rect")
			.attr("x", 0)
			.attr("y", 0)
			.attr("fill", self.params.uiColour.grey)
			.attr("width", horizontal ? self.params.handleWidth : self.params.brushThickness)
			.attr("height", horizontal ? self.params.brushThickness : self.params.handleWidth);

		handleGroup.append("line")
			.attr("x1", horizontal ? (self.params.handleWidth * 0.65) : (self.params.brushThickness * 0.2))
			.attr("y1", horizontal ? (self.params.brushThickness * 0.2) : (self.params.handleWidth * 0.65))
			.attr("x2", horizontal ? (self.params.handleWidth * 0.65) : (self.params.brushThickness * 0.8))
			.attr("y2", horizontal ? (self.params.brushThickness * 0.8): (self.params.handleWidth * 0.65))
			.attr("stroke", self.params.uiColour.veryLightGrey)
			.attr("stroke-width", 1);

		handleGroup.append("line")
			.attr("x1", horizontal ? (self.params.handleWidth * 0.35) : (self.params.brushThickness * 0.2))
			.attr("y1", horizontal ? (self.params.brushThickness * 0.2) : (self.params.handleWidth * 0.35))
			.attr("x2", horizontal ? (self.params.handleWidth * 0.35) : (self.params.brushThickness * 0.8))
			.attr("y2", horizontal ? (self.params.brushThickness * 0.8) : (self.params.handleWidth * 0.35))
			.attr("stroke", self.params.uiColour.veryLightGrey)
			.attr("stroke-width", 1);
	};

	this.xBrush = d3.svg.brush()
					.x(this.xBrushScale)
					.extent(this.params.startExtent)
					.on("brush", xDisplay)
					.on("brushend", xBrushend);

	this.yBrush = d3.svg.brush()
					.y(this.yBrushScale)
					.extent(this.params.startExtent)
					.on("brush", yDisplay)
					.on("brushend", yBrushend)

	this.xBrushGroup.append("g")
		.attr("class", "brush")
		.call(this.xBrush)
		.selectAll("rect")
		.attr("fill",this.params.uiColour.veryLightGrey)
		.attr("height", this.params.brushThickness );

	buildHandles(this.xBrushGroup, true);

	this.yBrushGroup.append("g")
		.attr("class", "brush")
		.call(this.yBrush)
		.selectAll("rect")
		.attr("fill", this.params.uiColour.veryLightGrey)
		.attr("width", this.params.brushThickness);

	buildHandles(this.yBrushGroup, false);
};
