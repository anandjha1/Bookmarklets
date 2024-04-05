javascript:(function(){
    const link = document.createElement("a");
    link.href = $("audio source").src;
    link.setAttribute("target", "_blank");
    setTimeout(()=>link.click(), 100);
})();
