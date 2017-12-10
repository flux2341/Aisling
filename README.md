# Aisling
Aisling is a personal vocabulary manager made with [Electron](https://electronjs.org/), [electron-json-storage](https://github.com/electron-userland/electron-json-storage) and [Split.js](https://nathancahill.github.io/Split.js/).

## Current Features

- view list of entries, view entry detail
- create entry, edit entry, delete entry
- entries are stored as json files

## Todo
- add "are you sure?" to delete button, make 'word cannot be blank' and 'word must be unique' prettier
- settings
    - storage location
    - arrangement of modules, module data
    - last entry open
- prompt for location for storage, save in settings
    - on startup, restore the state that the program was in before it was closed
- add search box on top of word list
    - entering text in the search box filters the displayed words
    - allow searching particular parts of the entry (e.g. word:this definition:that)
- add tags, allow writing tag:colors in the search input
- have items to open wiktionary.org, etymonline.com, etc
    - invoke their api to make it more integrated
- modular system
    - word, definition, tags
    - buttons for searching certain sites
        - in edit mode, allow adding, moving, removing buttons
    - online resources
        - invoke api - wiktionary, etymonline, dictionary.com, thesaurus.com, websters
        - cache result, add refresh button
    - in edit mode - move modules up/down, add a new module, remove a module
    - maybe the ability to have per-entry arrangements and a global default
        - allow selecting multiple entries for doing mass edits
        - link the arrangement with the data, just interpret the entry as-is
- asynchronous searching
