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
                    alert("¡Feliz cumpleaños, Carelly! 🎉\n\nEspero que este cumpleaños esté lleno de alegría y sorpresas. Disfruta mucho de este día especial");
                    alert("En tus 19 años, has logrado tanto y aún asi te queda un largo camino por recorrer.");
                    alert("Recuerda siempre que la vida es un viaje lleno de aprendizajes, oportunidades y nuevas metas. Espero sigas brillando y persiguiendo tus sueños ");
                    alert("Te deseo un año lleno de cariño, felicidad y éxitos. ¡Feliz cumpleaños, Carelly! ");
                    alert("wiwiwiwi")
                    alert("🐄");
                    audio.setTimeout=1;
                }, 100);
            });

        }
    );
});
//regalo


          
