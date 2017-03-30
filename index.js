


// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
  
    columnWidth: '.grid-sizer',
      percentPosition: true
  }); 
});

var projects = [

  {
    name: 'The Kinsale Leather Co.',
    description: 'This course introduces students to colour theory, typography, layout and visual hierarchy. These principles are presented as part of a universal set of techniques that are applied across design disciplines and reinforced through examples from numerous fields. Students are introduced to the language of design as well as the foundational design process.',
    image: ['img/kl/kl_1.jpg',
           'img/kl/kl_2.jpg',
           'img/kl/kl_3.jpg',
           'img/kl/kl_4.jpg',
           'img/kl/kl_5.jpg',
           'img/kl/kl_6.jpg']
  }
    
];

function preloadMyImages() 
{
   
    for(var i = 0; i <0; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = projects[0].image[i];
        
    }
}


function updateInfo() {
    alert("dss");
    document.getElementsByTagName('h2').innerHTML = projects[0].name;
  document.getElementById('p-prj-desc').innerHTML = "<p>" + projects[0].description +"</p>";
    var content ="<div class = 'grid'> <div class = 'grid-sizer'></div>";
    for (i = 0; i < projects[0].image.length; i++){
        content = content + "<div class = 'grid-item'> <img src ='" + projects[0].image[i] +"' alt = ''/> </div>";
    }
    content = content + "</div>";
    document.getElementById("grid-container").innerHTML = content;


}



window.onload = updateInfo();
