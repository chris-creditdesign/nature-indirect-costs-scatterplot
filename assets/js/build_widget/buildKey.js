BuildWidget.prototype.buildBox = function (target) {
	this.keyBox = target.append("rect")
		.attr("x", 10)
		.attr("y", 10)
		.attr("width", 170)
		.attr("height", 170)
		.attr("fill", "#fff")
		.attr("stroke", this.params.uiColour.grey)
		.attr("stroke-width", 1)
		.attr("opacity", 0.8);

}

BuildWidget.prototype.buildColourKey = function (target) {
	var self = this;

	this.colourGroup = target.append("g")
							.attr("class","colourGroup")
							.attr("transform","translate(0,45)")
							.attr("opacity", 1)

	this.colourGroup.selectAll("text")
		.data(self.data.type)
		.enter()
	  .append("text")
		.attr("x", self.params.key.horizontalShift)
		.attr("y", function (d,i) {
			return (i * self.params.key.verticalShift[0]) + 10;
		})
		.attr("dx", 15)
		.text(function (d) {
			return d;
		});

	this.colourGroup.selectAll("rect")
		.data(self.data.type)
		.enter()
	  .append("rect")
		.attr("x", self.params.key.horizontalShift)
		.attr("y", function (d,i) {
			return i * self.params.key.verticalShift[0];
		})
		.attr("width", 10)
		.attr("height", 10)
		.attr("fill", function (d) {
			return self.typeColourScale(d);
		});
};

BuildWidget.prototype.buildRadiusKey = function (target) {
	var self = this;

	this.radiusGroup = target.append("g")
						.attr("class","radiusGroup")
						.attr("transform","translate(0,115)")
						.attr("opacity", 1);

	this.radiusGroup.selectAll("circle")
		.data(self.params.key.keyRange)
		.enter()
	  .append("circle")
		.attr("cx", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("cy", self.params.key.verticalShift[0])
		.attr("r", function(d) {
			return self.radiusScale(d);
		})
		.style("stroke", this.params.uiColour.grey)
		.style("stroke-width", 0)
		.style("fill", this.params.uiColour.grey);

	this.radiusGroup.selectAll("line")
		.data(self.params.key.keyRange)
		.enter()
	  .append("line")
		.attr("x1", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("y1", self.params.key.verticalShift[0])
		.attr("x2", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("y2", self.params.key.verticalShift[1])
		.attr("stroke", self.params.uiColour.lightGrey)
		.attr("stroke-width", 1);

	this.radiusGroup.selectAll("text")
		.data(self.params.key.keyRange)
		.enter()
	  .append("text")
		.attr("x", function (d,i) {
			return ++i * self.params.key.horizontalShift;
		})
		.attr("y", self.params.key.verticalShift[1])
		.attr("text-anchor", "middle")
		.attr("dy", 13)
		.text(function (d) {
			return d / 1000000;
		});

	this.radiusGroup.append("text")
		.attr("x", self.params.key.horizontalShift)
		.attr("y", 0)
		.attr("dx", -3)
		.text(self.params.key.keyHead);
};

BuildWidget.prototype.buildColourList = function (target) {
	var self = this;

	d3.select(target)
	  .append("ul")
		.selectAll("li")
		.data(self.data.type)
		.enter()
	  .append("li")
		.attr("class", "palette")
		.attr("title", function(d) { return d.key; })
		.text(function(d) {
			return d;
		})
		.style("border-color", function(d) {
			return self.typeColourScale(d)
		});
};

BuildWidget.prototype.buildButton = function (target) {
	var self = this;

	var visible = true;
	var topBar;
	var bottomBar;

	var topBarPoints = [{x1: 23, y1: 15, x2: 23, y2: 29},
						{x1: 15, y1: 15, x2: 30, y2: 29}
						];

	var	bottomBarPoints = [{x1: 15, y1: 22, x2: 30, y2: 22},
							{x1: 15, y1: 29, x2: 30, y2: 15}
						];

	function hideKey () {
		topBar.transition()
			.duration(self.params.duration/2)
			.attr("x1", topBarPoints[0].x1)
			.attr("y1", topBarPoints[0].y1)
			.attr("x2", topBarPoints[0].x2)
			.attr("y2", topBarPoints[0].y2);

		bottomBar.transition()
			.duration(self.params.duration/2)
			.attr("x1", bottomBarPoints[0].x1)
			.attr("y1", bottomBarPoints[0].y1)
			.attr("x2", bottomBarPoints[0].x2)
			.attr("y2", bottomBarPoints[0].y2);

		self.colourGroup
			.transition()
			.duration(self.params.duration/2)
			.attr("opacity", 0);

		self.radiusGroup
			.transition()
			.duration(self.params.duration/2)
			.attr("opacity", 0);

		self.keyBox
			.transition()
			.delay(self.params.duration/4)
			.duration(self.params.duration)
			.attr("width", 25)
			.attr("height", 25)
			.each("end", function () {
				self.colourGroup
					.attr("display", "none");

				self.radiusGroup
					.attr("display", "none");
			});
	}

	function showKey () {
		topBar.transition()
			.duration(self.params.duration/2)
			.attr("x1", topBarPoints[1].x1)
			.attr("y1", topBarPoints[1].y1)
			.attr("x2", topBarPoints[1].x2)
			.attr("y2", topBarPoints[1].y2);

		bottomBar.transition()
			.duration(self.params.duration/2)
			.attr("x1", bottomBarPoints[1].x1)
			.attr("y1", bottomBarPoints[1].y1)
			.attr("x2", bottomBarPoints[1].x2)
			.attr("y2", bottomBarPoints[1].y2);
		self.colourGroup
			.attr("display", "block")
			.transition()
			.delay(self.params.duration/2)
			.duration(self.params.duration)
			.attr("opacity", 1);

		self.radiusGroup
			.attr("display", "block")
			.transition()
			.delay(self.params.duration/2)
			.duration(self.params.duration)
			.attr("opacity", 1);

		self.keyBox
			.transition()
			.duration(self.params.duration)
			.attr("width", 170)
			.attr("height", 170);
	}
	
	this.keyButton = target.append("rect")
		.attr("x", 10)
		.attr("y", 10)
		.attr("width", 25)
		.attr("height", 25)
		.style("fill", this.params.uiColour.grey)
		.style("stroke-width", 0)
		.style("stroke", "none")
		.style("cursor","pointer")
		.on("mousedown", function () {
			if ( visible ) {
				hideKey();
			} else {
				showKey();
			}

			visible = !visible;
		});

	topBar = target.append("line")
					.attr("x1", topBarPoints[1].x1)
					.attr("y1", topBarPoints[1].y1)
					.attr("x2", topBarPoints[1].x2)
					.attr("y2", topBarPoints[1].y2)
					.attr("pointer-events","none")
					.attr("stroke", self.params.uiColour.veryLightGrey)
					.attr("stroke-width", 4);

	bottomBar = target.append("line")
					.attr("x1", bottomBarPoints[1].x1)
					.attr("y1", bottomBarPoints[1].y1)
					.attr("x2", bottomBarPoints[1].x2)
					.attr("y2", bottomBarPoints[1].y2)
					.attr("pointer-events","none")
					.attr("stroke", self.params.uiColour.veryLightGrey)
					.attr("stroke-width", 4);
};
