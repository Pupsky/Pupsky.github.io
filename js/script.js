$(function () {
    $('.buttonmenu').click(function () {
        $('.menu').toggleClass('show-menu')
        $('.registr').toggleClass('show-menu2')
    })
});
//код открытия меню в версиях с маленьким разрешением

$("#sendform").on("click", function () {
    let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    let reg1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var email = $("#e-mail").val().trim();
    var password = $("#password").val().trim();
    var about = $("#about").val().trim();


    if (name == "") {
        $("#error").text("Заполните: ФИО");
        return false;
    }
    else if (!reg.test(phone)) {
        $("#error").text("Номер телефона не соответствует");
        return false;
    }
    else if (!reg1.test(email)) {
        $("#error").text("Электорнный адрес не соответствует");
        return false;
    }
    else if (password == "") {
        $("#error").text("Заполните: Пароль");
        return false;
    }
    else if ($("#rule").prop("checked") === false)  {
        $("#error").text("Чекбоксы не выбраны");
        return false;
    }
        else if ($("#ruled").prop("checked") === false) {
        $("#error").text("Чекбоксы не выбраны");
        return false;
    }
     else {
        $("#error").text("");
    }

$ajax ({
    url: '/ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {'name': name, 'phone': phone, 'email': email, 'password': password, 'about': about},
    dataType: 'html',
    beforSend: function() {
        $("#sendform").prop("disabled", true);
    },
    success: function(data) {
        alert(data);
        $("#sendform").prop("disabled", false);
    }
});
});

function myFunction() {

  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
