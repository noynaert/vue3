# vue3
Tracking along udemy course on vue

https://www.udemy.com/share/101WzMAEQcdllXRQ==/

8. Set up environment.  Prettier Code Formatter extension. Make sure esbenp.prettier-vscode is set as athe default formatter in preferences.  I also like to format on save, paste, and type.

I like spell checker for code by Sidestreet Software.

## Section 02

### video 13

We have to link the app.js file to the html

Create a view app

    const app = Vue.createApp();

    app.mount('#user-goal') 

    * The argument is any selector.  
    * Does it have to be unique??????
    * Often is an #id.
    * app.mount connects this code to a block of html.

.createApp takes an object as its argument.  The object has options used by the app.

The object must have specified fields like data:

Data takes a function.  It may be defined either way:

    data: function(){}

or the shorthand notation:

    data() { }

***The data function must return an object.***

Interpolation only works between html tags.  It would not work inside something like an href="{{here}}"

### video 14

{{ }}  Interpolation Syntax

### video 15 Binding Attreiburttes

Because Interpolation only happens between html tags, we need to use v-bind directive to change things like attributes.

### video 16

methods: is like data.  Except that Methods takes an object that contains methods (functions).

We can execute simple JavaScript statements inside the {{}}.  It can't be complex statements like if.  The most common thing we will put in here is a function call to a method defined in method:

### video 17

Use of this. keyword.  It isn't quite like normal JavaScript this.  Vue merges all the data into a global Vue apt object.

### video 18

v-html directive and it's weird syntax inside another tag.  There are cross-server security risks if you are not careful.

### Video 19

Emphasizes that each vue app can only control one part of your html code.  It is usually given an id.
