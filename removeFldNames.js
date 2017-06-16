(function removeFldNames() {
	let fldList = document.querySelectorAll('.post-author li[class^="pa-fld"]');

	fldList.forEach(node => {
		let arrHTML = node.innerHTML.split(": ");
		arrHTML.splice(0, 1);

		return node.innerHTML = arrHTML.join("");
	});
})();