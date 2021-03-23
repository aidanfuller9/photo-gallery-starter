let foodGallery = []

 

$("button").click(function(){
  // set a variable to grab the value of the input
  let pictureUrl = $(".picture-url").val()
  // add the variable to the foodGallery array
  foodGallery.push(pictureUrl)
  
  console.log(foodGallery)
  // loop through the foodGallery and append to HTML
  for(let food in foodGallery){
  $(".gallery").append(food)
} 
})


