<?php
	
	
	if(isset($_POST['name'])){
		$to = "voluunter@mail.ru ";
		$subject = "Заявка с сайта Green Beauty Bar";
        $txt = "Направление - ".$_POST['select']."\r\nТелефон - ".$_POST['phone']."\r\nФИО пациента - ".$_POST['name']."\r\nДата - ".$_POST['date']."\r\nВремя - ".$_POST['time'];
        $txt .= "\r\nБлок - Запишитесь на прием";
        $headers = "From: Green Beauty Bar" . "\r\n";
		
		
		mail($to,$subject,$txt,$headers);
	
	}
?>