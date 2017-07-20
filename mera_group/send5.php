<?php
	
	
	if(isset($_POST['name'])){
		$to = "geomera.od.ua@gmail.com ";
		$subject = "Заявка с сайта MERA";
        $txt = "Имя - ".$_POST['name']."\r\nEmail - ".$_POST['email']."\r\nТелефон - ".$_POST['phone']."\r\nТекст - ".$_POST['text'];
        $txt .= "\r\nБлок - Заказать систему (Спорт)";
        $headers = "From: MERA GROUP" . "\r\n";
		
		
		mail($to,$subject,$txt,$headers);
	
	}
?>