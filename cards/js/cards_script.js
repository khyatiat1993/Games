 /*begin snippet: js hide: false console: true babel: null */

/*<!-- language: lang-js -->*/

    var parentEl = document.getElementById("cards");

    function sortCards() {
      var cards = document.getElementsByClassName("card"),
          cw = parentEl.clientWidth,
          sw = parentEl.scrollWidth,
          diff = sw - cw,
          offset = diff / (cards.length - 1);

      for (var i = 1; i < cards.length; i++) {
        cards[i].style.transform = "translateX(-" + offset * i + "px)";
      }
    }

    sortCards();
    let count=1;
    var b = document.getElementById("button");
    b.addEventListener("click", function() {
      var div = document.createElement("div");
      let color1 = "rgba("+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254)+")";
      let color2 = "rgba("+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254)+")";
      let color3 = "rgba("+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254) +","+ Math.floor(Math.random() * 254)+")";
      div.style.background = "linear-gradient(to bottom left," + color1 + "," + color2 + "," + color3 + ")";
      div.innerHTML = ++count;
      div.id="card"+count;
      dragElement(div);
      div.classList.add("card");
      parentEl.appendChild(div);
      sortCards();
    });

    //Make the DIV element draggagle:
  
  dragElement(document.getElementById("card1"));

  function dragElement(elmnt) {
    //alert(elmnt.id);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
