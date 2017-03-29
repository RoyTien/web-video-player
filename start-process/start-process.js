"use strict";

$( document ).ready(function() {



//For Testing, enable all Navivation Buttons
$('.stage-button').removeClass('disabled');

$(function () {
	/*
	 * Fade In Navitaion Bar and Category Section at the begining.
	 * Add Class{'active-section'} to '#cateSection'
	 */
	$('#cateSection').fadeIn("slow");
	$('#cateSection').addClass('active-section');
	$('#navSection').fadeIn("slow");


	//
	// // Disable Rest Navivahttp://api.jquery.com/attr/#attr-attributeName-valuetion Buttons
	// $('.stage-button').addClass('disabled');
	// $('.stage-button').prop('aria-disabled', true);
	// $('.stage-button').attr({ tabindex: '-1' });
	
	// // Release Category Navigation Button
	// $('#cateStageBtn').removeClass('disabled');
	// $('#cateStageBtn').prop('aria-disabled', false);
	// $('#cateStageBtn').attr({ tabindex: '0' });

});

$('.stage-button').click(function() {
	if($(this).hasClass('active')){
		return ;
	}else{
		// Active New Nav Button
		$('.stage-button.active').removeClass('active');
		$('.stage-button.active').text('Hello');
		$(this).addClass('active');
		
		//Switch active section
		console.log($(this).text());
		switch($(this).text()){
			case "Category":
				$('.active-section').removeClass('active-section').slideUp();
				$('#cateSection').addClass('active-section').slideDown();
				break;
			case "Template":
				$('.active-section').removeClass('active-section').slideUp();
				$('#tempSection').addClass('active-section').slideDown();
				break;
			case "Color":
				$('.active-section').removeClass('active-section').slideUp();
				$('#colorSection').addClass('active-section').slideDown();
				break;
			case "Feature":
				$('.active-section').removeClass('active-section').slideUp();
				$('#featSection').addClass('active-section').slideDown();
				break;
			case "Save":
				$('.active-section').removeClass('active-section').slideUp();
				$('#saveSection').addClass('active-section').slideDown();
				break;
		}
	}
});



$('#cateAppName').on("change paste keyup",function(){
	if($(this).val()){  //if it is not blank.
		// $('#cateNextBtn').text('Next').fadeIn();
		if($("#cateNextBtn").text() != "Next"){

			$('#cateNextBtn').prop('disabled', false);

			$("#cateNextBtn").fadeOut('slow',function() {
				$(this).text("Next").fadeIn('slow');
			});

			$('#tempStageBtn').removeClass('disabled');
		}
	}else{
		$("#cateNextBtn").fadeOut('slow',function() {
			$(this).text("Input App Name and Choose Category").fadeIn('slow');
		});

		// Disable Next Button
		$('#cateNextBtn').prop('disabled', true);

		// Disable Rest Navivahttp://api.jquery.com/attr/#attr-attributeName-valuetion Buttons
		$('.stage-button').addClass('disabled');
		$('.stage-button').prop('aria-disabled', true);
		$('.stage-button').attr({ tabindex: '-1' });
		
		// Release Category Navigation Button
		$('#cateStageBtn').removeClass('disabled');
		$('#cateStageBtn').prop('aria-disabled', false);
		$('#cateStageBtn').attr({ tabindex: '0' });
	}
});



/*
 * Category Selection Buttons Bind With Category Carousel
 */
var carouselCateIndicators = $('#carouselCateIndicators');

$('#cateBtnFitness').on('click', function() {
	carouselCateIndicators.carousel(0);
});

$('#cateBtnYoga').on('click', function() {
	carouselCateIndicators.carousel(1);
});

$('#cateBtnSport').on('click', function() {
	carouselCateIndicators.carousel(2);
});

$('#cateBtnEducation').on('click', function() {
	carouselCateIndicators.carousel(3);
});


/*
 * Template Selection Buttons Bind With Template Carousel
 */
var carouselTempIndicators = $('#carouselTempIndicators');
 
$('#tempBtnGridView').on('click', function() {
	carouselTempIndicators.carousel(0);
});

$('#tempBtnListView').on('click', function() {
	carouselTempIndicators.carousel(1);
});


/*
 * Next Buttons Click Functions
*/
$("#cateNextBtn").click(function() {
	$( "#tempStageBtn" ).trigger( "click" );
});

$("#tempNextBtn").click(function() {
	$( "#colorStageBtn" ).trigger( "click" );
});

$("#colorNextBtn").click(function() {
	$( "#featStageBtn" ).trigger( "click" );
});

$("#featNextBtn").click(function() {
	$( "#saveStageBtn" ).trigger( "click" );
});



});