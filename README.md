gongshow
========

A Hack to add a "Gong Show" Mode to Google Docs Presentations

One of the most important things when running a "Gong Show" or lightning talk round is actually keeping things on schedule.  This javascript adds a five minute timer to the top of Google Docs presentations full screen mode so presenters (and more importantly the audience) know when time is up.

Features:
* Mostly transparent, but blinks grey at the top of every minute.
* Turns red for the last 30 seconds.
* Resets by pressing the "." (often the 'blank' button on presentations remotes).

To use: Load up the google doc presentation with everyones slides in it.  Open the javascript console and past in the contents of the js file.

Known Issues (this is definitely a hack... there are many):
* Only tested with Chrome and GoogleDocs as of 9/24/2013.
* Should probably be a chrome plugin instead of javascript you manually inject.
* Sometimes for one second the counter is off by a minute (rounding error?).
* Sometimes the timer disappears if you go back and forth from fullscreen mode too much (typing setupTimer(); into the console fixes it).

Contributions welcome :)
