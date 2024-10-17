document.getElementById("randomButton").addEventListener("click", function() {
    // Создаем массив файлов в папке
    const files = ["../antivirus.html", "../Classification-and-tasks-of-information-technologies.html", "../Information-concept.html", "../input-and-output.html", "../smart.html", "../storage.html", "../tablproc.html", "../text-proc-autoglav.html", "../text-proc.html", "tabl-proc-zad1.html", "tabl-proc-zad2.html", "tabl-proc-zad3.html", "tabl-proc-zad4.html", "text-proc-zad1.html", "text-proc-zad2.html", "text-proc-zad3.html", "text-proc-zad4.html"]; // Замените на имена ваших файлов

    // Получаем случайный файл из массива
    const randomFile = files[Math.floor(Math.random() * files.length)];

    // Переходим на случайный HTML-сайт
    window.location.href = randomFile;
});