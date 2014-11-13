BuildWidget.prototype.buildScales = function () {
	
	var minValue = d3.min(this.data.data, function(d) { 
		return d.intFunding; 
	});
	
	var maxValue = d3.max(this.data.data, function(d) { 
		return d.intFunding; 
	});

	this.yScale = d3.scale.linear()
					.range([this.params.height, 0])
					.domain([0,100]);

	this.yBrushScale = d3.scale.linear()
					.range([this.params.height, 0])
					.domain([0,100]);

	this.xScale = d3.scale.linear()
					.range([0, this.params.width])
					.domain([0,100]);

	this.xBrushScale = d3.scale.linear()
					.range([0, this.params.width])
					.domain([0,100]);

	this.radiusScale = d3.scale.linear()
						.range([2,15])
						.domain([minValue, maxValue]);

	// console.log( minValue );
	// console.log( maxValue );

	this.yMiniMapScale = d3.scale.linear()
						.range([this.params.brushThickness, 0])
						.domain([0,100]);

	this.yMiniMapInvertScale = d3.scale.linear()
						.range([this.params.brushThickness, 0])
						.domain([100,0]);

	this.xMiniMapScale = d3.scale.linear()
							.range([0, this.params.brushThickness])
							.domain([0,100]);

	this.typeColourScale = d3.scale.ordinal()
							.domain(this.data.type)
							.range(this.params.colour);

};
