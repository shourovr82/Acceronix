<!-- <a href="#" className="btn">Hover Me</a>

---
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*C866B2)*/
body {
  height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  display: grid;
  place-items: center;
}

.btn {
  text-decoration: none;
  border: 2px solid #764abc;
  color: #764abc;
  padding: 10px 20px;
  border-radius: 25px;
  position: relative;
  transition: all 1s;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #764abc;
  transition: all 1s;
  z-index: -1;
  transform: translateX(-100%);
}

.btn:hover::before {
  transform: translateX(0);
}
.btn:hover {
  color: #fff;
}

--- --------------------------->
<!-- 
.profile-card {
  width: 100%;
  height: 99vh;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: #ddd;
  position: relative;
  transition: all 1s;
  z-index: 1;
  overflow: hidden;
}

.info h2,
.info p {
  color: #fff;
  opacity: 0;
  transition: all 0.6s;
}

.profile-card:hover .info h2,
.profile-card:hover .info p {
  opacity: 1;
}

.info::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  transform: skew(30deg) translateX(100%);
  opacity: 0.3;
  z-index: -1;
  transition: all 0.6s ease;
}

.info::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  transform: skew(-30deg) translateX(100%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  z-index: -1;
  transition: all 0.6s ease;
}

.profile-card:hover .info::before {
  transform: skew(30deg) translateX(50%);
}

.profile-card:hover .info::after {
  transform: skew(-30deg) translateX(40%);
  opacity: 0.7;
}

.profile-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  opacity: 0.3;
  transform: skew(30deg) translateX(85%);
  transition: all 0.6s ease;
  z-index: -1;
}

.profile-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #764abc;
  opacity: 0.3;
  transform: skew(-30deg) translateX(85%);
  transition: all 0.6s ease;
  z-index: -1;
}

.profile-card:hover:before {
  transform: skew(30deg) translateX(30%);
}

.profile-card:hover:after {
  transform: skew(-30deg) translateX(20%);
}



.signright {
  height: 200px;
  border: 1px solid red;
  padding: 10px;
  border-radius: 120px 90px 60px 30px/30px 60px 90px 120px;
} -->


===================================================================
<!-- 
body {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  font-size: 20px;
  font-family: Roboto;
}

svg {
  font-family: sans-serif;
}

text {
  font-size: 50px;
  fill: green;
  transform: translateY(3px);
  animation: wavyText 1.3s alternate steps(2, end) infinite;
}

.w {
  animation-delay: 0;
}

.a {
  animation-delay: 0.1s;
}

.v {
  animation-delay: 0.15s;
}

.y {
  animation-delay: 0.2s;
}

@keyframes wavyText {
  20%,
  100% {
    transform: translate(0, 3px);
  }

  0% {
    transform: translate(0, 0px);
  }
  10% {
    transform: translate(0, 3px);
  }
}
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 400 400">
  <text y="50%" class="w" font-size="20px">W</text>
  <text x="22%" y="50%" class="a">A</text>
  <text x="40%" y="50%" class="v">V</text>
  <text x="60%" y="50%" class="y">Y</text>
</svg> -->

===============================================================