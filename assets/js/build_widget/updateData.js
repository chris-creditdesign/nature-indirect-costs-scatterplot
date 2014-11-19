BuildWidget.prototype.updateData = function () {
	var selectedStates = [];
	var selectedTypes = [];

	var checkboxesState = jQuery('.outer-wrapper #states input:checked');
	var checkboxesType = jQuery('.outer-wrapper #type input:checked');

	/* First remove the existing data from the arrays */
	while (this.data.activeData.length > 0) {
		this.data.activeData.shift();
	}

	for (var i = 0; i < checkboxesState.length; i++) {
		selectedStates.push(checkboxesState.eq(i).val());
	};

	for (var i = 0; i < checkboxesType.length; i++) {
		selectedTypes.push(checkboxesType.eq(i).val());
	};

	for (var i = 0; i < this.data.filteredData.length; i++) {
		var thisState = this.data.filteredData[i].stateID;
		var thisType = this.data.filteredData[i].institution_type_id;
		
		if ((selectedStates.indexOf(thisState) !== -1) && (selectedTypes.indexOf(thisType) !== -1)) {
			this.data.activeData.push(this.data.filteredData[i]);
		}
	}
};
