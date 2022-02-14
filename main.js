var ready1=document.getElementById("preloader");
var loading=document.querySelector(".loader");
window.addEventListener('DOMContentLoaded', ready);
function ready() {
    setTimeout(function(){ready1.classList.add("complete");
    loading.parentElement.removeChild(loading)}, 3000);
}
/////////////////////////////cursor///////////////////////
var cursor=document.querySelector(".cursor")
var cursor2=document.querySelector(".cursor2")
document.addEventListener("mousemove",function(e){
cursor.style.cssText=cursor2.style.cssText="left: "+e.clientX + "px; top:" +e.clientY +"px;";
})
///////////////////////////////////////////////
document.querySelector("#b1").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b1").style.width = "90px";
        document.querySelector("#img1").style.width = "90px";
        document.querySelector("#b1").style.height = "90px";
        document.querySelector("#img1").style.height = "90px";
        document.querySelector("#img1").style.borderRadius = "50%";
        document.querySelector("#b1").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b1");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            document.querySelector("#b1").style.marginLeft = "100px";
            if (window.innerWidth < 376) {
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {
                    for (; pos >= 60; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.right = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + 200 + "px";

                }
            }


        }
        setTimeout(function () {
            document.querySelector("#b1").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li1").classList.add('active');
            document.querySelector("#c1").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b1").style.display = "block";

                if (window.innerWidth < 376) {
                    document.querySelector("#b1").style.width = "250px";
                    document.querySelector("#img1").style.width = "250px";
                    document.querySelector("#b1").style.marginLeft = "10px";
                    document.querySelector("#b1").style.marginTop = "-10px";
                    document.querySelector("#b1").style.height = "250px";
                    document.querySelector("#img1").style.height = "250px";
                    document.querySelector("#img1").style.borderRadius = "";
                    document.querySelector("#b1").style.borderRadius = "";
                    document.querySelector("#li1").classList.remove('active');
                    document.querySelector("#c1").classList.remove('active');
                    elem.classList.remove('ok');



                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b1").style.width = "300px";
                    document.querySelector("#img1").style.width = "300px";
                    document.querySelector("#b1").style.marginLeft = "-400px";
                    document.querySelector("#b1").style.marginTop = "-30px";
                    document.querySelector("#b1").style.height = "300px";
                    document.querySelector("#img1").style.height = "300px";
                    document.querySelector("#img1").style.borderRadius = "";
                    document.querySelector("#b1").style.borderRadius = "";
                    document.querySelector("#li1").classList.remove('active');
                    document.querySelector("#c1").classList.remove('active');
                    elem.classList.remove('ok');



                } else {
                    document.querySelector("#b1").style.width = "350px";
                    document.querySelector("#img1").style.width = "350px";
                    document.querySelector("#b1").style.marginLeft = "-355px";
                    document.querySelector("#b1").style.height = "300px";
                    document.querySelector("#img1").style.height = "300px";

                    document.querySelector("#img1").style.borderRadius = "";
                    document.querySelector("#b1").style.borderRadius = "";
                    document.querySelector("#li1").classList.remove('active');
                    document.querySelector("#c1").classList.remove('active');
                    elem.classList.remove('ok');

                }

            }
        }, 2000);
        return false;
    }
document.querySelector("#b2").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b2").style.width = "90px";
        document.querySelector("#img2").style.width = "90px";
        document.querySelector("#b2").style.height = "90px";
        document.querySelector("#img2").style.height = "90px";
        document.querySelector("#img2").style.borderRadius = "50%";
        document.querySelector("#b2").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b2");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b2").style.marginLeft = "480px";
            document.querySelector("#b2").style.marginTop = "30px";
            if (window.innerWidth < 376) {
                document.querySelector("#b2").style.marginLeft = "30px";
                document.querySelector("#b2").style.marginTop = "350px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 60; pos--) {

                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok1');

                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b2").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li2").classList.add('active');
            document.querySelector("#c2").classList.add('active');

            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b2").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b2").style.width = "250px";
                    document.querySelector("#img2").style.width = "250px";
                    document.querySelector("#b2").style.marginLeft = "-50px";
                    document.querySelector("#b2").style.marginTop = "330px";
                    document.querySelector("#b2").style.height = "250px";
                    document.querySelector("#img2").style.height = "250px";

                    document.querySelector("#img2").style.borderRadius = "";
                    document.querySelector("#b2").style.borderRadius = "";
                    document.querySelector("#li2").classList.remove('active');
                    document.querySelector("#c2").classList.remove('active');
                    elem.classList.remove('ok1');


                }

                else if (window.innerWidth < 1025) {
                    document.querySelector("#b2").style.width = "300px";
                    document.querySelector("#img2").style.width = "300px";
                    document.querySelector("#b2").style.marginLeft = "440px";
                    document.querySelector("#b2").style.marginTop = "-30px";
                    document.querySelector("#b2").style.height = "300px";
                    document.querySelector("#img2").style.height = "300px";
                    document.querySelector("#img2").style.borderRadius = "";
                    document.querySelector("#b2").style.borderRadius = "";
                    document.querySelector("#li2").classList.remove('active');
                    document.querySelector("#c2").classList.remove('active');
                    elem.classList.remove('ok1');



                } else {
                    document.querySelector("#b2").style.width = "350px";
                    document.querySelector("#img2").style.width = "350px";
                    document.querySelector("#b2").style.marginLeft = "420px";
                    document.querySelector("#b2").style.height = "300px";
                    document.querySelector("#img2").style.height = "300px";
                    document.querySelector("#img2").style.borderRadius = "";
                    document.querySelector("#b2").style.borderRadius = "";
                    document.querySelector("#li2").classList.remove('active');
                    document.querySelector("#c2").classList.remove('active');
                    elem.classList.remove('ok1');

                }

            }





        }, 2000);



        return false;
    }
document.querySelector("#b3").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b3").style.width = "90px";
        document.querySelector("#img3").style.width = "90px";
        document.querySelector("#b3").style.height = "90px";
        document.querySelector("#img3").style.height = "90px";
        document.querySelector("#img3").style.borderRadius = "50%";
        document.querySelector("#b3").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b3");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.1);
        function frame() {
            document.querySelector("#b3").style.marginLeft = "";
            document.querySelector("#b3").style.marginTop = "";
            if (window.innerWidth < 376) {

                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');
                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            }
            else if (window.innerWidth < 1025) {
                if (pos == 250) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.right = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');
                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            }


            else {
                if (pos == 250) {

                    for (; pos >= 10; pos--) {

                        elem.style.top = -pos + "px";
                        elem.style.left = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok2');


                } else {
                    pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = -pos + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b3").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "300px" }
            else if (window.innerWidth < 1025) { document.querySelector(".csss").style.paddingTop = "350px" }
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li3").classList.add('active');
            document.querySelector("#c3").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b3").style.display = "block";


                if (window.innerWidth < 376) {
                    document.querySelector("#b3").style.marginLeft = "-50px";
                    document.querySelector("#b3").style.marginTop = "620px";
                    document.querySelector("#b3").style.width = "250px";
                    document.querySelector("#img3").style.width = "250px";
                    document.querySelector("#b3").style.height = "250px";
                    document.querySelector("#img3").style.height = "250px";
                    document.querySelector("#img3").style.borderRadius = "";
                    document.querySelector("#b3").style.borderRadius = "";
                    document.querySelector("#li3").classList.remove('active');
                    document.querySelector("#c3").classList.remove('active');
                    elem.classList.remove('ok2');

                }
                else if (window.innerWidth < 1025) {

                    document.querySelector("#b3").style.marginLeft = "-250px";
                    document.querySelector("#b3").style.marginTop = "660px";

                    document.querySelector("#b3").style.width = "300px";
                    document.querySelector("#img3").style.width = "300px";
                    document.querySelector("#b3").style.height = "300px";
                    document.querySelector("#img3").style.height = "300px";
                    document.querySelector("#img3").style.borderRadius = "";
                    document.querySelector("#b3").style.borderRadius = "";
                    document.querySelector("#li3").classList.remove('active');
                    document.querySelector("#c3").classList.remove('active');
                    elem.classList.remove('ok2');

                }


                else {
                    document.querySelector("#b3").style.marginLeft = "850px";
                    document.querySelector("#b3").style.marginTop = "100px";
                    document.querySelector("#b3").style.width = "350px";
                    document.querySelector("#img3").style.width = "350px";
                    document.querySelector("#b3").style.height = "300px";
                    document.querySelector("#img3").style.height = "300px";
                    document.querySelector("#img3").style.borderRadius = "";
                    document.querySelector("#b3").style.borderRadius = "";
                    document.querySelector("#li3").classList.remove('active');
                    document.querySelector("#c3").classList.remove('active');
                    elem.classList.remove('ok2');

                }

            }

        }, 2000);







        return false;
    }
document.querySelector("#b4").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b4").style.width = "90px";
        document.querySelector("#img4").style.width = "90px";
        document.querySelector("#b4").style.height = "90px";
        document.querySelector("#img4").style.height = "90px";
        document.querySelector("#img4").style.borderRadius = "50%";
        document.querySelector("#b4").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b4");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b4").style.marginLeft = "100px";
            document.querySelector("#b4").style.marginTop = "360px";
            if (window.innerWidth < 376) {
                document.querySelector("#b4").style.marginLeft = "30px";
                document.querySelector("#b4").style.marginTop = "1000px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 10; pos--) {

                        elem.style.top = pos + "px";
                        elem.style.right = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok3');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b4").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "650px" }
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li4").classList.add('active');
            document.querySelector("#c4").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b4").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b4").style.width = "250px";
                    document.querySelector("#img4").style.width = "250px";
                    document.querySelector("#b4").style.marginLeft = "-45px";
                    document.querySelector("#b4").style.marginTop = "1000px";
                    document.querySelector("#b4").style.height = "250px";
                    document.querySelector("#img4").style.height = "250px";
                    document.querySelector("#img4").style.borderRadius = "";
                    document.querySelector("#b4").style.borderRadius = "";
                    document.querySelector("#li4").classList.remove('active');
                    document.querySelector("#c4").classList.remove('active');
                    elem.classList.remove('ok3');


                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b4").style.width = "300px";
                    document.querySelector("#img4").style.width = "300px";
                    document.querySelector("#b4").style.marginLeft = "-400px";
                    document.querySelector("#b4").style.marginTop = "350px";
                    document.querySelector("#b4").style.height = "300px";
                    document.querySelector("#img4").style.height = "300px";
                    document.querySelector("#img4").style.borderRadius = "";
                    document.querySelector("#b4").style.borderRadius = "";
                    document.querySelector("#li4").classList.remove('active');
                    document.querySelector("#c4").classList.remove('active');
                    elem.classList.remove('ok3');


                } else {
                    document.querySelector("#b4").style.width = "350px";
                    document.querySelector("#img4").style.width = "350px";
                    document.querySelector("#b4").style.marginLeft = "-350px";
                    document.querySelector("#b4").style.marginTop = "400px";
                    document.querySelector("#b4").style.height = "300px";
                    document.querySelector("#img4").style.height = "300px";
                    document.querySelector("#img4").style.borderRadius = "";
                    document.querySelector("#b4").style.borderRadius = "";
                    document.querySelector("#li4").classList.remove('active');
                    document.querySelector("#c4").classList.remove('active');
                    elem.classList.remove('ok3');
                }
            }
        }, 2000);
        return false;
    }
document.querySelector("#b5").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b6").style.display = "none";
        document.querySelector("#b5").style.width = "90px";
        document.querySelector("#img5").style.width = "90px";
        document.querySelector("#b5").style.height = "90px";
        document.querySelector("#img5").style.height = "90px";
        document.querySelector("#img5").style.borderRadius = "50%";
        document.querySelector("#b5").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b5");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b5").style.marginLeft = "480px";
            document.querySelector("#b5").style.marginTop = "360px";
            if (window.innerWidth < 376) {
                document.querySelector("#b5").style.marginLeft = "30px";
                document.querySelector("#b5").style.marginTop = "1350px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 60; pos--) {

                        elem.style.top = -pos + "px";
                        elem.style.right = pos + "px";

                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = -pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b5").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "1050px" }
            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b6").style.display = "block";
            document.querySelector("#li5").classList.add('active');
            document.querySelector("#c5").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b5").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b5").style.width = "250px";
                    document.querySelector("#img5").style.width = "250px";
                    document.querySelector("#b5").style.marginLeft = "0px";
                    document.querySelector("#b5").style.marginTop = "1300px";
                    document.querySelector("#b5").style.height = "250px";
                    document.querySelector("#img5").style.height = "250px";

                    document.querySelector("#img5").style.borderRadius = "";
                    document.querySelector("#b5").style.borderRadius = "";
                    document.querySelector("#li5").classList.remove('active');
                    document.querySelector("#c5").classList.remove('active');
                    elem.classList.remove('ok');

                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b5").style.width = "300px";
                    document.querySelector("#img5").style.width = "300px";
                    document.querySelector("#b5").style.marginLeft = "550px";
                    document.querySelector("#b5").style.marginTop = "420px";
                    document.querySelector("#b5").style.height = "300px";
                    document.querySelector("#img5").style.height = "300px";

                    document.querySelector("#img5").style.borderRadius = "";
                    document.querySelector("#b5").style.borderRadius = "";
                    document.querySelector("#li5").classList.remove('active');
                    document.querySelector("#c5").classList.remove('active');
                    elem.classList.remove('ok');

                } else {
                    document.querySelector("#b5").style.width = "350px";
                    document.querySelector("#img5").style.width = "350px";
                    document.querySelector("#b5").style.marginLeft = "530px";
                    document.querySelector("#b5").style.marginTop = "480px";
                    document.querySelector("#b5").style.height = "300px";
                    document.querySelector("#img5").style.height = "300px";

                    document.querySelector("#img5").style.borderRadius = "";
                    document.querySelector("#b5").style.borderRadius = "";
                    document.querySelector("#li5").classList.remove('active');
                    document.querySelector("#c5").classList.remove('active');
                    elem.classList.remove('ok');
                }

            }

        }, 2000);
        return false;
    }

document.querySelector("#b6").onclick =
    function () {
        document.querySelector("#li1").classList.remove('active');
        document.querySelector("#c1").classList.remove('active');
        document.querySelector("#li2").classList.remove('active');
        document.querySelector("#c2").classList.remove('active');
        document.querySelector("#li3").classList.remove('active');
        document.querySelector("#c3").classList.remove('active');
        document.querySelector("#li4").classList.remove('active');
        document.querySelector("#c4").classList.remove('active');
        document.querySelector("#li5").classList.remove('active');
        document.querySelector("#c5").classList.remove('active');
        document.querySelector("#li6").classList.remove('active');
        document.querySelector("#c6").classList.remove('active');
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#b3").style.display = "none";
        document.querySelector("#b4").style.display = "none";
        document.querySelector("#b5").style.display = "none";
        document.querySelector("#b6").style.width = "90px";
        document.querySelector("#img6").style.width = "90px";
        document.querySelector("#b6").style.height = "90px";
        document.querySelector("#img6").style.height = "90px";
        document.querySelector("#img6").style.borderRadius = "50%";
        document.querySelector("#b6").style.borderRadius = "50%";

        var id = null;
        var elem = document.querySelector("#b6");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            document.querySelector("#b6").style.marginLeft = "";
            document.querySelector("#b6").style.marginTop = "";
            if (window.innerWidth < 376) {
                document.querySelector("#b6").style.marginLeft = "30px";
                document.querySelector("#b6").style.marginTop = "1680px";
                if (pos == 150) {
                    for (; pos >= 30; pos--) {
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }


                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = pos + "px";

                }
            } else {
                if (pos == 250) {

                    for (; pos >= 50; pos--) {
                        elem.style.top = -pos + "px";
                        elem.style.left = -pos + "px";

                    }

                    clearInterval(id);
                    elem.classList.add('ok');


                } else {
                    pos++;
                    elem.style.top = -pos + "px";
                    elem.style.left = -pos + 200 + "px";

                }
            }




        }
        setTimeout(function () {
            document.querySelector("#b6").style.display = "none";
            document.querySelector(".carsoul1").style.display = "block";
            document.querySelector(".csss").style.display = "block";
            if (window.innerWidth < 376) { document.querySelector(".csss").style.paddingTop = "1350px" }
            else if (window.innerWidth < 1025) { document.querySelector(".csss").style.paddingTop = "350px" }

            document.querySelector("#b1").style.display = "block";
            document.querySelector("#b2").style.display = "block";
            document.querySelector("#b3").style.display = "block";
            document.querySelector("#b4").style.display = "block";
            document.querySelector("#b5").style.display = "block";
            document.querySelector("#li6").classList.add('active');
            document.querySelector("#c6").classList.add('active');
            var b = document.createElement("button");
            b.innerHTML = "X";
            document.querySelector(".csss").appendChild(b);
            b.onclick = function () {
                document.querySelector(".carsoul1").style.display = "none";
                document.querySelector(".csss").style.display = "none";
                b.style.display = "none";

                document.querySelector("#b6").style.display = "block";
                if (window.innerWidth < 376) {
                    document.querySelector("#b6").style.marginLeft = "0px";
                    document.querySelector("#b6").style.marginTop = "1680px";
                    document.querySelector("#b6").style.width = "250px";
                    document.querySelector("#img6").style.width = "250px";
                    document.querySelector("#b6").style.height = "250px";
                    document.querySelector("#img6").style.height = "250px";
                    document.querySelector("#img6").style.borderRadius = "";
                    document.querySelector("#b6").style.borderRadius = "";
                    document.querySelector("#li6").classList.remove('active');
                    document.querySelector("#c6").classList.remove('active');
                    elem.classList.remove('ok');

                }
                else if (window.innerWidth < 1025) {
                    document.querySelector("#b6").style.marginLeft = "550px";
                    document.querySelector("#b6").style.marginTop = "750px";
                    document.querySelector("#b6").style.width = "300px";
                    document.querySelector("#img6").style.width = "300px";
                    document.querySelector("#b6").style.height = "300px";
                    document.querySelector("#img6").style.height = "300px";
                    document.querySelector("#img6").style.borderRadius = "";
                    document.querySelector("#b6").style.borderRadius = "";
                    document.querySelector("#li6").classList.remove('active');
                    document.querySelector("#c6").classList.remove('active');
                    elem.classList.remove('ok');

                } else {
                    document.querySelector("#b6").style.marginLeft = "910px";
                    document.querySelector("#b6").style.marginTop = "460px";
                    document.querySelector("#b6").style.width = "350px";
                    document.querySelector("#img6").style.width = "350px";
                    document.querySelector("#b6").style.height = "300px";
                    document.querySelector("#img6").style.height = "300px";

                    document.querySelector("#img6").style.borderRadius = "";
                    document.querySelector("#b6").style.borderRadius = "";
                    document.querySelector("#li6").classList.remove('active');
                    document.querySelector("#c6").classList.remove('active');
                    elem.classList.remove('ok');
                }

            }

        }, 2000);
        return false;
    }
    ////////////////////////////////////////////////////////
    window.addEventListener('DOMContentLoaded', function () {
        const button1 = document.querySelector('.button1');
        const button2 = document.querySelector('.button2');
        const button3 = document.querySelector('.button3');
        const button4 = document.querySelector('.button4');
        const button5 = document.querySelector('.button5');
    
        var img1 = document.querySelector('.store-item1');
        var img2 = document.querySelector('.store-item2');
        var img3 = document.querySelector('.store-item3');
        var img4 = document.querySelector('.store-item4');
        var img5 = document.querySelector('.store-item5');
        var img6 = document.querySelector('.store-item6');
        var img7 = document.querySelector('.store-item7');
        var img8 = document.querySelector('.store-item8');
        button1.addEventListener('click', function () {
            img1.style.display = 'block';
            img2.style.display = 'block';
            img3.style.display = 'block';
            img4.style.display = 'block';
            img5.style.display = 'block';
            img6.style.display = 'block';
            img7.style.display = 'block';
            img8.style.display = 'block';
        });
    
        button2.addEventListener('click', function () {
            img1.style.display = 'none';
            img2.style.display = 'none';
            img3.style.display = 'none';
            img4.style.display = 'block';
            img5.style.display = 'block';
            img6.style.display = 'none';
            img7.style.display = 'block';
            img8.style.display = 'none';
        });
    
        button3.addEventListener('click', function () {
            img1.style.display = 'block';
            img2.style.display = 'none';
            img3.style.display = 'none';
            img4.style.display = 'none';
            img5.style.display = 'none';
            img6.style.display = 'none';
            img7.style.display = 'none';
            img8.style.display = 'none';
        });
        button4.addEventListener('click', function () {
            img1.style.display = 'none';
            img2.style.display = 'block';
            img3.style.display = 'block';
            img4.style.display = 'none';
            img5.style.display = 'none';
            img6.style.display = 'none';
            img7.style.display = 'none';
            img8.style.display = 'block';
        });
        button5.addEventListener('click', function () {
            img1.style.display = 'none';
            img2.style.display = 'none';
            img3.style.display = 'none';
            img4.style.display = 'none';
            img5.style.display = 'none';
            img6.style.display = 'none';
            img7.style.display = 'block';
            img8.style.display = 'none';
        });
    
        (function () {
    
            const searchBox = document.querySelector('#search-item')
            const storeItems = document.querySelectorAll('.item')
    
            searchBox.addEventListener('keyup', (e) => {
    
                const searchFilter = e.target.value.toLowerCase().trim()
                //display only items that contain filter input
    
                storeItems.forEach((item) => {
                    if (item.textContent.includes(searchFilter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                })
            })
    
        })();
    
    
    
    });
    /////////////////////////////////////
    document.addEventListener("DOMContentLoaded",function(){
        document.querySelector(".email").addEventListener("keyup",myfunc1);
        document.querySelector(".password").addEventListener("keyup",myfunc1);
        
        function myfunc1(){
            var y=document.querySelector(".password").value;
            var x=document.querySelector(".email").value;
            n="@";
            if(x.match(n)){
                document.getElementById("message1").innerHTML="correct email";
                document.getElementById("message1").style.fontSize="15px";
                document.getElementById("message1").style.color="green";
         
                
            }
            else {
             document.getElementById("message1").innerHTML="enter your email";
             document.getElementById("message1").style.fontSize="15px";
                document.getElementById("message1").style.color="red";
             
            }
         
            
         
             if(y.length<5){
                   document.getElementById("message2").innerHTML="enter stronge password";
                   document.getElementById("message2").style.fontSize="15px";
                   document.getElementById("message2").style.color="red";
               
                   
                   
                }
               else {
                document.getElementById("message2").innerHTML="correct";
                document.getElementById("message2").style.fontSize="15px";
                document.getElementById("message2").style.color="green";
          
               
            }
            
          if(y.length>5 && x.match(n))
            {
                document.querySelector(".b1").removeAttribute("disabled");
                document.getElementById("message1").innerHTML="correct ";
    
            
            }
            else{
                document.querySelector(".b1").setAttribute("disabled",true);
              
            }
    
       
        }
    
    })