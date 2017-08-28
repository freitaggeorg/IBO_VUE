




new Vue ({
    el: "#app",
    data: {
        notes:[]
    },
    methods: {
        addNote: function () {
            this.notes.push({
                title: "",
                names: [],
                date: "",
                text: "",
                isDisabled:true
            });        
        },
        disableAll: function () {
            this.notes.forEach(function(element) {
                element.isDisabled = true;
            }, this);
        },

        editHandler: function (note) {
            this.disableAll();
            note.isDisabled = !note.isDisabled;
        }
    },
    mounted: function () {
        this.addNote();
    }
});