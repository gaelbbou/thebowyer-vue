export const dropdownHeaderMixin = {
	methods: {	// functions
		dropdownOpen() {
			document.querySelector('#dropdown').style.display = "block";
		},
		dropdownClose() {
			document.querySelector('#dropdown').style.display = "none";
		}
	}
};