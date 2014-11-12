BuildWidget.prototype.buildKey = function (target) {
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


