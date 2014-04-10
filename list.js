var Gaffa = require('gaffa'),
    crel = require('crel'),
    TemplaterProperty = require('gaffa/templaterProperty');

function List(){
    this.views.list = new Gaffa.ViewContainer(this.views.list);
    this.views.empty = new Gaffa.ViewContainer(this.views.empty);
}
List = Gaffa.createSpec(List, Gaffa.ContainerView);
List.prototype._type = 'list';

List.prototype.render = function(){
    var renderedElement = crel(this.tagName || 'div');

    this.views.content.element = renderedElement;
    this.views.list.element = renderedElement;
    this.views.empty.element = renderedElement;
    this.renderedElement = renderedElement;

};

List.prototype.list = new TemplaterProperty({
    viewsName: 'list'
});

module.exports = List;