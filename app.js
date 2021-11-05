const App = {
	data() {
		return {
			// title: "Counter",
			// counter: 0,
			listTitle: "Notes list",
			placeholderText: "Add your note",
			inputValue: "",
			notes: ["Note 1", "Note 2"],
		};
	},

	methods: {
		// inputChangeHandler(event) {
		//     // console.log('here', event.target.value);
		//     this.inputValue = event.target.value;
		// },

		addNewNote() {
			if (this.inputValue !== "") {
				this.notes.push(this.inputValue);
				this.inputValue = "";
			}
		},

		deleteNote(i) {
			this.notes.splice(i, 1);
		},

		// doubleCount() {
		//     // console.log('doubleCount'); // too many calls! --> computed!
		//     return this.notes.length * 2;
		// },

		// inputKeyPress(event) {
		//     if (event.key === 'Enter') {
		//         this.addNewNote();
		//     };
		// },
	},

	computed: {
		doubleCountComputed() {
			// console.log("doubleCountComputed");
			return this.notes.length * 2;
		},
	},

	watch: {
		// watching exactly the same name
		inputValue(value) {
			// watch the change and eg put on some validation
			if (value.length > 10) {
				console.log("A note is longer than 10 symbols");
			}
			// console.log("Input value changed:", value);
		},
	},
};

Vue.createApp(App).mount("#app");