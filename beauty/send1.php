<?php
	
	
	if(isset($_POST['name'])){
		$to = "voluunter@mail.ru ";
		$subject = "Заявка с сайта Green Beauty Bar";
        $txt = "Имя - ".$_POST['name']."\r\nТелефон - ".$_POST['phone'];
        $txt .= "\r\nОбратный звонок";
        $headers = "From: Green Beauty Bar" . "\r\n";
		
		
		mail($to,$subject,$txt,$headers);
	
	}
?>