//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
$(document).ready(function() {
jQuery.event.special.touchstart = {setup: function(_,ns,handle) {this.addEventListener("touchstart", handle, {passive: !ns.includes("noPreventDefault")});}};
jQuery.event.special.touchmove = {setup: function(_,ns,handle) {this.addEventListener("touchmove", handle, {passive: !ns.includes("noPreventDefault")});}};
$(".audioPlay").keydown(function(e){if (e.which != 9){$(this).click()};})
$("#buttonUp").keydown(function(e) {if (e.which == 27) {$("#nav li ul").css("margin-left","-999em");}if (e.which!=9 && e.which!=13 && e.which!=40 && e.which!=38) {
$("#nav li ul").css("margin-left","0");$("#sub li:first a").focus();$("#sub li:last a").blur(function(){$("#nav li ul").css("margin-left","-999em");})}});
$(".submenu").keydown(function(e) {var actual=$(this).find("a").attr("id");var num=parseInt(actual.substring(2,500).trim());if (e.which!=9 && e.which!=40 && e.which!=38) {$("#nav li ul").css("margin-left","-999em");}
if (e.which==40) {num++;if ($("#s_"+num.toString()).length){setTimeout(function(){$("#s_"+num.toString()).get(0).focus()},1);}}
if (e.which==38) {num--;if ($("#s_"+num.toString()).length){setTimeout(function(){$("#s_"+num.toString()).get(0).focus()},1);}}});
var bWords = document.getElementsByTagName("b");if (bWords.length){for (x=0;x<bWords.length;x++){bWords[x].className="hideB";}}$("#boldBut").click(function() {hideBold();});$("#boldBut").keydown(function(e) {if (e.which!=9) {hideBold();}});
$("#ardoraBody").keydown(function(e){if (e.which==27){var canvas = document.getElementById("ardoraActCanvas");if($("#ardoraActCanvas").is(":visible")){document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";canvas.width = canvas.width;$("body").css("overflow", "visible");$("#ardoraActCanvas").attr({"width": 2,"height": 2});}}});
$("#i_1").keydown(function(e) {
if (e.which!=9){imaUp('Portada_resources/media/imaLarge/ti_Back_to_School_Classroom_Announcement_in_Pink_and_White_Pastel_Scrapbook_Style.jpg');}});
$("#i_2").keydown(function(e) {
if (e.which!=9){imaUp('Portada_resources/media/imaLarge/ti_Back_to_School_Classroom_Announcement_in_Pink_and_White_Pastel_Scrapbook_Style.jpg');}});
$("#i_3").keydown(function(e) {
if (e.which!=9){imaUp('Portada_resources/media/imaLarge/ti_kisspng-student-school-cartoon-college-students-5b2ee82cf40ac6.2098137315298007489996.png');}});
});
function hideBold(){var bWords=document.getElementsByTagName("b");if (bWords.length){if ((bWords[0].className=="") || (bWords[0].className=="showB")){
for (x=0;x<bWords.length;x++){bWords[x].className="hideB";}}else{for (x=0;x<bWords.length;x++){bWords[x].className="showB";}}}}
function imaUp(ima){$("body").css("overflow","hidden");$("#ardoraActCanvas").attr({"width": $(window).width(),"height": $(window).height()});document.getElementById("ardoraActCanvas").style.zIndex=5;document.getElementById("ardoraActCanvas").style["visibility"]="visible";
var alpha=0;var delta=0.03;var canvas=document.getElementById("ardoraActCanvas");var context=canvas.getContext("2d");context.beginPath();context.fillStyle="rgba(0, 0, 0, 0.25)";context.fillRect(0, 0, context.canvas.width, context.canvas.height);context.fill();var imageObj=new Image();
imageObj.onload = function() {var xCenterIma=($("#ardoraActCanvas").width()-imageObj.width) / 2;var yCenterIma=($("#ardoraActCanvas").height()-imageObj.height) / 2;context.beginPath();context.shadowColor ="rgba(0, 0, 0, 0.25)";context.shadowBlur = 10;
context.shadowOffsetX=10;context.shadowOffsetY=10;context.fill();context.beginPath();context.strokeStyle="rgba(0,0,0,1)";context.fillStyle ="rgba(255,255,255,1)";context.fillRect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);
context.fill();context.rect(xCenterIma-5,yCenterIma-5,imageObj.width+10,imageObj.height+10);context.stroke();context.fill();context.shadowBlur=0;context.shadowOffsetX=0;context.shadowOffsetY = 0;loop();
function loop(){alpha+=delta;if (alpha<=1){context.fillStyle = "rgba(255,255,255,1)";context.fillRect(xCenterIma,yCenterIma,imageObj.width,imageObj.height);context.globalAlpha=alpha;context.drawImage(imageObj,xCenterIma,yCenterIma);requestAnimationFrame(loop);}}};
imageObj.src =ima;$("#ardoraActCanvas").css("cursor", "pointer");$("#ardoraActCanvas").click(function() {document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";canvas.width=canvas.width;$("body").css("overflow","visible");$("#ardoraActCanvas").attr({"width":2,"height":2});});}
window.requestAnimationFrame=(function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || function( callback ){window.setTimeout(callback, 10000 / 60);};})();
function playIt(sound){var file=document.getElementById(sound);file.load();file.play();}
