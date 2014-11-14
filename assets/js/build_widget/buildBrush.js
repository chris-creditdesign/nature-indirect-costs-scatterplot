BuildWidget.prototype.buildBrush = function () {
	var self = this;

	var updateView = function () {
		self.updateScatterPlot();
		self.svg.selectAll(".x.axis").call(self.xAxis);
		self.svg.selectAll(".y.axis").call(self.yAxis);
		self.updateMiniMap(xBrush.extent(), yBrush.extent());
	};

	var xDisplay = function () {
		var extent = xBrush.extent();

		self.xScale.domain(extent);

		updateView();
	};

	var xBrushend = function () {
		if (xBrush.extent()[0] === xBrush.extent()[1]) {
			d3.select(this).call(xBrush.extent(self.params.fullExtent));
			self.xScale.domain(self.params.fullExtent);

			updateView();
		}
	};

	var yDisplay = function () {
		var extent = yBrush.extent();

		self.yScale.domain(extent);

		updateView();
	};

	var yBrushend = function () {
		if (yBrush.extent()[0] === yBrush.extent()[1]) {
			d3.select(this).call(yBrush.extent(self.params.fullExtent));
			self.yScale.domain(self.params.fullExtent);

			updateView();
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

	var xBrush = d3.svg.brush()
					.x(this.xBrushScale)
					.extent(this.params.startExtent)
					.on("brush", xDisplay)
					.on("brushend", xBrushend);

	var yBrush = d3.svg.brush()
					.y(this.yBrushScale)
					.extent(this.params.startExtent)
					.on("brush", yDisplay)
					.on("brushend", yBrushend)

	this.xBrushGroup.append("g")
		.attr("class", "brush")
		.call(xBrush)
		.selectAll("rect")
		.attr("fill",this.params.uiColour.veryLightGrey)
		.attr("height", this.params.brushThickness );

	buildHandles(this.xBrushGroup, true);

	this.yBrushGroup.append("g")
		.attr("class", "brush")
		.call(yBrush)
		.selectAll("rect")
		.attr("fill", this.params.uiColour.veryLightGrey)
		.attr("width", this.params.brushThickness);

	buildHandles(this.yBrushGroup, false);
};
