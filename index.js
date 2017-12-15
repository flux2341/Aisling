const storage = require('electron-json-storage');
const settings = require('electron-settings');
const {dialog} = require('electron').remote;
const Vue = require('vue/dist/vue.js');



var app = new Vue({
    el: '#app',
    data: {
        entries: [{word:'test1', definition:'t1d'},{word:'test2',definition:'t2d'},{word:'test3',definition:'t3d'}],
        current_entry: {word:'test1', definition:'test1 definition'},
        temp_entry:    {word:'test1', definition:'test1 definition'},
        mode: 'view',
        modules: ['module-word', 'module-definition'],
        search_text: '1'
    },
    components: {
        'module-word': {
            props: ['mode', 'entry'],
            template: String.raw`<div>
                                    <input v-if="mode === 'edit'" v-model="entry.word">
                                    <h2 v-if="mode === 'view'">{{ entry.word }}</h2>
                                </div>`
        },
        'module-definition': {
            props: ['mode', 'entry'],
            template: String.raw`<div style="height:200px">
                                    <textarea v-if="mode === 'edit'" v-model="entry.definition" class="scrollable"></textarea>
                                    <span v-else>{{ entry.definition }}</span>
                                 </div>`
        }
    },
    methods: {
        load_from_storage: function() {
            let storage_path = settings.get('storage_path');
            storage.setDataPath(storage_pathpath);
            storage.getAll(function(error, entries) {
                if (error) {
                    console.log(error);
                } else {
                    this.entries = entries;
                }
            });
        },

        view_entry: function(entry) {
            if (this.mode === 'edit') {
                show_alert({
                    message: 'cancel edit?',
                    buttons: ['yes', 'no'],
                    callback: function(response) {
                        if (response === 'yes') {
                            this.mode = 'view';
                        } else {
                            this.current_entry = entry;
                            this.temp_entry = this.copy_entry(entry);
                        }
                    }
                });
            } else {
                this.current_entry = entry;
                this.temp_entry = this.copy_entry(entry);
            }
        },
        new_entry: function() {
            this.temp_entry = {word:'', definition:''};
            this.current_entry = null;
            this.mode = 'edit';
        },
        edit_entry: function() {
            this.temp_entry = this.copy_entry(entry);
            this.mode = 'edit';
        },
        save_entry: function() {

            // check if the input word is blank
            if (this.temp_entry.word === '') {
                show_alert({
                    message: 'the word cannot be blank',
                    buttons: ['ok'],
                    callback: function(response) {}
                });
                return;
            }


            // check if the word's been changed or newly created
            if (this.temp_entry.word !== this.current_entry.word) {

                // check if the saved word already exists
                found_index = this.entries.find(function(entry) {
                    return entry.word === this.temp_entry.word;
                });
                if (found_index >= 0) {
                    show_alert({
                        message: 'the word must be unique',
                        buttons: ['ok'],
                        callback: function(response) {}
                    });
                    return;
                }
                storage.remove(this.current_entry.word, function(error) {
                    if (error) {
                        console.log(error);
                    }
                });
            }

            // replace the current_entry with the temp_entry in entries
            let index = this.entries.findIndex(function(entry) {
                return entry === this.current_entry;
            });
            if (index >= 0) {
                this.entries[index] = this.temp_entry;
            } else {
                this.entries.push(this.temp_entry);
            }
            this.current_entry = this.temp_entry;
            this.entries.sort(function(e0, e1) {
                return e0.word.localeCompare(e1.word);
            });
            this.mode = 'view'
            storage.set(current_entry.word, current_entry, function(error) {
                if (error) {
                    console.log(error);
                }
            });
        },
        delete_word: function() {
            show_alert({
                message: 'are you sure?',
                buttons: ['yes', 'no'],
                callback: function(response) {
                    if (response === 'yes') {
                        if (current_entry) {
                            storage.remove(current_entry.word, function(error) {
                                if (error) {
                                    console.log(error);
                                }
                            });
                        } else {
                            view_entry(null);
                        }
                    }
                }
            });
        },
        copy_entry: function(entry) {
            return JSON.parse(JSON.stringify(entry))
        },
        filtered_entries: function() {
            let st = this.search_text;
            let cind = st.indexOf(':');
            if (cind >= 0) {
                let name = st.substring(0, cind);
                st = st.substring(cind+1);
            }
            return this.entries.filter((entry) => {
                if (cind >= 0) {
                    if (name === 'word') {
                        return entry.word.includes(st);
                    } else if (name === 'def' || name === 'definition') {
                        return entry.definition.includes(st);
                    }
                } else {
                    return entry.word.includes(st) || entry.definition.includes(st);
                }
            });
        }
    }
});

//settings.deleteAll();
if (!settings.has('storage_path')) {
    let result = dialog.showOpenDialog({properties: ['openDirectory']});
    settings.set('storage_path', result[0]);
}

let storage_path = settings.get('storage_path');
let last_search_text = settings.get('last_search_text');
let last_selected_word = settings.get('last_selected_word');

var Split = require('split.js');
Split(['#div_entries', '#div_detail'], {
    sizes: [20, 80],
    gutterSize: 20,
    minSize: [5, 5],
    direction: 'horizontal',
    cursor: 'col-resize',
    snapOffset: 0
});



function show_alert(obj) {

    let div_alert_background = document.querySelector('#div_alert_background');
    let div_alert_text = document.querySelector('#div_alert_text');
    let div_alert_buttons = document.querySelector('#div_alert_buttons');

    div_alert_text.innerText = obj.message;
    clear_children(div_alert_buttons);
    for (let i=0; i<obj.buttons.length; ++i) {
        let div_bt = document.createElement('div');
        div_bt.innerText = obj.buttons[i];
        div_bt.onclick = function() {
            div_alert_background.style.display = 'none';
            obj.callback(this.innerText);
        }
        div_alert_buttons.appendChild(div_bt);
    }
    div_alert_background.style.display = 'block';
}

window.onbeforeunload = function (e) {
    if (current_entry) {
        settings.set('last_selected_word', current_entry.word);
    }
}
