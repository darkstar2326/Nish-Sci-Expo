var MenuItems = document.getElementById("MenuItems");
            
            MenuItems.style.maxHeight = "0px";
            
            function menutoggle(){
                 if(MenuItems.style.maxHeight == "0px")
                {
                    MenuItems.style.maxHeight = "200px";
                }
            else
                {
                    MenuItems.style.maxHeight = "0px";
                }
            }


            var datamap = new Map([
              [document.getElementById("myBtn"), document.getElementById("myModal")],
              [document.getElementById("myBtn2"), document.getElementById("myModal2")],
              [document.getElementById("myBtn3"), document.getElementById("myModal3")],
              [document.getElementById("myBtn4"), document.getElementById("myModal4")],
              [document.getElementById("myBtn5"), document.getElementById("myModal5")],
              [document.getElementById("myBtn6"), document.getElementById("myModal6")],
              [document.getElementById("myBtn7"), document.getElementById("myModal7")],
              [document.getElementById("myBtn8"), document.getElementById("myModal8")],
              [document.getElementById("myBtn9"), document.getElementById("myModal9")],
              [document.getElementById("myBtn10"), document.getElementById("myModal10")],
              [document.getElementById("myBtn11"), document.getElementById("myModal11")],
              [document.getElementById("myBtn12"), document.getElementById("myModal12")],
              [document.getElementById("myBtn13"), document.getElementById("myModal13")],
              [document.getElementById("myBtn14"), document.getElementById("myModal14")],
              [document.getElementById("myBtn15"), document.getElementById("myModal15")],
              [document.getElementById("myBtn16"), document.getElementById("myModal16")],
              [document.getElementById("myBtn17"), document.getElementById("myModal17")],
              [document.getElementById("myBtn18"), document.getElementById("myModal18")],
              [document.getElementById("myBtn19"), document.getElementById("myModal19")],
              [document.getElementById("myBtn20"), document.getElementById("myModal20")],
              [document.getElementById("myBtn21"), document.getElementById("myModal21")],
              [document.getElementById("myBtn22"), document.getElementById("myModal22")],
              [document.getElementById("myBtn23"), document.getElementById("myModal23")],
              [document.getElementById("myBtn24"), document.getElementById("myModal24")],
              [document.getElementById("myBtn25"), document.getElementById("myModal25")],
              [document.getElementById("myBtn26"), document.getElementById("myModal26")],
              [document.getElementById("myBtn27"), document.getElementById("myModal27")],
              [document.getElementById("myBtn28"), document.getElementById("myModal28")],
              [document.getElementById("cart"), document.getElementById("cartmodal")]



          ]);
  
          datamap.forEach((value, key) => {
              doModal(key, value);
          });



 function doModal(anchor, popupbox) {

            // Get the <span> element that closes the modal
            var span = popupbox.getElementsByClassName("close")[0];

            anchor.addEventListener("click", function (event) {
                popupbox.style.display = "block";
            });

            span.addEventListener("click", function (event) {
                popupbox.style.display = "none";
            });

            window.addEventListener("click", function (event) {
                if (event.target == popupbox) {
                    popupbox.style.display = "none";
                }
            });
        }

       document.getElementById("tv").onclick = function(){
        localStorage.setItem("Samsung TV","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("iphone").onclick = function(){
        localStorage.setItem("I Phone 13","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("cube").onclick = function(){
        localStorage.setItem("Rubik's Cube","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("popit").onclick = function(){
        localStorage.setItem("Pop It","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("i20").onclick = function(){
        localStorage.setItem("Hyundai i20","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("crysta").onclick = function(){
        localStorage.setItem("Innova Crysta","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("surface").onclick = function(){
        localStorage.setItem("Microsoft Surface","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("fold").onclick = function(){
        localStorage.setItem("Galaxy Fold","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("clock").onclick = function(){
        localStorage.setItem("Square Clock","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("map").onclick = function(){
        localStorage.setItem("India Map","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("cpu").onclick = function(){
        localStorage.setItem("CPU","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("periodic").onclick = function(){
        localStorage.setItem("Periodic Table","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("water").onclick = function(){
        localStorage.setItem("Water Bottle","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("sun").onclick = function(){
        localStorage.setItem("Sun Glasses","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("monitor").onclick = function(){
        localStorage.setItem("Monitor","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("camera").onclick = function(){
        localStorage.setItem("Camera","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("tab").onclick = function(){
        localStorage.setItem("Galaxy Tab A","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("dustbin").onclick = function(){
        localStorage.setItem("Dustbin","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("kwid").onclick = function(){
        localStorage.setItem("Renault Kwid","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("guitar").onclick = function(){
        localStorage.setItem("Guitar","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("tennisball").onclick = function(){
        localStorage.setItem("Tennis Ball","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("tennisracket").onclick = function(){
        localStorage.setItem("Tennis Racket","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("mona").onclick = function(){
        localStorage.setItem("Mona Lisa","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("pccam").onclick = function(){
        localStorage.setItem("PC Camera","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("frame").onclick = function(){
        localStorage.setItem("Photo Frame","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("fridge").onclick = function(){
        localStorage.setItem("Refrigerator","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("geyser").onclick = function(){
        localStorage.setItem("Geyser","1");
        alert("You have successfuly bought the product!")
       }
       document.getElementById("bulb").onclick = function(){
        localStorage.setItem("Bulb","1");
        alert("You have successfuly bought the product!")
       }

      document.getElementById("cart").onclick = function(){
        var keys = Object.keys(localStorage);
        document.getElementById("cartread").innerHTML = keys + "<br>";
     } 



