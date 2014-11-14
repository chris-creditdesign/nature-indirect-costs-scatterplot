BuildWidget.prototype.buildAxes = function () {
	this.yAxis = d3.svg.axis()
					.scale(this.yScale)
					.tickSize(3,0)
					.orient("left");

	this.yBrushAxis = d3.svg.axis()
					.scale(this.yBrushScale)
					.tickSize(3,0)
					.orient("left");

	this.xAxis = d3.svg.axis()
					.scale(this.xScale)
					.tickSize(3,0)
					.orient("bottom");

	this.xBrushAxis = d3.svg.axis()
					.scale(this.xBrushScale)
					.tickSize(3,0)
					.orient("bottom");

	/* Prepare the y axis */
	this.svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + (this.params.margin.left + this.params.brushThickness + this.params.margin.mid) + "," + this.params.margin.top + ")")
		.call(this.yAxis);

	this.svg.append("g")
		.attr("class", "y-brush axis")
		.attr("transform", "translate(" + this.params.margin.left + "," + this.params.margin.top + ")")
		.call(this.yBrushAxis)	
	  .append("g")
		.attr("class", "axisLabel")
	  .append("text")
		.attr("transform", "translate(" + -(this.params.margin.left * 0.6) + "," + (this.params.height / 2) + "), rotate(-90)")
		.style("text-anchor", "middle")
		.text("Actual Indirect Cost (%)");

	/*	Prepare the x axis */
	this.svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + (this.params.margin.left + this.params.brushThickness + this.params.margin.mid) + "," + (this.params.margin.top + this.params.height) + ")")
		.call(this.xAxis)

	this.svg.append("g")
		.attr("class", "x-brush axis")
		.attr("transform", "translate(" + (this.params.margin.left + this.params.brushThickness + this.params.margin.mid) + "," + (this.params.margin.top + this.params.height + this.params.margin.mid + this.params.brushThickness) + ")")
		.call(this.xBrushAxis)	
	  .append("g")
		.attr("class","axisLabel")
	  .append("text")
		.attr("transform", "translate(" + (this.params.width / 2) + "," + (this.params.margin.bottom * 0.7) + ")")
		.style("text-anchor","middle")
		.text("Negotiated Indirect Cost (%)");
		
};
