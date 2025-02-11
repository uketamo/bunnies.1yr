
// const imageContainer = document.querySelector('.gallery');
// const images = imageContainer.querySelectorAll('img');

// images.forEach(image => {

//     image.addEventListener('click', () => {
//         console.log("Image clicked!"); 
//       });


//   image.addEventListener('click', () => {

//     console.log("Image clicked!"); 

//     const imageUrl = image.src;
//     if (imageUrl === "pics/bunny1.jpeg") {
//       window.location.href = "bunny1.html";
//     } else if (imageUrl === "path/to/image2.jpg") {
//       window.location.href = "image2.html";
//     } 
//     // ... add more conditions for other images
//   });
// });

const tabImage = document.querySelectorAll(".gallery img")
// console.log(tabImage);
for(let i = 0; i < tabImage.length; i++){
    tabImage[i].addEventListener("click", function(){
        let imgSrc = tabImage[i].getAttribute("src");
        // console.log(imgSrc);
        let filename = imgSrc.split('/').pop(); 
        filename = filename.replace(/\.[^/.]+$/, ""); 
        window.location.href = filename + ".html"; 
    })
}