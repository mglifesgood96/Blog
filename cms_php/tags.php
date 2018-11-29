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
    <link rel="stylesheet" href="plugins/toastr/toastr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/tags.css">
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
          <div class="row">
            <div class="col-md-4 dashboard-left-cell">
              <div class="admin-content-con">
                <header>
                  <h5>Stworz tagi</h5>
                </header>
                <form>
                  <div class="form-group">
                    <label class="tag-title">Nowy tag:</label>
                    <p>
                      <span class="textarea-error">Pole nie moze być puste!</span>
                      <textarea class="form-control" rows="3" placeholder="Wpisz nowy tag" id="tag-editor"></textarea>
                    </p>
                    <p class="tag-save"></p>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-8 dashboard-right-cell">
              <div class="admin-content-con">
                <header>
                  <h5>Tagi</h5>
                </header>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Nazwa</th>
                      <th>Status</th>
                      <th>Stworzony</th>
                      <th>Akcje</th>
                    </tr>
                  </thead>
                  <tbody id="tags-tbody"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="plugins/jquery/jquery.js"></script>
    <script src="plugins/pace/pace.min.js"></script>
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="plugins/toastr/toastr.min.js"></script>
    <script src="script/hamburger.js"></script>
    <script src="plugins/sweetalert/sweetalert2.all.min.js"></script>
    <script src="script/script.js"></script>
    <script src="script/tags.js"></script>
  </body>
</html>
