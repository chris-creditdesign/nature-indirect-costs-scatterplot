BuildWidget.prototype.buildAxes = function () {
	this.yAxis = d3.svg.axis()
					.scale(this.yScale)
					.tickSize(3,3)
					.orient("left");

	this.xAxis = d3.svg.axis()
					.scale(this.xScale)
					.tickSize(3,3)
					.orient("bottom");

	/* Prepare the y axis */
	this.svg.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + this.params.margin.left + "," + this.params.margin.top + ")")
		.call(this.yAxis)
	  .append("g")
		.attr("class", "axisLabel")
	  .append("text")
		.attr("transform", "translate(" + -(this.params.margin.left * 0.5) + "," + (this.params.height / 2) + "), rotate(-90)")
		.style("text-anchor", "middle")
		.text("Actual Indirect Cost");

	/*	Prepare the x axis */
	this.svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + this.params.margin.left + "," + (this.params.margin.top + this.params.height) + ")")
		.call(this.xAxis)
	  .append("g")
		.attr("class","axisLabel")
	  .append("text")
		.attr("transform", "translate(" + (this.params.width / 2) + "," + (this.params.margin.bottom * 0.6) + ")")
		.style("text-anchor","middle")
		.text("Negotiated Indirect Cost");

};
