<?php
require 'header.php';
?>
    <h1><span class="bh"><?= $title ?></span></h1>
    <div class="ns"><span class="hi"><?= $privet ?>, посетитель из <span id="user-city"></span> City</span></div>
    <span><a href="<?= $l1 ?>"><?= $z1 ?></a> | <a onclick="make(event)" href="<?= $l2 ?>"><?= $z2 ?></a> | <a
                href="<?= $l3 ?>"><?= $z3 ?></a></span>
    <img src="<?= $gif ?>" alt="" class="img"> <br>
    <div class="dtext">
        <!-- <a href="russian.html"><h5>"как же можно не любить всё русское?"</h5></a> -->
        <audio controls="" autoplay="autoplay">
            <source src="<?= $song ?>" type="audio/mp3">
        </audio>
        <a href="nocopyright.php"><h5>все права бессмысленны.</h5></a>


<?php
require 'footer.php';
?>