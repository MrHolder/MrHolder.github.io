<?php 
$recepient = "andreysych@gmail.com";
if (isset($_POST["phone"])){
	$phone = $_POST["phone"];
	$message = "Телефон: $phone <br>";
}
if (isset($_POST["fio"])){
	$fio = $_POST["fio"];
	$message .= "ФИО: $fio <br>";
}
if (isset($_POST["email"])){
	$email = $_POST["email"];
	$message .= "E-mail: $email <br>";
}
if (isset($_POST["packet"])){
	$packet = $_POST["packet"];
	$message .= "Пакет: $packet <br>";
}

$subject = 'Заявка с сайта';

$headers = "From:".$recepient."\r\n".
"Content-type:text/html;charset=utf-8";
$body = $message;

mail($recepient, $subject, $body, $headers);

if ($_POST['type'] == 'program') {
	$message = '<a href="https://www.google.com/">https://www.google.com/</a>';
} else {
	$message = "<p>Привет, " . $fio . ".</p>
<p>Ваша заявка принята!</p>

Наши специалисты по работе с клиентами скоро свяжутся с вами, чтобы детально обсудить ваши цели и очертить план действий по достижению результата.<br>
А пока наши менеджеры обрабатывают вашу заявку, вы можете:<br>

<ul>
<li>подписаться на новости компании в <a href='https://www.facebook.com/webacademyukraine'>Facebook</a> и <a href='https://twitter.com/webacademyteam'>Twitter</a>;</li>
<li>посмотреть отзывы студентов и примеры защити проектов на <a href='https://www.youtube.com/user/webacademycomua'>YouTube.</a></li>
</ul>

Хорошего дня!<br><br>

С уважением,<br>
The Web Academy Team";
}

mail($email, $subject, $message, $headers);

?>