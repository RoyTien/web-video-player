$(document).ready(function(){


var $startEndSegBtn = $('#startEndSegmentButton')[0];
var $addChapter = $('#addChapter');



$('#startEndSegmentButton').click(function(event) {

	if($(this).text() === "Start Segment"){
		$('.panel').slideUp('slow');
		var $segmentTemplate = $('#segmentTemplate').html();
		$('#segmentList').append($segmentTemplate);
		addChapter.disabled = false;
		$(this).text('End Segment');

	}else{
		addChapter.disabled = true;
		$(this).text('Start Segment');
	}
});


$('#addChapter').click(function(event) {
	var $lastSegment = $('#segmentList').children().last()[0];
	var $chapterTemplate = $('#chapterTemplate')[0];
	var $lastChapterInfoList = $lastSegment.getElementsByClassName("chapter-info-list")[0];
	$lastChapterInfoList.appendChild($chapterTemplate.content.cloneNode(true));

	console.log($lastChapterInfoList);
	console.log($chapterTemplate);
});


// $(".flip").click(function(event) {
// 	console.log($(this));

$(document).on("click" ,".flip",function() {
	if($(this).next('div.panel').attr('style')==="display: none;"){
		$('.panel').slideUp('slow');
		$(this).next('div.panel').slideDown('slow');
	}else{
		$(this).next('div.panel').slideUp('slow');
	}
	


	/*
	@IMPORTANT
	$(this).next('div.panel').slideToggle('slow');*/

});











});