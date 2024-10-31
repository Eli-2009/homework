let img1 = document.createElement('img');
img1.src = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80';
img1.style.width = '500px';
img1.style.height = '300px';
// img1.style.display = 'none';
document.body.appendChild(img1);




let img2 = document.createElement('img');
img2.src = 'https://tinypng.com/static/images/boat.png';
img2.style.width = '500px';
img2.style.height = '300px';
img2.style.display = 'none';
document.body.appendChild(img2);



let img3 = document.createElement('img');
img3.src = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg';
img3.style.width = '500px';
img3.style.height = '300px';
img3.style.display = 'none';
document.body.appendChild(img3);




let img4 = document.createElement('img');
img4.src = 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg';
img4.style.width = '500px';
img4.style.height = '300px';
img4.style.display = 'none';
document.body.appendChild(img4);

let a = 0;
let images = [img1, img2, img3, img4]

let after = document.querySelector('.after');
after.addEventListener('click', () =>{
    images[a].style.display = 'none';
    a = (a + 1) % 4;
    images[a].style.display = 'block'
})


let before = document.querySelector('.before');
before.addEventListener('click', () =>{
    images[a].style.display = 'none';
    a = (a + 3) % 4;
    images[a].style.display = 'block'
})