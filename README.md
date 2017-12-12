# Aisling
Aisling is a personal vocabulary manager made with [Electron](https://electronjs.org/), [electron-json-storage](https://github.com/electron-userland/electron-json-storage), [electron-settings](https://github.com/nathanbuchar/electron-settings) and [Split.js](https://nathancahill.github.io/Split.js/).

## Current Features

- view list of entries, view entry detail
- create entry, edit entry, delete entry
- entries are stored as json files
- half-decent alert/confirm dialog
- settings for 'storage location' and 'last entry open', file dialog for opening storage location

## Todo
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


## Random Junk


have top-right buttons use position:relative so the input_word field doesn't overlap with them?
    or give them dark backgrounds?


menu options
    top nav vs expandable menu on right
        top nav, toggle with alt
    show frequently accessed buttons, then + to show more
        hide + in edit mode

    file
        open storage folder
        export to html, to csv
        close
    settings
        edit settings - open with text editor
            syntax highlighting, split view with default settings?
        reset settings
    entries
        new entry
        edit entry
        delete entry
    lookups
    edit mode
        save
        cancel
    


settings
    storage location
    last search text
    last word selected
    module list, data (e.g. which sites to have search buttons for)
    list of frequent buttons to show ot the top?
    last picked html export template
    module_path - where to load additional modules from
    lookup_path - where to load additional lookups from



select from a set of templates when exporting to html
    preview
    make links between words if using synonyms
    define your own template


| site | url |
|--- |--- |
| wiktionary.org | https://en.wiktionary.org/wiki/%1s |
| etymonline.com | http://www.etymonline.com/index.php?allowed_in_frame=0&search=%1s |
| rhymezone.com | http://www.rhymezone.com/r/rhyme.cgi?Word=%1s&typeofrhyme=perfect&org1=syl&org2=l&org3=y |
| oxforddictionaries.com | https://en.oxforddictionaries.com/definition/us/%1s |
| oxforddictionaries.com/thesaurus | https://en.oxforddictionaries.com/thesaurus/%1s |
| dictionary.com | http://www.dictionary.com/browse/%1s?s=t |
| thesaurus.com | http://www.thesaurus.com/browse/%1s?s=t |
| merriam-webster.com/dictionary/ | https://www.merriam-webster.com/dictionary/%1s |
| merriam-webster.com/thesaurus/ | https://www.merriam-webster.com/thesaurus/%1s |

