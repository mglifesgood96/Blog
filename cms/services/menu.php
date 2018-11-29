<?php
    $strona = basename($_SERVER['PHP_SELF']);
?>

<ul class="sidebar navbar-nav">
    <li class="nav-item <?php if ($strona == "index.php") { ?> active <?php } ?>">
        <a class="nav-link" href="index">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Start</span>
        </a>
    </li>
    <li class="nav-item <?php if ($strona == "article.php") { ?> active <?php } ?>">
        <a class="nav-link" href="article">
        <i class="fas fa-list-alt"></i>
        <span>Posty</span>
        </a>
    </li>
    <li class="nav-item <?php if ($strona == "comments.php") { ?> active <?php } ?>">
        <a class="nav-link" href="comments">
        <i class="fas fa-comments"></i>
        <span>Komentarze</span>
        </a>
    </li>
    <li class="nav-item <?php if ($strona == "categories.php") { ?> active <?php } ?>">
        <a class="nav-link" href="categories">
        <i class="fas fa-tags"></i>
        <span>Kategorie</span>
        </a>
    </li>
    <li class="nav-item <?php if ($strona == "tags.php") { ?> active <?php } ?>">
        <a class="nav-link" href="tags">
        <i class="fas fa-hashtag"></i>
        <span>Tagi</span>
        </a>
    </li>
</ul>