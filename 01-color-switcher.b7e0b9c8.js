const t={body:document.querySelector("body"),container:document.querySelector(".container"),controllBtns:document.querySelector(".control-btns"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e;t.container.style.display="flex",t.container.style.alignItems="center",t.container.style.justifyContent="center",t.container.style.minHeight="100vh",t.startBtn.style.height="35px",t.startBtn.style.width="70px",t.stopBtn.style.height="35px",t.stopBtn.style.width="70px",t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.style.opacity="0.33",t.stopBtn.style.opacity="1"})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.stopBtn.style.opacity="0.33",t.startBtn.style.opacity="1"}));
//# sourceMappingURL=01-color-switcher.b7e0b9c8.js.map