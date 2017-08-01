$(document).ready(function() {
	$(".p11").show();
	$(".p12").hide();
	$(".p13").hide();
	$(".p21").show();
	$(".p22").hide();
	$(".p23").hide();
	$(".h11").click(function() {
		$(".p11").toggle(500);
		$(".p12").hide(300);
		$(".p13").hide(300);
	});
	$(".h12").click(function() {
		$(".p12").toggle(500);
		$(".p11").hide(300);
		$(".p13").hide(300);
	});
	$(".h13").click(function() {
		$(".p13").toggle(500);
		$(".p11").hide(300);
		$(".p12").hide(300);
	});
	$(".h21").click(function() {
		$(".p21").toggle(500);
		$(".p22").hide(300);
		$(".p23").hide(300);
	});
	$(".h22").click(function() {
		$(".p22").toggle(500);
		$(".p21").hide(300);
		$(".p23").hide(300);
	});
	$(".h23").click(function() {
		$(".p23").toggle(500);
		$(".p21").hide(300);
		$(".p22").hide(300);
	});
});