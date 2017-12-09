
class ModuleWord {
    constructor(container) {
        this.show_word = document.createElement('h2');
        this.input_word = document.createElement('input');
        container.appendChild(this.show_word);
        container.appendChild(this.input_word);
    }
    switch_to_view_mode(entry) {
        this.show_word.innerText = entry.word;
        this.show_word.style.display = 'block';
        this.input_word.style.display = 'none';
    }
    switch_to_edit_mode(entry) {
        this.input_word.value = entry.word;
        this.show_word.style.display = 'none';
        this.input_word.style.display = 'block';
    }
    get_search_prefix() {
        return 'word'
    }
    save(entry) {
        entry.word = this.input_word.value;
    }
    search(entry, v) {
        return entry.word.includes(v);
    }
}


class ModuleDefinition {
    constructor(container) {
        this.show_definition = document.createElement('span');
        this.input_definition = document.createElement('textarea');
        container.appendChild(this.show_definition);
        container.appendChild(this.input_definition);
    }
    switch_to_view_mode(entry) {
        this.show_definition.innerText = entry.definition;
        this.show_definition.style.display = 'block';
        this.input_definition.style.display = 'none';
    }
    switch_to_edit_mode(entry) {
        this.input_definition.value = entry.definition;
        this.show_definition.style.display = 'none';
        this.input_definition.style.display = 'block';
    }
    get_search_prefix() {
        return 'definition'
    }
    save(entry) {
        entry.definition = this.input_definition.value;
    }
    search(entry, v) {
        return entry.definition.includes(v);
    }
}
