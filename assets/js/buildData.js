function ifNaNmakeZero (num) {
	if (isNaN(num)) {
		num = 0;
	}
	return num;
}

function buildData (data) {

	var institutionTypesArray = [];
	var statesArray = [];
		
	for (var i = 0; i < data.length; i++) {
		institutionTypesArray.push(data[i].institution_type);
		statesArray.push(data[i].state);

		data[i].floatFY12 = data[i].FY12.length > 0 ? parseFloat(data[i].FY12) : 0;
		data[i].floatFY12 = ifNaNmakeZero(data[i].floatFY12);
		
		data[i].floatFY13 = data[i].FY13.length > 0 ? parseFloat(data[i].FY13) : 0;
		data[i].floatFY13 = ifNaNmakeZero(data[i].floatFY13);
		
		data[i].floatCalculated_indirect_cost = parseFloat(data[i].calculated_indirect_cost);
		data[i].floatCalculated_indirect_cost = ifNaNmakeZero(data[i].floatCalculated_indirect_cost);

		data[i].intDirect_cost = parseInt(data[i].direct_cost, 10);
		data[i].intDirect_cost = ifNaNmakeZero(data[i].intDirect_cost);

		data[i].intIndirect_cost = parseInt(data[i].indirect_cost, 10);
		data[i].intIndirect_cost = ifNaNmakeZero(data[i].intIndirect_cost);
		
		data[i].intFunding = parseInt(data[i].funding, 10);
		data[i].intFunding = ifNaNmakeZero(data[i].intFunding);
	}

	var institutionTyesSet = d3.set(institutionTypesArray).values();

	var statesSet = d3.set(statesArray).values();

	return {
		data: data,
		type: institutionTyesSet,
		state: statesSet
	};
}