BuildWidget.prototype.buildFootnote = function(target) {
	d3.select(target).text(this.params.key.yAxisFootnote + " " + this.params.key.xAxisFootnote);
};
