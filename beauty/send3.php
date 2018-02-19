<?php
	
	
	if(isset($_POST['name'])){
		$to = "voluunter@mail.ru ";
		$subject = "Заявка с сайта Green Beauty Bar";
        $txt = "Имя отправителя - ".$_POST['name']."\r\nEmail - ".$_POST['email']."\r\nУслуга - ".$_POST['select']."\r\nТелефон - ".$_POST['phone']."\r\nКоментария - ".nl2br$_POST['comment'];
        $txt .= "\r\nБлок - Контакты";
        $headers = "From: Green Beauty Bar" . "\r\n";
		
		
		mail($to,$subject,$txt,$headers);
	
	}
?>