<?php

$recepient = "pashakiz@gmail.com";
$sitename = "SyncroCity";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$cert = trim($_POST["cert"]);

$message = "Имя: $name \r\nТелефон: $phone \r\nТекст: $text \r\nIP: $ip";

$headers =	'MIME-Version: 1.0. '."\r\n" .
			'Content-type: text/plain; charset=utf-8'. "\r\n" .
			'From: '.$name.' <'.$email.'>' . "\r\n" .
			'Reply-To: '.$email. "\r\n" .
			'X-Mailer: PHP/' . phpversion();

mail($recepient, $pagetitle, $message, $headers);