(function() {
	//пространство имён
	window.App = {
		Models: {},
		Collections:{},
		Views: {}
	};
	//шаблон
	window.template = function(id) {
	   return _.template( $('#' + id).html());
	};

App.Models.Task = Backbone.Model.extend({});
App.Views.Task = Backbone.Model.extend({
	tagName: 'li',
	render: function () {
		this.$el.html(this.model.get('title') );
		return this;
	}
});
App.Collections.Task = Backbone.Collections.extend({
	model: App.Models.Task
});

App.Views.Tasks = Backbone.Collections.extend({
	 tagName: 'ul',
	 render: function () {
		  this.collection.each(this.addOne,this);
		  return this;
	 },
	 addOne: function (task) {
		 // создавать новый дочерний вид 
		 var taskView = new App.Views.Task({ model: task});
		 //добавлять его в корневой элемент 
		 this.$el.append(taskView.render().el);
	 }
})

var tasksCollection = new App.Collections.Task([
{
	title: 'Сходить в магазин',
	priority: 4
},
{
	title: 'Получить почту',
	priority: 3
},
{
	title: 'Сходить на работу',
	priority: 5
},
]);
var taskView = new App.Views.Tasks({collection:  tasksCollection})

});