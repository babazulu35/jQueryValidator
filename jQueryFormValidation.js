/**
* Jquery Simple Form Validation
* @author Brewww Interactive <hakan@brewww.com>
* @package Jquery  < 1.9
* @company Vw
*/

(function(window,$) {
	'use strict'

var VwFormValidate = function(element,options)
{
	this.element = element;
	this.$element = $(element);
	this.options = options;
	this.metatag = this.$element.data('vwvalidate');
}
var defaults = {

}
VwFormValidate.prototype.initialize = function()
{
	this.config = $.extend({},defaults,this.options,this.metatag);
	return this;
}

});	