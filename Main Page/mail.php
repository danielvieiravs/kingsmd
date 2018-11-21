<?php

  $receiver = strip_tags($_POST['receiver']);
  $name = strip_tags($_POST['name']);
  $email = strip_tags($_POST['email']);
  $phone = strip_tags($_POST['phone']);
  $service = strip_tags($_POST['service']);
  $car = strip_tags($_POST['car']);
  $date = strip_tags($_POST['date']);
  $time = strip_tags($_POST['time']);
  $message = strip_tags($_POST['message']);

  $subject = 'Kings Movement & Detailing - '.$email;

  $content =
  '<html>
    <body>
      <table style="padding: 20px; border-collapse: collapse;">
        <tr style="font-size: 15px;">
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Name</td>
          <td>'.$name.'</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Email</td>
          <td>'.$email.'</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Phone</td>
          <td>'.$phone.'</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Car</td>
          <td>'.$car.'</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Service</td>
          <td>'.$service.'</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Date</td>
          <td>'.$date.'</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Time</td>
          <td>'.$time.'</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 10px 25px 10px 0;">Message</td>
          <td>'.$message.'</td>
        </tr>
      </table>
    </body>
  </html>';

  $headers = "From: " . $email . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  if (mail($receiver, $subject, $content, $headers)) {
    echo 'send';
  } else {
    echo 'reject';
  }

?>
