<?php
    $right = $_SESSION['right'];
    $strona = basename($_SERVER['PHP_SELF']);
?>
<li class="link <?php if($strona=="index.php") { ?> active <?php } ?>">
    <a href="index">
        <span class="fa fa-th" aria-hidden="true"></span>
        <span class="d-none d-md-inline">Start</span>
    </a>
</li>

<li class="link <?php if($strona=="article.php"||$strona=="new-article.php") { ?> active <?php } ?>">
    <a href="article">
        <span class="fa fa-list-alt" aria-hidden="true"></span>
        <span class="d-none d-md-inline">Artykuly</span>
    </a>
</li>

<li class="link <?php if($strona=="comments.php") { ?> active <?php } ?>">
    <a href="comments">
        <span class="fa fa-pencil" aria-hidden="true"></span>
        <span class="d-none d-md-inline">Komentarze</span>
    </a>
</li>
<li class="link <?php if($strona=="tags.php") { ?> active <?php } ?>">
    <a href="tags">
        <span class="fa fa-tags" aria-hidden="true"></span>
        <span class="d-none d-md-inline">Tags</span>
    </a>
</li>
<li class="link <?php if($strona=="categories.php") { ?> active <?php } ?>">
    <a href="categories">
        <span class="fa fa-tags" aria-hidden="true"></span>
        <span class="d-none d-md-inline">Kategorie</span>
    </a>
</li>
<li class="link <?php if($strona=="clients.php") { ?> active <?php } ?>">
    <a href="clients">
        <span class="fa fa-user" aria-hidden="true"></span>
        <span class="d-none d-md-inline">Klienci</span>
    </a>
</li>
<?php if($right === '4'){?>
    <li class="link <?php if($strona=="users.php") { ?> active <?php } ?>">
        <a href="users">
            <span class="fa fa-user" aria-hidden="true"></span>
            <span class="d-none d-md-inline">Uzytkownicy</span>
        </a>
    </li>
<?php } ?>
<li class="link <?php if($strona=="settings.php") { ?> active <?php } ?>">
    <a href="settings">
        <span class="fa fa-cog" aria-hidden="true"></span>
        <span class="d-none d-md-inline">Ustawienia</span>
    </a>
</li>