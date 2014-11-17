BuildWidget.prototype.buildScales = function () {
	
	var maxValue = d3.max(this.data.filteredData, function(d) { 
		return d.intFunding; 
	});

	this.yScale = d3.scale.linear()
					.range([this.params.height, 0])
					.domain(this.params.startExtent);

	this.yBrushScale = d3.scale.linear()
					.range([this.params.height, 0])
					.domain(this.params.fullExtent);

	this.xScale = d3.scale.linear()
					.range([0, this.params.width])
					.domain(this.params.startExtent);

	this.xBrushScale = d3.scale.linear()
					.range([0, this.params.width])
					.domain(this.params.fullExtent);

	this.radiusScale = d3.scale.sqrt()
						.range([0,15])
						.domain([0, maxValue]);

	this.yMiniMapScale = d3.scale.linear()
						.range([this.params.miniMapThickness, 0])
						.domain(this.params.fullExtent);

	this.yMiniMapInvertScale = d3.scale.linear()
						.range([this.params.miniMapThickness, 0])
						.domain(this.params.fullExtentInvert);

	this.xMiniMapScale = d3.scale.linear()
							.range([0, this.params.miniMapThickness])
							.domain(this.params.fullExtent);

	this.typeColourScale = d3.scale.ordinal()
							.domain(this.data.type)
							.range(this.params.colour);

};
