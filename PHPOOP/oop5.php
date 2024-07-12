<?php

abstract class Produk
{
    public $judul = "Judul";
    public $penulis;
    public $penerbit;
    public $harga;

    abstract protected function infoProduk();
    abstract public function penerbitProduk();

    public function namaProduk()
    {
        return $this->judul;
    }
}

class Buku extends Produk{
    public function infoProduk(){
        $str = "{$this->judul} | {$this->penulis} | {$this->penerbit} | {$this->harga}";
        return $str;
    }

    public function penerbitProduk(){
        return $this->penerbit;
    }
}

class BukuTulis extends Buku{
    public function infoProduk(){
        return "Buku Tulis :" . $this->harga;
    }

    public function penerbitProduk(){
        return $this->penerbit;
    }
}


abstract class Buah{
    public function makan(){
        
    }
}

class Apel extends Buah{
    public function makan(){
        
    }
}

class Melon extends Buah{
    public function makan(){
        
    }
}

