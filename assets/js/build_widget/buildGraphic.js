BuildWidget.prototype.buildGraphic = function () {
	this.svg = d3.select(this.target  + " > .chart").append("svg")
		.attr("width", this.params.width + this.params.margin.left + this.params.brushThickness + this.params.margin.mid + this.params.margin.right)
		.attr("height", this.params.height + this.params.margin.top + this.params.brushThickness + this.params.margin.mid + this.params.margin.bottom);

	var clip = this.svg.append("defs").append("svg:clipPath")
					.attr("id", "clip")
				  .append("svg:rect")
					.attr("id", "clip-rect")
					.attr("x", "0")
					.attr("y", "0")
					.attr("width", this.params.width)
					.attr("height", this.params.height);


	this.scatterGroup = this.svg.append("g")
						.attr("class","scatterGroup")
						.attr("clip-path", "url(#clip)")
						.attr("transform","translate(" + (this.params.margin.left + this.params.brushThickness + this.params.margin.mid) + "," + this.params.margin.top + ")");

	this.xBrushGroup = this.svg.append("g")
						.attr("class","xBrushGroup")
						.attr("transform","translate(" + (this.params.margin.left + this.params.brushThickness + this.params.margin.mid) + "," + (this.params.margin.top + this.params.height + this.params.margin.mid)+ ")");

	this.yBrushGroup = this.svg.append("g")
						.attr("class","yBrushGroup")
						.attr("transform","translate(" + this.params.margin.left + "," + this.params.margin.top + ")");


};
