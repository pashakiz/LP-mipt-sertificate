<?php

$recepient = "pashakiz@gmail.com";
$sitename = "SyncroCity";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$ip = trim($_SERVER["REMOTE_ADDR"]);

$message = "Имя: $name \r\nТелефон: $phone \r\nТекст: $text \r\nIP: $ip";

$headers =	'MIME-Version: 1.0. '."\r\n" .
			'Content-type: text/plain; charset=utf-8'. "\r\n" .
			'From: '.$name.' <no-reply@zem-krym.ru>' . "\r\n" .
			'Reply-To: no-reply@zem-krym.ru' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();

mail($recepient, $pagetitle, $message, $headers);