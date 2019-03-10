<?php 
   if(isset($_POST['submit']))
   {
		$first_name=$_POST['FirstName'];
		$last_name=$_POST['LastName'];
		$visitors_mail=$_POST['Email'];
		$visitors_phone=$_POST['Phone'];
		$message=$_POST['Message'];
		
		$mail_from='https://.000webhostapp.com';
	
		$mail_subject="New Data Entry";
	
		$mail_body="User First Name: $first_name.\n".
				"User Last Name: $last_name.\n".
				  "User mail id: $visitors_mail.\n".
				    "User message: $message.\n";
					
					
		$to: 'prabhasmondal.09.02.1999@gmail.com';
		
		$headers="From: $mail_from \r\n";
		$headers="Reply-To: $visitors_mail \r\n";
	
		if(mail($to,$mail_subject,$mail_body,$headers))
		{
			echo 'Email has been sent.';
		}
		else
		{
			echo 'There is an error sending the mail'
		}
	
		header("refresh:4; url= index.html");
	
?>