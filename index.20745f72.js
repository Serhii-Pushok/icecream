var counters=document.querySelectorAll(".value"),speed=1e3;counters.forEach((function(e){var t=function(){var n=+e.getAttribute("akhi"),r=+e.innerText,i=n/speed;r<n?(e.innerText=Math.ceil(r+i),setTimeout(t,75)):e.innerText=n};t()}));
//# sourceMappingURL=index.20745f72.js.map
