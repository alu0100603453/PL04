var expect = chai.expect;
var tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};

function replaceTag(tag) {
    return tagsToReplace[tag] || tag;
}

function safe_tags_replace(str) {
    return str.replace(/[&<>]/g, replaceTag);
}


describe('CSV generator', function() {
    'use strict';
    var converted1,converted2,converted3,converted4,converted5,converted6;
    var ourQuiz, form;
    var contestData = {
        question1: 'var a = "hello"; // initialize a     var b = function(x) {            var c = 3;               return x+c;             };',
        answer1: 'res',
        question2: 'var a = "hello"; // initialize a     var b = "GoodBye";     var c = function(x) {             var d = 3;               return x+d;             };     var e = function(x) {             var f = 5;               return x-f;             };',
        answer2: 'res',
        question3: '	var a/&#@:_;!|! = "hello";',
        answer3: 'res',
        
    };

    before(function() {
        //ourQuiz = new Quiz(contestData);
        //form = jQuery('body').append(formMarkup);
    });

    after(function() {
        jQuery('#fixture').remove();
    });

    beforeEach(function() {
    document.getElementById('INPUT').value = contestData.question1;
	main();
	converted1 = document.createElement("div");
	converted1.innerHTML = document.getElementById('result').innerHTML;
	//------------
	document.getElementById('INPUT').value = contestData.question2;
	main();
	converted2 = document.createElement("div");
	converted2.innerHTML = document.getElementById('result').innerHTML;
	//------------
	document.getElementById('INPUT').value = contestData.question3;
	main();
	converted3 = document.createElement("div");
	converted3.innerHTML = document.getElementById('result').innerHTML;
    });
    
    it('var a = "hello"; // initialize a     var b = function(x) {            var c = 3;               return x+c;};', function() {
	expect(converted1.innerHTML).to.equal(contestData.answer1);
	document.getElementById('test_output1').innerHTML=safe_tags_replace(contestData.answer1);
    });
    it('var a = "hello"; // initialize a     var b = function(x) {            var c = 3;               return x+c;             };', function() {
	expect(converted2.innerHTML).to.equal(contestData.answer2);
	document.getElementById('test_output2').innerHTML=safe_tags_replace(contestData.answer2);
    });
    it('var a = "hello"; // initialize a     var b = function(x) {            var c = 3;               return x+c;             };', function() {
	expect(converted3.innerHTML).to.equal(contestData.answer3);
	document.getElementById('test_output3').innerHTML=safe_tags_replace(contestData.answer3);
    });
});


