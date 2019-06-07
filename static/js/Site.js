//Скрипт для всплывающего окна Бронирования
$('.js-button').click(function(){
	$('#Sixth_Block').addClass('active')
})

$(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#Sixth_Block").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#Sixth_Block").hide();
    }