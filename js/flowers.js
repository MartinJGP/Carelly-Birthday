onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // const targetDate = new Date(new Date().getFullYear(), 7, 13);
    // const now = new Date();
    // const difference = targetDate - now;
    // if (difference > 0) {
    //     window.location.href = "present.html";
    // }
}
const audio = document.getElementById("background-audio");
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".carelly").addEventListener("click", async () => {
            audio.setTimeout=0;
            audio.pause();
            audio.play().then(() => {
                setTimeout(() => {
                    alert("Sabes el significado de las tulipanes?");
                    alert("Los tulipanes morados son conocidos por representar una belleza única y misteriosa.")
                    alert("Estos tulipanes también simbolizan la nobleza, el lujo y la elegancia.")
                    alert("En muchas culturas, los tulipanes morados se asocian con la realeza y la admiración profunda.")
                    alert("Regalar estos tulipanes es decir que eres única, admirada y profundamente especial.")
                    alert("Hoy, en tu 18 cumpleaños, quiero celebrarte con la misma belleza y elegancia que representan estos tulipanes.")
                    alert("Que esta nueva etapa de tu vida esté llena de momentos nobles y admirables, tal como lo simbolizan los tulipanes morados.")
                    alert("¡Feliz 18 cumpleaños! Que tu día esté lleno de amor, alegría y mucha diversión. Con cariño, Martin :D.")
                }, 100);
            });

        }
    );
});
//regalo


          
