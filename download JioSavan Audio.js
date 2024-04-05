javascript:(function(){
    const link = document.createElement("a");
    link.href = document.querySelector("audio source").src;
    link.setAttribute("target", "_blank");
    setTimeout(function(){link.click()}, 100);
})();
