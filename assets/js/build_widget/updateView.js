BuildWidget.prototype.updateView = function () {
	this.enterScatterPlot(this.scatterGroup, true);
	this.updateScatterPlot();
	this.exitScatterPlot();

	this.svg.selectAll(".x.axis").call(this.xAxis);
	this.svg.selectAll(".y.axis").call(this.yAxis);
	this.updateMiniMap(this.xBrush.extent(), this.yBrush.extent());

	this.buildTooltip();
};