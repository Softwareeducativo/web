//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades lo has hecho muy bien "; messageTime=""; messageError="Intenta de nuevo "; messageErrorG="Intenta de nuevo "; messageAttempts="Intenta de nuevo "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVhbGFjaW9uYXJUT0JF"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["SSBhbSBhIGdvb2Qgc3R1ZGVudC4=", "U295IHVuIGJ1ZW4gZXN0dWRpYW50ZQ=="],["V2UgYXJlIG9sZCBmcmllbmRzLg==", "U29tb3Mgdmllam9zIGFtaWdvcw=="],["SGUgaXMgYSBzdHVkZW50Lg==", "RWwgZXMgZXN0dWRpYW50ZQ=="],["VGhlIHBlbmNpbCBpcyBvbiB0aGUgZGVzay4=", "RWwgTMOhcGl6IGVzdGEgc29icmUgZWwgZXNjcml0b3Jpbw=="],["VGhleSBhcmUgZnJpZW5kcy4=", "RWxsb3Mgc29uIGFtaWdvcw=="],["VGhlIHNreSBpcyBjbGVhci4=", "RWwgY2llbG8gZXN0YSBjbGFybw=="]];
var c=[[20,22],[19,19],[16,16],[26,33],[17,16],[17,19]];
var con1=["I am a good student.","We are old friends.","He is a student.","The pencil is on the desk.","They are friends.","The sky is clear."];
var con2=["Soy un buen estudiante","Somos viejos amigos","El es estudiante","El Lápiz esta sobre el escritorio","Ellos son amigos","El cielo esta claro"];
var sel1=""; join1=[]; join2=[];
