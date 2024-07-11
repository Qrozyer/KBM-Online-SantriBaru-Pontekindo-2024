<?php

class Laptop{
    const AUTHOR = "Fandy";
    const APK = "InfoLaptopTerbaru";

    var string $brand = "Lenovo";
    
    function __construct(){
        echo "Selamat datang di Aplikasi " . self::APK . PHP_EOL;
    }

    function infoLaptop($name){
        echo "Selamat Datang " . $name . PHP_EOL;
        echo "Laptop ini punya " . self::AUTHOR . PHP_EOL;
        echo "Mereknya $this->brand" . PHP_EOL;
    }

    function __destruct(){
        echo "Saya " . self::AUTHOR . " Mengucapkan Terimakasih Telah Menggunakan Aplikasi " . self::APK . PHP_EOL;
    }
}


class Handphone extends Laptop{
    const AUTHOR = "Firman";
    function infoHandphone(){
        echo "Ini Handphone " . $this->brand . PHP_EOL;
        echo "Dibuat Oleh " . parent::AUTHOR . PHP_EOL;
    }
}

$lenovo = new Handphone();
$lenovo->infoHandphone();