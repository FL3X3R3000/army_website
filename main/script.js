//функция осуществляет задержку выполнения программы на указанное количество миллисекунд
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){ //подключаемся к документу
    async function onStart(){ /*определяем асинхронную функцию старта
    (чтобы можно было использовать нашу функцию sleep) */

        //открываем контент из-под заголовка
        $(".content").animate({top: "12vh"}, 1530, "swing");
        //ждем 1.6 секунд
        await sleep(1600);
        //подсказка (открой нав. панель) 'выползает'
        $(".clue").slideDown();
        //применяем стиль 'flex', чтобы текст выровнялся
        $(".clue").css({"display": "flex"});
    }
    //запускаем стартовую функцию
    onStart();

    $("#nav-ind").click(function(){ //если нажата иконка меню:
            $("#navboard").slideToggle(); //нав. панель 'выползает'
    })
})

