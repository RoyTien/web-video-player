"use strict";

var myVideo = document.getElementById("myVideo");
var startEndSegBtn = document.getElementById('start-end-segment-button');
var addChapter = document.getElementById('add-chapter');

var segmentContainers = document.getElementsByClassName('segment-template-container');
console.log(segmentContainers);

var segmentIndex = 1;
startEndSegBtn.addEventListener('click', function(){
	// Function of Start Segment
	if(startEndSegBtn.value == 'StartSegment'){
		startEndSegBtn.value = 'EndSegment';
		startEndSegBtn.innerText = 'End Segment';
		addChapter.disabled = false;

		insertSegmentTemplateIntoContianer();
	}else{ // Function of End Segment
		startEndSegBtn.value = 'StartSegment';
		startEndSegBtn.innerText = 'Start Segment';
		addChapter.disabled = true;
		hideCollapseContent();
		segmentIndex++;

	}
}, false);

function insertSegmentTemplateIntoContianer(){
	var segtemp = document.getElementById('segment-template');
	var clone = document.importNode(segtemp.content, true);
	var segmentContainer = segmentContainers[0];
	
	segmentContainer.appendChild(clone);

	adjustSegmentBootstrapCollapse(segmentContainer.lastElementChild);

}

function adjustSegmentBootstrapCollapse(currentSegmentCollapse){
	// var panelHeadingCollection = currentSegmentCollapse.getElementsByClassName("panel-heading");

	// var panelHeadingLinkCollection = panelHeadingCollection[0].getElementsByTagName('A');

	// panelHeadingLinkCollection[0].innerText = "Segment " + segmentIndex;

	var segmentHeading = document.getElementById("segmentHeading");
	var segmentPanel = document.getElementById("segmentPanel");

	var panelHeadingLinkCollection = segmentHeading.getElementsByTagName("A");

	var panelHeadingLink = panelHeadingLinkCollection[0];
	

	var segmentHeadingValue = "segmentHeading-" + segmentIndex;
	var segmentPanelValue = "segmentPanel-" + segmentIndex;

	segmentHeading.setAttribute("id",segmentHeadingValue);
	segmentPanel.setAttribute("aria-labelledby",segmentHeadingValue);


	panelHeadingLink.innerText = "Segment " + segmentIndex;
	
	panelHeadingLink.setAttribute("href","#" + segmentPanelValue);
	panelHeadingLink.setAttribute("aria-controls", segmentPanelValue);

	segmentPanel.setAttribute("id", segmentPanelValue);

	console.log(segmentHeading);
	console.log(segmentPanel);
}


function hideCollapseContent(){
	var lastestSegmentPanel = document.getElementById("segmentPanel-" + segmentIndex);
	console.log(lastestSegmentPanel);
	lastestSegmentPanel.collapse('hide');
}
