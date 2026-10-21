<?php
$email;
$message;
$captcha;
$name = filter_input(INPUT_POST, 'name');
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$phone = filter_input(INPUT_POST, 'phone');
$subject = filter_input(INPUT_POST, 'subject');
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
$captcha = filter_input(INPUT_POST, 'token', FILTER_SANITIZE_STRING);


if (isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {
	$secret = '6LeDtcgpAAAAAMaPtUPrbcnT8O6AJWv-JXLeghqc';
	$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $_POST['g-recaptcha-response']);
	$responseData = json_decode($verifyResponse);
	if ($responseData->success) {
		session_start();
		$key = $_SESSION["key2"];
		$token = $_SESSION["token2"];
		list($crypted_token, $enc_iv) = explode("::", $_POST['s_key']);
		;
		$cipher_method = 'aes-128-ctr';
		$enc_key = openssl_digest(php_uname() . $key, 'SHA256', TRUE);
		$token1 = openssl_decrypt($crypted_token, $cipher_method, $enc_key, 0, hex2bin($enc_iv));
		$client_side_token = $token1;
		unset($crypted_token, $cipher_method, $enc_key, $enc_iv);
		//echo $client_side_token.'=='.$token; exit;
		if ($client_side_token == $token) {

			if ($name != "" && $phone != "" && $email != "" && preg_match('/^[0-9]{10}+$/', $phone)) {


				// $name !="" && $phone !="" && $email !=""
				/**************** Get current URL ***************/
				$protocol = empty($_SERVER['HTTPS']) ? 'http' : 'https';
				$domain = $_SERVER['SERVER_NAME'];
				$url = "${protocol}://${domain}";
				/**************** Get current URL ***************/
				require './lib/PHPMailerAutoload.php';
				$mail = new PHPMailer;
				$mail->isSMTP();
				$mail->Host = "101.53.144.112"; // SMTP server	
				$mail->SMTPAuth = true; // enable SMTP authentication		
				$mail->Port = 25; // set the SMTP port for the GMAIL server
				$mail->Username = "info@midinnings.in"; // SMTP account username
				$mail->Password = "A@h5sp99gA4~5qv3"; // SMTP account password     

				$mail->AddAddress("web@midinnings.com", $name);                
				$mail->AddBcc("bdm@shreevinayakevents.com", $name);				
				$mail->AddBcc("web@midinnings.com", $name);                
				$mail->AddBcc("seo@midinnings.com", $name);                

				$mail->SetFrom( 'info@midinnings.in' , 'Shree Vinayak Hotels & Resorts: ', $name);
				$mail->AddReplyTo('info@midinnings.in', 'Shree Vinayak Hotels & Resorts Enquiry ');
				$mail->Subject = sprintf('Shree Vinayak Hotels & Resorts Enquiry : ', $name);
				$content = '<html><body>';
				$content .= '<table border="0" cellpadding="0" cellspacing="1" style="font:normal 13px arial; width:100%; max-width:750px;">';
				$content .= '<tr><td colspan="2" align="center" style="border:1px solid #3E3238;"></td></tr></br>';
				$content .= '<tr><td colspan="2" align="center" style="border:1px solid #3E3238; background:#3E3238;"><h2 style="color:#fff; margin:8px 0;">Enquiry Details</h2></td></tr></br>';
				$content .= '<tr><td style="border:1px solid #e8e8e8; padding:10px; color:#444; background:#f9f9f9;"><strong>Subject</strong></td><td style="border:1px solid #e8e8e8; padding:10px;">&nbsp;' . @$subject . '</td></tr></br>';
				$content .= '<tr><td style="border:1px solid #e8e8e8; padding:10px; color:#444; background:#f9f9f9;"><strong>Name</strong></td><td style="border:1px solid #e8e8e8; padding:10px;">&nbsp;' . @$name . '</td></tr></br>';
				$content .= '<tr><td style="border:1px solid #e8e8e8; padding:10px; color:#444; background:#f9f9f9;"><strong>Email</strong></td><td style="border:1px solid #e8e8e8; padding:10px;">&nbsp;' . @$email . '</td></tr></br>';
				$content .= '<tr><td style="border:1px solid #e8e8e8; padding:10px; color:#444; background:#f9f9f9;"><strong>Phone</strong></td><td style="border:1px solid #e8e8e8; padding:10px;">&nbsp;' . @$phone . '</td></tr></br>';
				$content .= '<tr><td style="border:1px solid #e8e8e8; padding:10px; color:#444; background:#f9f9f9;"><strong>Message</strong></td><td style="border:1px solid #e8e8e8; padding:10px;">&nbsp;' . @$message . '</td></tr></br>';
				$content .= '</table>';
				$content .= '</body></html>';

				$mail->msgHTML($content);
				if (!$mail->send()) {
					$response['mess'] = $mail->ErrorInfo;
					$response['status'] = '0';
					$message = "Error occur please try again.";
					$status = '0';
				} else {
					$response['mess'] = "Your message was sent successfully.";
					$response['status'] = '1';
					$message = "Your message was sent successfully.";
					$status = '1';
				}

			} else {
				$response['mess'] = "Error occur Check All Fields & Please try again.";
				$response['status'] = '0';
				$message = "Error occur please try again.";
				$status = '0';
			}
		} else {
			// //echo json_encode(array('success' => 'false'));
			// $response = "Captcha Error | Please Refresh The Page Once & Try Again.";
			// echo json_encode(array('success' => 'false', 'message' => $response));
			$response['mess'] = $mail->ErrorInfo;
			$response['status'] = '0';
			$message = $mail->ErrorInfo;
			$status = '0';
		}
	} else {
		echo '';
		$response['mess'] = "Captcha Error | Please Refresh The Page Once & Try Again.";
		$response['status'] = '0';
		$message = "Captcha Error | Please Refresh The Page Once & Try Again.";
		$status = '0';
	}
}

echo json_encode($response);
?>