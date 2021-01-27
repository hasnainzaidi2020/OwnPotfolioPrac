
// Mobile Menu

document.getElementById('hamburguer-icon').onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick= function(){
//  alert('acs')
document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

// About us Tab

var aboutUs = {
  "Mission": "Software engineering is the discipline of creating high-quality software systems in a systematic, controlled and efficient manner. ... It will prepare them to apply ably engineering principles, practices, and processes to design, develop, deploy, and maintain software systems..",
  "Vision": "Software engineering is a branch of computer science which includes the development and building of computer systems software and applications software. Computer systems software is composed of programs that include computing utilities and operations systems. Applications software consists of user-focused programs that include web browsers, database programs, etc.  ",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutusTab = document.querySelectorAll('.single-tab')

for (let index = 0; index < aboutusTab.length; index++) {
     aboutusTab[index].onclick = function (){
       var clickedValue = this.innerHTML;
      // console.log(clickedValue)
     //  console.log(aboutUs[clickedValue])
     document.getElementById('box-text').innerHTML= aboutUs[clickedValue];
     //aboutusTab.classList.add('selected');

     for (let b = 0; b < aboutusTab.length; b++) {
      aboutusTab[b].style["background-color"] = unseletectedColor;
      aboutusTab[b].style["font-weight"] = "normal";
    }
    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bolder";
     }
}



// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

 var prevoiusArroow = document.getElementById("service-previous");
 var NextArroow = document.getElementById("service-next");
 var ServiceTittle = document.getElementById("service-title")
 var ServiceText = document.getElementById("service-text")
 
 var currentService = 0;

NextArroow.onclick = function() {
  if(currentService == (ourServices.length - 1))
  {
     currentService=0
  }
  else
  {
    currentService++;
  }
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  ServiceTittle.innerHTML = title;
  ServiceText.innerHTML= text;
}

prevoiusArroow.onclick = function() {
  if(currentService == 0)
  {
     currentService= ourServices.length-1;
  }
  else
  {
    currentService--;
  }
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  ServiceTittle.innerHTML = title;
  ServiceText.innerHTML= text;
}

// Footer



  
   


   