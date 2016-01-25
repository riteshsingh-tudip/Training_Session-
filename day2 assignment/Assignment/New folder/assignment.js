$(document).ready(function(){
    $("#flip").click(function(){
        $("#studentDiv").slideToggle("slow");
    });



	 $("#addstudent").hide();
	$("#add").click(function(){
        $("#addstudent").slideToggle();
    });

		$("#closeAddStu").click(function(){
        $("#addstudent").hide();
    });

	 $("#removestudent").hide();
	$("#remove").click(function(){
        $("#removestudent").slideToggle();
    });

	$(".closeDelStu").click(function(){
        $("#removestudent").hide();
    });
	
	 $("#updatestudent").hide();
	$("#update").click(function(){
        $("#updatestudent").slideToggle();
    });
	});