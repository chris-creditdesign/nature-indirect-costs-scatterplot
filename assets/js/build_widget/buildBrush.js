BuildWidget.prototype.buildBrush = function () {
	var self = this;

	var display = function () {

	};

	var brushend = function () {

	};

	var brush = d3.svg.brush()
					.x(this.xScaleBrush)
					.extent([0, this.params.width])
					.on("brush", display)
					.on("brushend", brushend);

};
