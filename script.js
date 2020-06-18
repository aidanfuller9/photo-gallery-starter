let foodPictures = [
  "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1572455021453-7d0b208ae250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1013&q=80",
  
];


for (let pictures of foodPictures) {
  $(".gallery").append("<img src=" + pictures + ">");
}

$(".add").click(function() {
  $(".gallery").empty();
  let newPictureUrl = $(".picture-url").val();
  foodPictures.push(newPictureUrl);
  for (let pictures of foodPictures) {
  $(".gallery").append("<img src=" + pictures + ">");
}
});

