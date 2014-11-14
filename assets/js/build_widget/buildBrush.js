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
		.attr("fill","#999")
		.attr("height", this.params.brushThickness );

	this.yBrushGroup.append("g")
		.attr("class", "brush")
		.call(yBrush)
		.selectAll("rect")
		.attr("fill", "#999")
		.attr("width", this.params.brushThickness)

};
