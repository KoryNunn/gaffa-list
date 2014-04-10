# gaffa-list

list view for gaffa

## Install:

    npm i gaffa-list

## Add to gaffa:

    gaffa.registerConstructor(require('gaffa-list'));

# API

## Properties (instanceof Gaffa.Property)

### list (get)

The lists items.

The value can be any object that can be itterated with

    for(var key in value)

Array's will only be itterated on their items, not their keys.

To assign a template to be rendered for each item, assign a View to the properties .template key:

    // A label to be used as a template
    var myLabel = new Label();

    // Bind the labels text to it's items value.
    // an empty binding ('[]') will resolve to it's current path
    // See [here](https://github.com/gaffa-tape/gaffa-js/wiki/Paths#what-is-this-sourcepath-i-see-above)
    myLabel.text.binding = '[]';

    // The list view
    var myList = new List();

    // Bind the list to an array of values.
    myList.list.binding = '[someArray]';

    // Assign the label to be the template to be cloned for each item in the list.
    myList.list.template = myLabel