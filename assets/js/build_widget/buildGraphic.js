BuildWidget.prototype.buildGraphic = function () {
	this.svg = d3.select(this.target  + " > .chart").append("svg")
		.attr("width", this.params.width + this.params.margin.left + this.params.margin.right)
		.attr("height", this.params.height + this.params.margin.top + this.params.margin.bottom);

};
