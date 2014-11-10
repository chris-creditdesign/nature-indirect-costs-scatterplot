BuildWidget.prototype.buildMiniMap = function () {
	this.mapper = this.mapperGroup.append("rect")
						.attr("x", 0)
						.attr("y", 0)
						.attr("width", this.params.brushThickness)
						.attr("height", this.params.brushThickness)
						.attr("fill","none")
						.attr("stroke","#333")
						.attr("storke-width","1px");
};

BuildWidget.prototype.updateMiniMap = function(x, y) {
	var self = this;

	this.mapper
			.attr("x", function() {
				return self.xMiniMapScale(x[0]);
			})
			.attr("y", function() {
				var top = 100 - y[1]
				return self.yMiniMapInvertScale(top);
			})
			.attr("width", function () {
				var width = x[1] - x[0];
				return self.xMiniMapScale(width);
			})
			.attr("height", function () {
				var height = y[1] - y[0];
				return self.yMiniMapInvertScale(height);
			});

};