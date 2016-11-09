$(document).ready(function() {

	// Показывает имя файла, выбранного инпутом (в области кастомного инпута)
	$('.inputfile').change(function() {
		var filePath, filePathArr, file;
		filePath = $(this).find(".inputfile__input").val();
		filePathArr = filePath.split("\\");
		file = filePathArr[filePathArr.length - 1];
		$(this).find(".inputfile__name").html(file);

	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$('#form-sert').submit(function(e) {debugger;

		var name = $(this).find("input[name='name']").val();
		var	email = $(this).find("input[name='email']").val();
		var	cert = $(this).find("input[name='cert']").val();
		var	photo = $(this).find("input[name='photo']").val();

		if (!name || !email || !cert || !photo) {
			alert("Заполните поля формы.");
			return false;
		}

		var email_regexp = /.+@.+\..+/i;
		var email_test = email_regexp.test(email);
		if (!email_test) {
			alert("Введен некоректный Email-адрес.");
			return false;
		}

		console.log('test1');
		var formData = new FormData(this);
		console.log('test2');

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			success: function(data, status) {
				//$('#order_status').html('Спасибо, Ваша заявка отправлена!');
				console.log("jquery-ajax-mail-success");
				console.log("data:" + data + "; status: " + status);
			},
			error:  function(jqXHR, exception){
				alert('Возникла ошибка: ' + jqXHR);
				console.log("jqXHR:" + jqXHR + "; exception: " + exception);
			}
		});
		e.preventDefault();
	});

});