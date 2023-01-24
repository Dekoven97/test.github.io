(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function d(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=d(s);fetch(s.href,a)}})();const v="/assets/wave1-169d6c69.svg",p="/assets/me-e5e32b55.png",m="/assets/back1-a835d9b3.svg",u="/assets/html-4bf19408.png",g="/assets/css-a1799679.png",_="/assets/php-b36213f9.png",f="/assets/js-5b6307db.png",h="/assets/bootstrap-d63609cf.png",b="/assets/wordpress-76dda9d5.png",k="/assets/laravel-cc0747c8.png",w="/assets/angular-99f6e56b.png";document.querySelector("#head").innerHTML=`

        <nav class="navbar" id="menu">

            <h1 class="logo"><a href="#head">De Koven</a> </h1>


             <ul class="menu">
                <li class="menu-item"><a href="#head">Home </a></li>
                <li class="menu-item"><a href="#about">About</a></li>
                <li class="menu-item"><a href="#skills">Skills</a></li>
                <li class="menu-item"><a href="#project">Project</a></li>
                <li class="menu-item"><a href="#Achievements">Achievements</a></li>
                <li class="social  linkedin"><a href="https://www.linkedin.com/in/james-de-koven-pierre-a515b1191/" target="_blank" rel="noreferer noopener"> <i class="fab fa-linkedin"></i> </a></li>
                <li class="social  twitter"><a href="https://twitter.com/DeKoven97" target="_blank" rel="noreferer noopener"><i class="fab fa-twitter-square"></i></a></li>

             </ul>

        </nav>


<!------moile menu--->
  <h1 class="logo2"><a href="#head">De Koven</a> </h1>
<div class ="Mmenu">

 <input type="checkbox" id="active">
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul>
<li><a  id="cb"  href="#head">Home</a></li>
<li><a  id="b" href="#about">About</a></li>
<li><a  id="d" href="#skills">skills</a></li>
<li><a  id="e" href="#project">Project</a></li>
<li><a  id="f" href="#achievements">achievements</a></li>
<a class="msocial" href="https://www.linkedin.com/in/james-de-koven-pierre-a515b1191/" target="_blank" rel="noreferer noopener"> <i class="fab fa-linkedin"></i> </a></li>
  <a  class="msocial"  href="https://twitter.com/DeKoven97" target="_blank" rel="noreferer noopener"><i class="fab fa-twitter-square"></i></a></li>

</ul>
  
</div>
</div>



















   <div class="herosection" >

          

        <div class="slogan">
        
        
           <!-- <img  src="${v}" class="bgwave1" alt="wave"    />-->
        
           <div class="title " >Creating website that engage users</div>
             <p class="short animate__animated animate__backInLeft">Web design is not about making a website it’s about making an investment in your
                    organization.
                    Successful web design takes into account more than just aesthetics… It’s a reflection of you, your
                    company, and your vision.</br>So let's Build a website that tells your story in a memorable way</p>
        
        
        <a href="#project" class="heroCTA">Project &darr; </a>
        
        </div>



<img class="heroPic"   src="${m}" />





                        <div class="ocean">
                             <div class="wave"></div>
                             <div class="wave"></div>
                             <div class="wave"></div>
                        </div>

    </div>


`;window.onscroll=function(){L()};var r=document.getElementById("menu"),y=r.offsetTop;function L(){window.pageYOffset>y?r.classList.add("sticky"):r.classList.remove("sticky")}const t=document.querySelectorAll(".menu-item"),n=document.querySelectorAll("section");function c(){let e=n.length;for(;--e&&window.scrollY+50<n[e].offsetTop;);t.forEach(i=>i.classList.remove("active")),t[e].classList.add("active")}c();window.addEventListener("scroll",c);$("#cb").click(function(e){$("#active").click(function(i){i.stopPropagation()}),$("#active").prop("checked",!$("#active").prop("checked"))});$("#b").click(function(e){$("#active").click(function(i){i.stopPropagation()}),$("#active").prop("checked",!$("#active").prop("checked"))});$("#d").click(function(e){$("#active").click(function(i){i.stopPropagation()}),$("#active").prop("checked",!$("#active").prop("checked"))});$("#e").click(function(e){$("#active").click(function(i){i.stopPropagation()}),$("#active").prop("checked",!$("#active").prop("checked"))});$("#f").click(function(e){$("#active").click(function(i){i.stopPropagation()}),$("#active").prop("checked",!$("#active").prop("checked"))});$("#g").click(function(e){$("#active").click(function(i){i.stopPropagation()}),$("#active").prop("checked",!$("#active").prop("checked"))});document.querySelector("#about").innerHTML=`

<div class="abTitle">About</div>

<div class="contain">




<div class="column-1">

<div class="name">James De Koven PIERRE
<span>Web Developer-Programmer-Junior Designer-Business Manager</span>
</div>

   <p class="bref">Holder of a diploma in management and a degree in computer science from <a href="https://www.esih.edu/"  target="_blank"  rel="noopener noreferrer "  >ESIH</a> , I am
                        passionate about technology especially in Web development, designing, 3d and VR/AR I am always
                        eager for new knowledge and I adapt quickly</p>


                        <a href="" class="aboutCTA">Dowload my resume  &nbsp; <ion-icon   class="aboutCTAIcon" name="cloud-download-outline"></ion-icon></a>

</div>



<div  class="column-1 pic" >
<img  class="me" src="${p}"  />

</div>

</div>





`;document.querySelector("#skills").innerHTML=`

<div class="skTitle">Skills</div>


<div class="parent">
<div class="div1  skills_item">  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"  target="_blank"   rel="noreferrer noopener" > <img class="logo_size hvr-grow  " src="${u}"       /> </a> </div>
<div class="div2  skills_item">   <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size  hvr-grow " src="${g}"     />   </a>  </div>
<div class="div3  skills_item">   <a href="https://www.php.net/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size  hvr-grow " src="${_}"     />  </a>   </div>
<div class="div4  skills_item">   <a href="https://www.javascript.com/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size hvr-grow " src="${f}"     />   </a>  </div>
<div class="div5  skills_item">   <a href="https://getbootstrap.com/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size hvr-grow " src="${h}"     />   </a>  </div>
<div class="div6  skills_item">   <a href="https://wordpress.org/"  target="_blank"   rel="noreferrer noopener" >  <img  class="logo_size3 hvr-grow " src="${b}"     /> </a>   </div>
<div class="div7  skills_item">   <a href="https://laravel.com/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size hvr-grow " src="${k}"     />  </a>   </div>
<div class="div8  skills_item">   <a href="https://angular.io/"  target="_blank"   rel="noreferrer noopener" > <img  class="logo_size2 hvr-grow " src="${w}"     />   </a>  </div>
</div>

  


`;document.querySelector("#project").innerHTML=`


<div class="proTitle">Project</div>

<div class="slider">
    <div class="slider__slide slider__slide--active" data-slide="1">
        <div class="slider__wrap">
            <div class="slider__back"></div>
        </div>
        <div class="slider__inner">
            <div class="slider__content">
                <h1><a class="alink_dark" href="#" >ebnhaïti.org </a></h1><a class="go-to-next link">next</a>
            </div>
        </div>
    </div>
    <div class="slider__slide" data-slide="2">
        <div class="slider__wrap">
            <div class="slider__back"></div>
        </div>
        <div class="slider__inner">
            <div class="slider__content">
                <h1><a class="alink_light" href="#" >hustero.com </a></h1><a class="go-to-next link">next</a>
            </div>
        </div>
    </div>
    <div class="slider__slide" data-slide="3">
        <div class="slider__wrap">
            <div class="slider__back"></div>
        </div>
        <div class="slider__inner">
            <div class="slider__content">
         <h1><a class="alink_dark" href="#" >inufocad.edu </a></h1><a class="go-to-next link">next</a>
            </div>
        </div>
    </div>
    <div class="slider__indicators"></div>

    












`;$(document).ready(function(){for(var e=1;e<=$(".slider__slide").length;e++)$(".slider__indicators").append('<div class="slider__indicator" data-slide="'+e+'"></div>');setTimeout(function(){$(".slider__wrap").addClass("slider__wrap--hacked")},1e3)});function S(e){$(".slider__slide").removeClass("slider__slide--active"),$(".slider__slide[data-slide="+e+"]").addClass("slider__slide--active")}$(".slider__next, .go-to-next").on("click",function(){var e=Number($(".slider__slide--active").data("slide")),i=$(".slider__slide").length;e++,e>i&&(e=1),S(e)});document.querySelector("#Achievements").innerHTML=`

<div class="achTitle">Achievements</div>

<div class="blog-slider">
  <div class="blog-slider__wrp swiper-wrapper">
   
  
  
  <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
       <!-- <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Hustero</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    
    


    
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
     <!--   <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Zentoupatou</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    
  
  
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
       <!-- <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    


    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="">
      </div>
      <div class="blog-slider__content">
       <!-- <span class="blog-slider__code">26 December 2019</span>-->
        <div class="blog-slider__title">Lorem Ipsum Dolor</div>
        <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    

  
  
    </div>
  <div class="blog-slider__pagination"></div>
</div>

`;new Swiper(".blog-slider",{spaceBetween:30,effect:"fade",loop:!0,mousewheel:{invert:!1},pagination:{el:".blog-slider__pagination",clickable:!0}});document.querySelector("footer").innerHTML=`

<div class="footer_social">

<ul class="footer_social_item">
<li><a href="mailto:jamesdekoven43@gmail.com" rel="noopenenr noreferrer" ><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
<li><a href="https://github.com/Dekoven97"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
<li><a href="https://www.linkedin.com/in/james-de-koven-pierre-a515b1191/"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
<li><a href="https://twitter.com/DeKoven97"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
<li><a href="https://www.facebook.com/pierre.jamesdekoven"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
<li><a href="https://www.instagram.com/de_koven/"   rel="noopenenr noreferrer"    target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>

</ul>



</div>

<div class="tag"  >


<div class="ecopy">&copy; <span id="ecopy"></span/> DeKoven</div>





</div>





`;document.getElementById("ecopy").innerHTML=new Date().getFullYear();
