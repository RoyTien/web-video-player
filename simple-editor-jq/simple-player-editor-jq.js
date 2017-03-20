$(document).ready(function(){


var $startEndSegBtn = $('#startEndSegmentButton')[0];
var $addChapter = $('#addChapter');



$('#startEndSegmentButton').click(function(event) {

	if($(this).text() === "Start Segment"){
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
	
});










});