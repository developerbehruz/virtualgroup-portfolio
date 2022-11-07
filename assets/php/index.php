<?php
// error_reporting(0);

$data = ['ok'=>false, 'code'=>null, 'message'=>null, 'result'=>[]];
if (isset($_REQUEST['do'])) {
    if ($_REQUEST['do'] == "sendMessage") {
        if (isset($_REQUEST['name']) && isset($_REQUEST['phone']) && isset($_FILES['cw'])) {
            $allowed = array('pdf','zip','txt');
            $filename = $_FILES['cw']['name'];
            $name = $_REQUEST['name'];
            $phone = $_REQUEST['phone'];
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            if (in_array($ext, $allowed)) {
                move_uploaded_file($_FILES['cw']['tmp_name'], '../upload/' . $filename);
                $text = "Ism familya: $name\nTelefon raqam: $phone";
                $sendMessage = bot('sendDocument', [
                    'chat_id' => 1130942146,
                    'document' => new CURLFile("../upload/".$filename),
                    'caption' => $text
                ]);
                $data['ok'] = true;
                $data['code'] = 200;
                $data['message'] = "API replyed successfully";
                $data['result'][] = $sendMessage;
                unlink("../upload/". $filename);
            }else{
                $data['code'] = 400;
                $data['message'] = "File type is not supported";
            }
        }else{
            $data['code'] = 402;
            $data['message'] = "name, phone and cw file are requered";
            $data['codes'] = $_FILES;
        }
    }else if($_REQUEST['do'] == "sendMessageContact"){
        if (isset($_REQUEST['fName']) && isset($_REQUEST['lName']) && isset($_REQUEST['mail']) && isset($_REQUEST['phone']) && isset($_REQUEST['message'])) {
            $fName = $_REQUEST['fName'];
            $lName = $_REQUEST['lName'];
            $mail = $_REQUEST['mail'];
            $phone = $_REQUEST['phone'];
            $desc = $_REQUEST['message'];

            $text = "<b>Ism:</b> $fName\n<b>Familya:</b> $lName\n<b>Email:</b> $mail\n<b>Telefon raqam:</b> $phone\n<b>Matn:</b> $desc";
            $sendMessage = bot('sendMessage', [
                'chat_id' => 1130942146,
                'text' => $text,
                'parse_mode' => 'html'
            ]);
            $data['ok'] = true;
            $data['code'] = 200;
            $data['message'] = "API replyed successfully";
            $data['result'][] = $sendMessage;
        }else{
            $data['code'] = 402;
            $data['message'] = "name, phone mail and desc are requered";
            $data['codes'] = $_FILES;
        }
    }   
}else{
    $data['code'] = 400;
    $data['message'] = 'method not found';
}

echo json_encode($data,  JSON_PRETTY_PRINT);

function bot($method, $datas=[]){
    $url = "https://api.telegram.org/bot5508228393:AAHx2G0iKfUsf5z435dTsuDDLIi3lYmFViE/".$method;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $datas);
    $res = curl_exec($ch);
    if (curl_error($ch)) {
        var_dump(curl_error($ch));
    }else{
        return json_decode($res);
    }
}

// header('Location: ../../vacancy/')

?>