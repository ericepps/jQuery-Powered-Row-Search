#What does it do?
This is a jQuery plugin/snippet that allows you to search rows of information.

The rows can be table rows or `<div>`s or whatever you like; it all depends on the classes you specify.  

The real treat is the ability to do multiple 'filters' in the form of a compound jQuery pseudoclass selector. This functionality is demonstrated with the 2 select elements containing the same options; they filter down to **only the rows that match both selected options**.

#How do I use it?
Minimum file requirement:
Grab
+ jq-row-search.css
+ jq-row-search.js
+ index.html
and fire them up. The `div#container` is the main box that holds the example rows of data.  

jq-row-search.css contains some basic styles for the table so things are readable.

jq-row-search.js contains the searching code. You will need to modify the jQuery selectors to fit your setup, unless you mold your elements' classes to fit the predefined ones in index.html.

#Credits
jQuery - http://jquery.com  
HTML5 Boilerplate - http://html5boilerplate.com  
Viishaal - http://api.jquery.com/contains-selector/#comment-88433188  
namklabs - http://github.com/namklabs  

###Todo
+ Outline exactly which jQuery selectors need to be changed/customized  
+ Add .gitignore  


[agencymabu.com](http://agencymabu.com) | [@agencymabu](http://twitter.com/agencymabu) | [agencymabu@github](http://github.com/agencymabu)
