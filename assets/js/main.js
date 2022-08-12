       
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
    //   this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_109gjin', 'template_ts3pvsb', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

window.location.href.split('#')[0];

function menu() {
  var x = document.getElementById("myTopnav");
  // console.log('hey');
  if (x.className === "header-ul") {
    x.className += " responsive";
    
window.location.href.split('#')[0];

  } else {
    x.className = "header-ul";
  }
}


    function removehash(){
        setTimeout(function(){
            history.replaceState("", document.title, window.location.pathname);
        }, 1);
        var x1 = document.getElementById("myTopnav");
        if (x1.className === "header-ul responsive"){
          console.log('hry');
          x1.classList.remove("responsive");
        }
    }



function changeprevImage() {
  var image = document.getElementById('myImage');
  const span = document.getElementById('span');
  const namestat = document.getElementById('namestat');

  span.textContent = 'Replacement span text';
  namestat.textContent = 'Replacement span text';

  span.innerHTML = `<span>Replacement HTML</span>`;
  namestat.innerHTML = `<span>Replacement span text</span>`;

  if (image.src.match("image3.jpg")) {
      image.src = "assets/images/t-image2.jpg";
      span.innerHTML = `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint</span>`;
      namestat.innerHTML = `<span id="namestat"><span style="color: var(--yellow);">JOHN KEVIN</span> - COACH</span>`;
  }
  else if (image.src.match("image2.jpg")) {
      image.src = "assets/images/t-image1.png";
      span.innerHTML = `<span>I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!</span>`;
      namestat.innerHTML = `<span id="namestat"><span style="color: var(--yellow);">MATHEW HENDRICKSON</span> - ENTREPRENEUR</span>`;
  }
  else {
    image.src = "assets/images/t-image3.jpg";
    span.innerHTML = `<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem</span>`;
    namestat.innerHTML = `<span id="namestat"><span style="color: var(--yellow);">FRANKLIN</span> - CUSTOMER</span>`;
  }
}

function changenextImage() {
  var image = document.getElementById('myImage');
  const span1 = document.getElementById('span');
  const namestat1 = document.getElementById('namestat');

span1.textContent = 'Replacement span text';
namestat1.textContent = 'Replacement span text';

span1.innerHTML = `<span>Replacement HTML</span>`;
namestat1.innerHTML = `<span>Replacement span text</span>`;

  if (image.src.match("image1.png")) {
      image.src = "assets/images/t-image2.jpg";
      span1.innerHTML = `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint</span>`;
      namestat1.innerHTML = `<span id="namestat"><span style="color: var(--yellow);">JOHN KEVIN</span> - COACH</span>`;
  }
  else if (image.src.match("image2.jpg")) {
      image.src = "assets/images/t-image3.jpg";
      span1.innerHTML = `<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem</span>`;
      namestat1.innerHTML = `<span id="namestat"><span style="color: var(--yellow);">FRANKLIN</span> - CUSTOMER</span>`;
    }
  else {
    image.src = "assets/images/t-image1.png";
    span1.innerHTML = `<span>I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!</span>`;
    namestat1.innerHTML = `<span id="namestat"><span style="color: var(--yellow);">MATHEW HENDRICKSON</span> - ENTREPRENEUR</span>`;
}
}
