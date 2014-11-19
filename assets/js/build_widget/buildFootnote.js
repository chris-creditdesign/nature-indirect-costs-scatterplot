BuildWidget.prototype.buildFootnote = function(target) {
	d3.select(target)
		.style("display", "block")
		.text(this.params.key.yAxisFootnote + " " + this.params.key.xAxisFootnote);
};
