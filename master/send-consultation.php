<?php
	
	
	if(isset($_POST['name'])){
		$to = "masterskoykiev@gmail.com";
		$subject = "Консультация (Мастерская)";
		$txt = "Имя - ".$_POST['name']."\r\nТелефон - ".$_POST['phone'];
		$headers = "From: Masterskaya" . "\r\n";

		mail($to,$subject,$txt,$headers);
	
	}
?>