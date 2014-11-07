BuildWidget.prototype.buildScales = function () {
	
	this.yScale = d3.scale.linear()
					.range([this.params.height, 0])
					.domain([0,100]);

	this.xScale = d3.scale.linear()
					.range([0, this.params.width])
					.domain([0,100]);

};
