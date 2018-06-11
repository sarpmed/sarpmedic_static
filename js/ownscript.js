$(".nav-tabs a.nav-link").click(function(){
	var x = $(this).attr("href");
	x = x.replace("#", "");
	$(".tab-content .tab-pane").each(function(){
		var y = $(this).attr("id");
		if (x == y) $(this).addClass("active show");
		else $(this).removeClass("active show");
	});
});

$('#others').material_chip({
    placeholder:'Add Another Disease.',
    secondaryPlaceholder: 'Add Disease And Press Enter.',
});

$('#currentmed').material_chip({
    placeholder:'Add Another Medication.',
    secondaryPlaceholder:'Add Current Medication.',
});

$('#sarpnav .nav-tabs li a').click(function(e) {
    $('.nav-tabs li a.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});