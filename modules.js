

module.exports = {
  'module-word': {
    props: ['mode', 'entry'],
    template: String.raw`<div>
                            <input v-show="mode === 'edit'" v-model="entry.word" id="input_word">
                            <h2 v-show="mode === 'view'">{{ entry.word }}</h2>
                        </div>`,
    data() {
        return {
            name: 'word'
        }
    }
  },
  'module-definition': {
    props: ['mode', 'entry'],
    template: String.raw`<div>
                            <textarea v-show="mode === 'edit'" v-model="entry.definition" class="scrollable"></textarea>
                            <span v-show="mode === 'view'" id="span_definition">{{ entry.definition }}</span>
                        </div>`,
    data() {
      return {
        name: 'definition'
      }
    }
  },
  'module-tags': {
    props: ['mode', 'entry', 'search_text'],
    template: String.raw`<div id="div_tags">
                            <input id="input_tags" type="text" v-show="mode === 'edit'" v-model="entry.tags"/>
                            <div class="bt_tag" v-for="tag in entry.tags.split(/[^\w]/).filter(Boolean)" v-show="mode === 'view'" v-on:click="select_tag(tag)">
                                {{tag}}
                            </div>
                        </div>`,
    data() {
      return {
        name: 'tags'
      }
    },
    methods: {
      select_tag(tag_name) {
          this.$emit('update:search_text', 'tag:'+tag_name);
      }
    }
  }
}
