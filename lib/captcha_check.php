<?php
session_start();
if(isset($_POST) && count($_POST) > 0 && !isset($_POST['type'])){
    $response = 1;
    if(empty($_SESSION['captcha_code']) || strcasecmp($_SESSION['captcha_code'], $_POST['captcha']) != 0)
    {
        $response = 0;
    }
    echo $response; exit;
}

if(isset($_POST) && count($_POST) > 0 && isset($_POST['type']) && $_POST['type']==1){
    $response = 1;
    if(empty($_SESSION['captcha_code1']) || strcasecmp($_SESSION['captcha_code1'], $_POST['captcha']) != 0)
    {
        $response = 0;
    }
    echo $response; exit;
}
if(isset($_POST) && count($_POST) > 0 && isset($_POST['type']) && $_POST['type']==2){
    $response = 1;
    if(empty($_SESSION['captcha_code2']) || strcasecmp($_SESSION['captcha_code2'], $_POST['captcha']) != 0)
    {
        $response = 0;
    }
    echo $response; exit;
}
?>