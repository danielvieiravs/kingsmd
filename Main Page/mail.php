<?php

  $receptor = $_POST['receptor'];
  $title = $_POST['title'];
  $email = $_POST['email'];
  $data = $_POST['data'];
  $subject = 'Kings Movement & Detailing - '.$email;

  $content = '<html><body><table style="padding: 20px; border-collapse: collapse;">
  <tr style="font-size: 20px;">
    <td style="font-weight: bold; padding: 10px 25px 10px 0;">'.$title.'</td>
  </tr>';

  foreach ($data as $key => $value) {
    $content .=
    '<tr style="font-size: 15px;">
      <td style="font-weight: bold; padding: 15px 25px 10px 0;">'.$key.'</td>
    </tr>';

    foreach ($value as $data) {
      if($data['title']) {
        $content .=
        '<tr style="font-size: 15px;">
          <td style="font-weight: bold; padding: 15px 25px 10px 0;">'.$data['title'].'</td>
        </tr>';
      } else {
        $content .=
        '<tr style="font-size: 15px;">
          <td style="font-weight: bold; padding: 5px 25px;">'.$data['prop'].'</td>
          <td>'.$data['value'].'</td>
        </tr>';
      }
    }
  }
  $content .= '</table></body></html>';

  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Return-Path: " . $email . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "X-Priority: 2\nX-MSmail-Priority: high";
  $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  if (mail($receptor, $subject, $content, $headers)) {
    echo 'ok';
  }else{
    echo 'error';
  }

?>
