# Aisling
Aisling is a personal vocabulary manager made with [Electron](https://electronjs.org/), [electron-json-storage](https://github.com/electron-userland/electron-json-storage), [electron-settings](https://github.com/nathanbuchar/electron-settings) and [Split.js](https://nathancahill.github.io/Split.js/).

## Current Features

- view list of entries, view entry detail
- create entry, edit entry, delete entry
- entries are stored as json files
- half-decent alert/confirm dialog
- settings for 'storage location' and 'last entry open', file dialog for opening storage location
- loads previous state on startup (search text, selected word)
- search entries
    - prefix with 'word:', 'definition:', or 'tag:' to search specific parts
- tagging
    - for entering tags, split on any non-word character
    - selecting a tag filters the search results by the tag
- put focus on the word input field after selecting 'edit' and 'new'

## Todo
- find a way to build modules, let them have persistent data
    - save and restore any variables they declare (besides those over-written by the entry)
- 'x' button in search input to clear the search text
- mass upload from txt, csv
- have the input fields show up as the same size and at the same place as the view elements
- menu options
    - show/hide module titles (save as a setting)
    - export to txt (tabbed in), html, csv
- module system
    - additional modules
        - synonyms, antonyms, 'related'
        - # stars / 5
        - 'part of speech' - proper noun
        - links to wiktionary, etymonline, dictionary.com, thesauris.com, websters
            - edit mode - allow adding, moving, removing buttons
        - make api call to wiktionary, etymonline.com, etc, cache + show result, periodically update
            - refresh button
    - module labels
        - needed for synonyms and antonyms
    - ability to load from an external folder
    - buttons for searching certain sites
        - in edit mode, allow adding, moving, removing buttons
    - in edit mode - move modules up/down, add a new module, remove a module
    - maybe the ability to have per-entry arrangements and a global default
        - allow selecting multiple entries for doing mass edits
        - link the arrangement with the data, just interpret the entry as-is
    - a way for modules to add data to an entry, put a method in each module?
        - otherwise I have to change the null entry definition in code each time I add a module
        - don't bother removing attributes when a module is removed from the view
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
    - calendar view, 
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

