AFRAME.registerComponent("markerhandler",{
  init:async function(){
   this.el.addEventListener("markerfound",()=>{
    console.log("marker is found")   
    this.handleMarkerFound();
    })   
  },
  handleMarkerFound: function(){
   var buttonDiv = document.getElementById("button-div")
   buttonDiv.style.display = "flex";
   
   var orderButton = document.getElementById("order-button")
   var orderSummaryButton = document.getElementById("order-summary-button")

   orderButton.addEventListener("click",()=>{
    swal({
     icon:"https://i.imgur.com/4NZ6uLY.jpg",
     title:"Thanks For Order!",
     text:" ",
     timer: 2000,
     buttons: false   
    })   
   })
   orderSummaryButton.addEventListener("click",()=>{
    swal({
     icon:"warning",
     title:"Order Summary",
     text:"Work In Progress"   
    })   
   })  
  },
  handleMarkerLost: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }, 
})