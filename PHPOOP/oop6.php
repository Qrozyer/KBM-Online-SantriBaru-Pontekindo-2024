<?php

interface Produk{
    const AUTHOR = "Rizki";
    public function infoProduk();
    public function penerbitProduk();
}

interface CetakInfoProduk {
    public function cetak(Produk $produk);
}

class Buku implements CetakInfoProduk, Produk{
    public $judul;
    public $penulis;
    public $penerbit;
    public $harga;
    public function __construct($judul = "Judul", $penulis = "Penulis", $penerbit = "Penerbit", $harga = 0){
        $this->judul = $judul;
        $this->penulis = $penulis;
        $this->penerbit = $penerbit;
        $this->harga = $harga;
    }
    public function infoProduk(){
        $str = "{$this->judul} | {$this->penulis} | {$this->penerbit} | {$this->harga}";
        return $str;
    }
    public function penerbitProduk(){
        return $this->penerbit;
    }
    public function cetak(Produk $produk){
        $str = "{$this->judul} | {$this->penulis} | {$this->penerbit} | {$this->harga}";
        return $str;
    }
}

$buku = new Buku("Judul", "Penulis", "Penerbit", 0);
echo $buku->infoProduk();