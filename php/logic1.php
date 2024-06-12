<?php

$p = "*";
for($y = 1; $y <= 9; $y++){
    for($x = 1; $x <= 9; $x++){
        if ($x <= $y) {
            echo $p;
        }else {
            echo '~ ';
        }
    }
    echo "\n";
}

?>