BuildWidget.prototype.updateData = function () {
	var selectedStates = [];

	var checkboxes = jQuery('.outer-wrapper #states input:checked');

	/* First remove the existing data from the arrays */
	while (this.data.activeData.length > 0) {
		this.data.activeData.shift();
	}

	for (var i = 0; i < checkboxes.length; i++) {
		selectedStates.push(checkboxes.eq(i).val());
	};

	for (var i = 0; i < this.data.filteredData.length; i++) {
		var thisState = this.data.filteredData[i].stateID;
		
		if (selectedStates.indexOf(thisState) !== -1) {
			this.data.activeData.push(this.data.filteredData[i]);
		}
	}
};
