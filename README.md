#JSPaddle
> "It's kinda like JSFiddle but for iPad."

This is an attempt to write a web app which is a prototyping environment for web apps and games (esp. games).

Ever wanted to fiddle around with JavaScript but only had your iPad with you? Love JSFiddle but wish it would work offline?

**This is for you.**

Or at least, that's the idea.

Go to [jspaddle.herokuapp.com](http://jspaddle.herokuapp.com/) on your iPad and add it to your Home Screen!

##Current features

* JavaScript editor

And that's about it for now.

##Planned features

* Offline support
* Local buffer saving
* HTML editor with HAML support (because I love HAML)
* CSS editor with SASS support (because I love SASS)
* Built-in library support (libraries TBD)
* Color-picker
* Drawing tools

> "The best-laid schemes o' mice an' men
> Gang aft agley,
> An' lea'e us nought but grief an' pain,
> For promis'd joy!" 
> – Robert Burns

##Release Notes

###Version 0.0.0

I whipped this together using the excellent [Middleman](http://middlemanapp.com/) tool. Currently uses the [Ace Code Editor](http://ace.ajax.org/), which isn't so great on the iPad but better than a vanilla textarea (maybe?). If anybody has any suggestions for a better editor library, please let me know. I may fork off the Ace editor and see if I can make some improvements, but no promises. My time is less than my ambition!

Deployed this to [Heroku](http://www.heroku.com/) at [jspaddle.herokuapp.com](http://jspaddle.herokuapp.com/) with help from this [gist](https://gist.github.com/1718367) by [meskyanichi](https://github.com/meskyanichi) on deploying Middleman apps to Heroku.