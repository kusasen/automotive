function findLangIndex(e){switch(e){case"es":e=1;break;case"de":e=2;break;case"it":e=3;break;case"fr":e=4;break;default:e=0}return e}function MultiLanguage(){console.log((localStorage.getItem("lang"),localStorage.getItem("lang"))),unityInstance.SendMessage("Language_Manager","SendToUnity",localStorage.getItem("lang")?localStorage.getItem("lang"):"en"),unityInstance.SendMessage("Language_Manager","loadLanguage")}window.onload=function(){let e=document.querySelector(".lang-dropdown"),t=localStorage.getItem("lang")?localStorage.getItem("lang"):localStorage.setItem("lang","en"),a=e.querySelectorAll(".dropdown-item");for(i=0;i<a.length;i++)a[i].classList.remove="active";a[findLangIndex(t)].classList.add="active",a.forEach((e=>{e.addEventListener("click",(function(){let e=this.getAttribute("data-lang");localStorage.setItem("lang",e),MultiLanguage()}))}));let n=document.querySelector(".btn-switch-tab"),l=document.querySelector(".unity-menu");n.addEventListener("click",(function(){l.classList.toggle("show")}))};