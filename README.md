# Aisling
a personal vocabulary manager made with Electron

Current Features
- hello world :)

Todo Features
- store a list of words definitions tags in a local database
- display that list on the left, with a text box at the top for searching
    - entering text in the search box filters the displayed words
    - allow searching particular parts of the entry (e.g. word:this definition:that)
- display a word detail page, allow the user to enter a word and definition
    - view mode
    - edit mode
        - change word, definition
        - 
        - move modules up/down
- on startup, restore the state that the program was in before it was closed
- add tags, allow writing tag:colors in the search input
- have links to open wiktionary.org, etymonline.com, etc
    - invoke their api or embed an iframe to make it more integrated
- modular system
    - word, definition, tags
    - online resources (cache, regularly try to update it)
        - wiktionary, etymonline, dictionary.com, thesaurus.com, websters
    - each module would need its own view / edit mode
        - embed the html inside the 
    - each module would need to give the entry an attribute to be saved with
    - ability to change order (edit mode)
    - maybe keep it simple - all entries have the same arrangement
        - the gui wouldn't change between entries
    - store additional data as part of the entry in the database
    - maybe the ability to have per-entry arrangements and a global default
        - allow selecting multiple entries for doing mass edits
    - maybe link the arrangement with the data, just interpret the entry as-is
- asynchronous searching
