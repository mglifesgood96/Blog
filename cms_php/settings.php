<?php
  include('services/config.php');
?>
<!doctype html>
<html>
  <head>
    <title></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="plugins/pace/pace.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="plugins/toastr/toastr.min.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/settings.css">
  </head>
  <body>

    <div class="container-fluid display-table">
      <div class="row display-table-row" style="margin-left: 0px;margin-right: 0px;">
        <div id="side-menu" class="col-md-2 col-sm-1 col-2 d-none d-sm-block display-table-cell valing-top">
          <h1>Navi</h1>
          <ul>
            <?php include_once 'services/menu.php'; ?>
          </ul>
        </div>
        <div class="col-md-10 col-sm-11 col-12 display-table-cell valing-top" id="content-full">
          <div class="row" id="nav-header">
            <div class="col-md-4 col-sm-4 col-5">
              <nav class="navbar navbar-custom float-left d-block d-sm-none">
                <button class="navbar-toggler custom-toggler collapsed" type="button" data-toggle="offcanvas" data-target="#side-menu" >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>
              <input class="d-none d-md-block" type="text" placeholder="Szukaj..." id="header-search"/>
            </div>
            <div class="col-md-8 col-sm-8 col-7">
              <ul class="float-right">
                <li id="welcome" class="d-none d-md-block">Witaj w panelu admina</li>
                <li class="fixed-width">
                  <a href="#">
                    <span class="fa fa-bell" aria-hidden="true"></span>
                    <span class="badge badge-warning">3</span>
                  </a>
                </li>
                <li class="fixed-width">
                  <a href="#">
                    <span class="fa fa-envelope" aria-hidden="true"></span>
                    <span class="badge badge-message">3</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-sign-out" aria-hidden="true"></span>
                    <span class="logout">wyloguj</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="content">
            <header>
              <h2 class="page-title">Ustawienia</h2>
            </header>
            <div class="content-inner c1">
              <div class="row">
                <div class="col-md-12">
                  <form method="POST">
                    <!--
                    <div class="settings-row">
                      <h3>Nazwa strony głównej</h3>
                      <p>Nazwa wyświetlana w lewym gornym rogu</p>
                      <div class="form-group">
                        <input type="text" class="form-control medium-input" id="input" required="required">
                      </div>
                    </div>
                    -->
                    <div class="settings-row">
                      <h3>Posty na strone</h3>
                      <p>Kontroluj liczbę wyświetlanych artykułów na stronie głównej
                         <br />*podstawowa wartość 3
                      </p>
                      <div class="form-group">
                        <input type="number" class="form-control small-input postOnWeb" id="input" required="required">
                      </div>
                    </div>
                    <!--
                    <div class="settings-row">
                      <h3>Prace konserwacyjne</h3>
                      <p>Trawją prace konserwacyjne</p>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" name="" id="">
                          Trwają prace konserwacyjne
                        </label>
                      </div>
                    </div>
                    -->
                    <div class="settings-row">
                      <h3>Komentarze</h3>
                      <p>Włącz lub wyłącz komentarze na blogu</p>
                      <select id="input" class="form-control small-select comments">
                        <option value="">włączone</option>
                        <option value="">wyłączone</option>
                      </select>
                    </div>
                    <div class="settings-row">
                      <h3>Tagi</h3>
                      <p>Włącz lub wyłącz widoczność tagów na blogu</p>
                      <select id="input" class="form-control small-select tags">
                        <option value="">włączone</option>
                        <option value="">wyłączone</option>
                      </select>
                    </div>
                    <p class="btn btn-adm" id="saveSettings" onClick="settings.dataForm();">Zapisz</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- jQuery -->
    <script src="plugins/jquery/jquery.js"></script>
    <script src="plugins/pace/pace.min.js"></script>
    <!-- Bootstrap -->
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <!-- Custom -->
    <script src="plugins/toastr/toastr.min.js"></script>
    <script src="script/hamburger.js"></script>
    <script src="script/settings.js"></script>
  </body>
</html>
