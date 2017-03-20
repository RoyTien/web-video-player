$(document).ready(function(){


var $startEndSegBtn = $('#startEndSegmentButton')[0];
var $addChapter = $('#addChapter');
var $submitBtn = $('#submitButton')[0];
var $myVid = $('#myVideo')[0];


$('#startEndSegmentButton').click(function(event) {

	if($(this).text() === "Start Segment"){
		$('.panel').slideUp('slow');
		var $segmentTemplate = $('#segmentTemplate').html();
		$('#segmentListForm').append($segmentTemplate);

		addStartTimeIntoSegment();


		addChapter.disabled = false;
		$submitBtn.disabled = true;
		$(this).text('End Segment');

	}else{
		addEndTimeIntoSegment();

		addChapter.disabled = true;
		$submitBtn.disabled = false;
		$(this).text('Start Segment');
	}
});


$('#addChapter').click(function(event) {
	var $lastSegment = $('#segmentListForm').children().last()[0];
	var $chapterTemplate = $('#chapterTemplate')[0];
	var $lastChapterInfoList = $lastSegment.getElementsByClassName("chapter-info-list")[0];
	$lastChapterInfoList.appendChild($chapterTemplate.content.cloneNode(true));
});

function addStartTimeIntoSegment(){
	let $lastSegment = $('#segmentListForm').children().last()[0];
	let startTime = $lastSegment.getElementsByTagName('INPUT')[1];
	startTime.value = formatTime($myVid.currentTime);
}

function addEndTimeIntoSegment(){
	let $lastSegment = $('#segmentListForm').children().last()[0];
	let startTime = $lastSegment.getElementsByTagName('INPUT')[2];
	startTime.value = formatTime($myVid.currentTime);
}
// $(".flip").click(function(event) {
// 	console.log($(this));

$(document).on("click" ,".flip", function() {
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

$('#submitButton').click(function(event) {

	var formData = JSON.stringify($("#segmentListForm").serializeArray());

	console.log(formData);
	$.ajax({
		type: "POST",
		url: "serverUrl",		
		data: formData,
		success: function(){},
		dataType: "json",
		contentType : "application/json"
	});
});




// Covert the time from seconds to mm:ss:ms
function formatTime(initiationTime) {
	var hours = Math.floor(initiationTime / 3600);
	hours = (hours >= 10) ? hours : "0" + hours;
	var minutes = (Math.floor((initiationTime / 60) % 60));
	minutes = (minutes >= 10) ? minutes : "0" + minutes;
	var seconds = Math.floor(initiationTime) % 60;
	seconds = (seconds >= 10) ? seconds : "0" + seconds;
	return hours + ":" + minutes + ":" + seconds;
}





});