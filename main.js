var Speech = window.webkitSpeechRecognition;
var Recognition = new Speech();
function Start(){
    document.getElementById("Textbox").innerHTML = "";
    Recognition.start();

}
Recognition.onresult=function run(event){
    console.log("event");var Content =event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("Textbox").innerHTML =Content;
    if(Content == "take my selfie"){
        Speak();
    }
    


}
function Speak(){
    
    var Synth = window.speechSynthesis;

    var data = "Taking Your Selfie In 5 Seconds";
    var Utter = new SpeechSynthesisUtterance(data);
    Synth.speak(Utter);
    Webcam.attach(camra);
    setTimeout(function(){
        Snap();
        save();
        
    },5000);
        
    
   

}

Webcam.set({
    width: 620,
    height:440,
    image_format: 'png',
    png_quality: 100
 });
 var camra = document.getElementById("camra");
function Snap(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";
        
    });
    
}
function save()
{
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}




