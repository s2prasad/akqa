$(document).ready(function() {   
    $('#showList').on("click",function(){
	    $(this).text(function(i,old){
	    	if(old=="See More"){
	    		$("#restSongsList").removeClass("hidden-sm").addClass("visible-sm").addClass("visible-xs");
	    	}
	    	else {
	    		$("#restSongsList").removeClass("visible-sm").removeClass("visible-xs").addClass("hidden-sm");
	    	}
	        return old === "See More" ? "See Less" : "See More";
	    });
	});
});