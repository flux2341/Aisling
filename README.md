# Aisling
Aisling is a personal vocabulary manager made with [Electron](https://electronjs.org/), [electron-json-storage](https://github.com/electron-userland/electron-json-storage), [electron-settings](https://github.com/nathanbuchar/electron-settings) and [Split.js](https://nathancahill.github.io/Split.js/).

## Current Features

- view list of entries, view entry detail
- create entry, edit entry, delete entry
- entries are stored as json files in a folder
- half-decent alert/confirm dialog
- settings for 'storage location' and 'last entry open', file dialog for opening storage location
- loads previous state on startup (search text, selected word)
- search entries
    - prefix with 'word:', 'definition:', 'tag:', or 'synonym' to search specific parts
- modules
    - word
    - definition
    - tags
        - selecting a tag filters the entry list
    - synonyms
        - selecting a synonym opens that entry
- dynamically add entry attributes for new modules
- tags and synonyms are split on any non-word character
- put focus on the word input field after selecting 'edit' and 'new'

## Todo
- menu items
    - open storage location
    - show/hide module labels (save as a setting)
    - export to html, csv, txt
    - import from csv, txt
    - hide menu (show with alt)
- allow users to press down/up arrow to move through the entries
- find a way to build modules, let them have persistent data
    - save and restore any variables they declare (besides those over-written by the entry)
- 'x' button in search input to clear the search text
- have the input fields show up as the same size and at the same place as the view elements
- module system
    - additional modules
        - synonyms, antonyms, 'related'
        - # stars / 5
        - 'part of speech' - proper noun
        - links to wiktionary, etymonline, dictionary.com, thesauris.com, websters
            - edit mode - allow adding, moving, removing buttons
        - make api call to wiktionary, etymonline.com, etc, cache + show result, periodically update
            - refresh button
    - have the modules control how search results are filtered, let them supply the prefix
    - ability to load from an external folder
    - buttons for searching certain sites
        - in edit mode, allow adding, moving, removing buttons
    - maybe the ability to have per-entry arrangements and a global default
        - allow selecting multiple entries for doing mass edits
        - link the arrangement with the data, just interpret the entry as-is
    - page for editing which modules are shown
        - add module button
        - on each module - move up, move down, remove, change type
        - save / cancel changes
        - update the main page automatically as a preview
        - load modules from an external source
- settings page
- asynchronous searching
- grand plans
    - generalize into a note taking / information organizing app, add dates to track events
    - calendar view, etc
    - put on the web with paid accounts, no advertising

## Random Junk


have top-right buttons use position:relative so the input_word field doesn't overlap with them?


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

