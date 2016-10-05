var app = angular.module('app',[]);
app.controller('myCtrl',function($scope){
	$scope.titleList = [
		{title:"日志的开山之作",href:"http://huanglihang.cn/html/blog/firstSection.html"},
		{title:"利用JavaScript编写计算器工具",href:"http://huanglihang.cn/html/blog/secondSection.html"},
		{title:"JS面向对象编程（一）",href:"http://huanglihang.cn/html/blog/JSobject1.html"},
		{title:"JS面向对象编程（二）",href:"http://huanglihang.cn/html/blog/JSobject2.html"},
		{title:"DOM事件流与event对象学习笔记",href:"http://huanglihang.cn/html/blog/domStream.html"},
		{title:"利用angularJS编写搜索工具",href:"http://huanglihang.cn/html/blog/angularForSearch.html"}
	];
});