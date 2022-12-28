const currentTime = () => {
    const el = document.querySelector("div#text");

    let date = new Date(); //habilitando função
    let hh = date.getHours(); 
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = hh < 10 ? `0${hh}` : hh; // operador ternário
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss}`;
    el.innerText = time; //retornando para o html 
    if (hh<18) {
        document.body.style.background = 'orange'
    }else{
        document.body.style.background = '#282828'
    }
};

currentTime();
setInterval(currentTime, 1000);

