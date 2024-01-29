import{i as p,S as h,a as P}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const x="41917530-74216f8e6af2c90f64ec8c0b5",E="https://pixabay.com/api/",S=document.querySelector(".form-inline"),o=document.querySelector(".card-container"),a=document.querySelector(".label"),f=document.getElementById("preloader");S.addEventListener("submit",D);function q(){o.innerHTML='<div class="loader"></div>'}function w(){const e=o.querySelector(".loader");e&&e.remove()}const d="is-hidden";function u(e){e.classList.add(d)}function M(e){e.classList.remove(d)}function H(e,r){r.classList.add(d),e.disabled=!1}function T(e,r){r.classList.remove(d),e.disabled=!0}const c={q:"",page:1,maxPage:0,per_page:40};let m="";async function D(e){e.preventDefault(),o.innerHTML="";const r=e.currentTarget,n=r.elements.picture.value.trim();if(m=n,n===""||n==null){p.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"}),o.innerHTML="",u(a);return}q();try{const{hits:i,totalHits:t}=await g(n);i&&i.length>0?(c.maxPage=Math.ceil(t/c.per_page),y(i,o),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),i&&i.length>0&&i.length!==t?(M(a),a.addEventListener("click",b)):u(a)):(o.innerHTML="",p.error({title:"Error",message:"❌Sorry, there are no images matching your search query. Please, try again!"}),u(a))}catch(i){console.log(i)}finally{w(),r.reset()}}function g(e,r=1){return P.get(E,{params:{key:x,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}}).then(n=>n.data)}function y(e,r){const n=e.map(({webformatURL:i,likes:t,views:s,comments:l,downloads:v,largeImageURL:L})=>`<a href="${L}" class= "picture-link">
    <img src = "${i}">
    <div class= "picture-content">
        <div class= "picture-text">
            <span class= "picture-title">Likes</span>
            <span class= "picture-sub-title">${t}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Views</span>
            <span class= "picture-sub-title">${s}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Comments</span>
            <span class= "picture-sub-title">${l}</span>
        </div>
        <div class= "picture-text">
            <span class= "picture-title">Downloads</span>
            <span class= "picture-sub-title">${v}</span>
        </div>
    </div>
</a>`).join();r.insertAdjacentHTML("beforeend",n)}async function b(){c.page+=1,T(a,f);try{const{hits:e}=await g(m,c.page);y(e,o);const r=o.querySelector(".picture-link").getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),new h(".card-container a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}catch(e){console.log(e)}finally{H(a,f),c.page===c.maxPage&&(u(a),p.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`}),a.removeEventListener("click",b))}}
//# sourceMappingURL=commonHelpers.js.map
