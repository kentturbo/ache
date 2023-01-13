<?php
include 'header.php';
?>
<h1><span class="bh"></span></h1>
<div class="ns">
    <span class="hi"> <span id="greeting"></span>, посетитель из <span id="user-city"></span> City</span><br>
    <span class="link">
        <a id="z1" href=""></a> |
        <a id="z2" href=""></a> |
        <a id="z3" href=""></a>
    </span></div>


<img src="" alt="" class="img"> <br>
<style>
    .show {
        display: block !important;
    }

    .rotated {
        transform: rotate(180deg);
    }
</style>

<i id="dropbtn" class="dropbtn fa-solid fa-angle-down" style="padding:1.5rem;  transition: transform 0.5s ease"></i>
<div style="display:none;" class="dbc" id="dba">
    <div class="dtext">
        <!-- <a href="russian.html"><h5>"как же можно не любить всё русское?"</h5></a> -->
        <style>
        </style>
        <audio src="" controls="" autoplay="autoplay" id="player" loop type="audio/mp3" style="display:none!important;">
        </audio>
        <!-- Иконка воспроизведения -->
        <span class="pisa">
            <a><img src="https://flagicons.lipis.dev/flags/4x3/ru.svg" style="width: var(--icon_size);border-radius: 2px;"></a> |
            <a><i id="playpausebtn" class="fa-solid fa-circle-play"></i></a> |
            <a><img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" style="width: var(--icon_size);border-radius: 2px;"></a>
        </span>

        <a href="nocopyright.php">
            <h5>все права бессмысленны.</h5>
        </a>
    </div>
    <?php
    include 'footer.php';
    ?>