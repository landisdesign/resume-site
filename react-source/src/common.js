const UtilityMethods = {
	appendClass:
		(class1, class2) => ((class1 || '') + ' ' + (class2 || '')).trim(), // || '' makes falsy arguments empty strings.

	bemClass:
		(block, element = '', modifier = '') => block + ( (element || '') && '__' + element) + ( (modifier || '') && '--' + modifier),

	offset:
		(element) => {
			let
				offsetLeft = 0,
				offsetTop = 0
			;
			
			while (element !== null) {
				offsetLeft += element.offsetLeft;
				offsetTop += element.offsetTop;
				element = element.offsetParent;
			}
			
			return {
				left: offsetLeft,
				top: offsetTop
			};
		},
};

export default UtilityMethods;