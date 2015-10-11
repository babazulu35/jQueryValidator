/**
* Jquery Simple Form Validation
* @author Brewww Interactive <hakan@brewww.com>
* @package Jquery  < 1.9
* @company Vw
*/

(function(window,$) {
	"use strict"

var VwFormValidate = function(element,options)
{
	this.element = element;
	this.$element = $(element);
	this.options = options;
	this.metatag = this.$element.data('vwvalidate');
	this.fieldoptions = this.$element.data('options');
	
}
var defaults = {
	inputType:null
}
VwFormValidate.prototype.init = function()
{
	this.config = $.extend({},this.defaults,this.options,this.metatag,this.fieldoptions);
	console.log(this.config.inputType);
	switch(this.config.inputType)
	{	
		case 'submit':
			this.onSubmitFormCheck();
			break;
		case 'button':
			this.onButtonClickSubmitForm();
			break;
		case undefined:
			console.log("lütfen Seçni");
			break;
		default:
			console.log("Lütfen sadece input type olarak submit ve button giriniz");	

	}
	return this;
	
}
VwFormValidate.prototype.findWhoisSetForValidation =  function()
{
	var self = this;
	this.$element.find('input[type!="'+ this.config.inputType +'"]').each(function(index,elements) {
		
		var elementOptions = $(elements).data('options');
		if(elementOptions === undefined)
		{
			
		}
		else if(elementOptions.required === undefined)
		{
			
		}
		else if(elementOptions.required === false)
		{
			
		}
		else
		{
			//console.log("This input with the id " + $(elements).attr('id') + " has the required field");
			self.thisInputFieldsHasRequiredTrue(elementOptions,index);
		}
	});
}

VwFormValidate.prototype.flashMessages = function(div,messages)
{
	return $('#' + div).html(messages);
}
VwFormValidate.prototype.onSubmitCheck = function()
{

}
VwFormValidate.prototype.thisInputFieldsHasRequiredTrue = function(elementOption,indexOfElement)
{	
	var elementId = $("input")[indexOfElement].id;

	this.checkTheEmptyInputValue(elementOption,$('#' + elementId).val(),indexOfElement);
}
VwFormValidate.prototype.checkTheEmptyInputValue =  function(elementOption,theInputValue,index)
{
	var indexs = [];
	if(theInputValue === "")
	{ 
		this.flashMessages(elementOption.messageDiv,elementOption.flashMessage);
		
	}	
	else
	{
		$('#' + elementOption.messageDiv).html(""); /* Clear the Flash Messages */		
	}	
}

VwFormValidate.prototype.formDataSet = function()
{

}

VwFormValidate.prototype.onSubmitFormCheck = function()
{
	var self = this;
	this.$element.submit(function(event) {
		event.preventDefault();
		self.findWhoisSetForValidation();
	});
}

VwFormValidate.prototype.onButtonClickSubmitForm = function()
{
	var self = this;
	$("input[type='button']").click(function(event) {
		event.preventDefault();
		self.findWhoisSetForValidation();
	});
}

VwFormValidate.prototype.theAjaxRequest = function()
{

}

/**
* Js'i jQuery Plugini olarak Tanımlıyoruz
*/
 $.fn.vwformvalidation = function(options)
 {
   return this.each(function() {
     new VwFormValidate(this,options).init();
   });
 }

})(window,jQuery);