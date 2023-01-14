const App = {
    data() {
        return {
            counter: 0,
            title0: 'Счетчик',
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3', 'Заметка 4']
        }
    },
    methods: {
        inputChangeHadler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            } 
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx) {
            this.notes.splice(idx, 1)
        }
    }
}

Vue.createApp(App).mount('#app')