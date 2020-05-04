$(".sendMail").on("click", function() {
  var email = $('$#email').val().trim();
  var name = $('$#name').val().trim();
  var name = $('$#phone').val().trim();
  var name = $('$#message').val();

  if(email =="") {
    $('#errorMess').text("Введеите email");
    return false;
  } else if(name =="") {
    $('#errorMess').text("Введеите имя");
    return false;
  } else if(phone =="") {
    $('#errorMess').text("Введеите телефон");
    return false;
  } else if(message.length < 5) {
    $('#errorMess').text("Введеите  сообщение не менее 5 символов");
    return false;
  }

  $("errorMess").text("");

  #ajax({
    url: 'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {'name': name, 'phone': phone, 'email': email, 'message': message},
    dataType: 'html',
    beforeSend: function(){
      $("#sendMail").prop("disabled", true);
    },
    success: function(data){
      id (!data)
        alert("Были ошибки сообщение не отправленог");
      else
        $("#mailForm").trigger("reset");
      $("#sendMail").prop("disabled", false);
    },
  })
});
