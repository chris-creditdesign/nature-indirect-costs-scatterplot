BuildWidget.prototype.buildScales = function () {
	
	var minValue = d3.min(this.data.filteredData, function(d) { 
		return d.intFunding; 
	});
	
	var maxValue = d3.max(this.data.filteredData, function(d) { 
		return d.intFunding; 
	});

	this.yScale = d3.scale.linear()
					.range([this.params.height, 0])
					.domain([0,105]);

	this.yBrushScale = d3.scale.linear()
					.range([this.params.height, 0])
					.domain([0,105]);

	this.xScale = d3.scale.linear()
					.range([0, this.params.width])
					.domain([0,105]);

	this.xBrushScale = d3.scale.linear()
					.range([0, this.params.width])
					.domain([0,105]);

	this.radiusScale = d3.scale.linear()
						.range([2,15])
						.domain([1000000, maxValue]);

	this.yMiniMapScale = d3.scale.linear()
						.range([this.params.brushThickness, 0])
						.domain([0,105]);

	this.yMiniMapInvertScale = d3.scale.linear()
						.range([this.params.brushThickness, 0])
						.domain([105,0]);

	this.xMiniMapScale = d3.scale.linear()
							.range([0, this.params.brushThickness])
							.domain([0,105]);

	this.typeColourScale = d3.scale.ordinal()
							.domain(this.data.type)
							.range(this.params.colour);

};
