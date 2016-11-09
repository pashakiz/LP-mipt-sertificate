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
	$("form").submit(function() {

		var name = $(this).find("input[name='name']").val(),
			email = $(this).find("input[name='email']").val();

		if (!name || !email) {
			alert("Заполните поля формы.");
			return false;
		}

		var email_regexp = /.+@.+\..+/i;
		var email_test = email_regexp.test(email);
		if (!email_test) {
			alert("Введен некоректный Email-адрес.");
			return false;
		}

		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize(),
			success: function(response) {
				//$('#order_status').html(response);
				$('#order_status').html('Спасибо, Ваша заявка отправлена!');
				console.log("jquery-ajax-mail-success");
				console.log('response: ' + response);
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
				console.log('response: ' + xhr);
			}
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});