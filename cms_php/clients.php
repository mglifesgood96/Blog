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
    <link rel="stylesheet" href="style/clients.css">
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
            <div class="col-md-9">
              <div class="admin-content-con">
                <header>
                  <h5>Klienci</h5>
                </header>
                <div class="active-view" id="view-main">
                    <div class="row search-row">
                        <div class="col-md-12">
                            <div class="input-group">
                                <input type="text" id="exampleInputAmount" onkeyup="articles.search();" class="form-control search-field" placeholder="Szukaj">
                                <span class="input-group-append">
                                <button type="button" class="btn btn-outline-secondary search-btn">Go!</button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <table class="table table-striped table-hover">
                        <tbody id="tags-tbody">
                            <tr>
                                <td>Imie Nazwisko</td>
                                <td><i class="fa fa-envelope"></i> email</td>
                                <td><i class="fa fa-phone"></i> 11111111</td>
                            </tr>
                            <tr>
                                <td>Imie Nazwisko</td>
                                <td><i class="fa fa-envelope"></i> email</td>
                                <td><i class="fa fa-phone"></i> 11111111</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="admin-content-con">
                <div class="row justify-content-center align-items-center person_detal_top">
                    <div class="col-2"></div>
                    <div class="col-8 text-center">
                        <span id="person_name">Jan Kowalski</span>
                        <button type="button" class="btn btn-large btn-block btn-adm person_btn" style="font-size:14px;"><i class="fa fa-comments"></i> Chat</button>
                        <button type="button" class="btn btn-large btn-block btn-adm person_btn" style="font-size:14px;"><i class="fa fa-envelope"></i> Napisz</button>
                    </div>
                    <div class="col-2"></div>
                </div>
                <div class="row person_detal_bot">
                    <div class="col-12">
                        <span class="person_activity_header">Aktywność:</span>
                        <div class="activity">
                            <ul class="activity_list">
                                <li class="">
                                    spotkanie 
                                    <span class="float-right">dziś, 10:30</span>
                                </li>
                                <li class="">
                                    zadzwoń 
                                    <span class="float-right">jutro, 11:00</span>
                                </li>
                                <li class="">
                                    spotkanie 
                                    <span class="float-right">11.09, 12:30</span>
                                </li>
                            </ul>
                        </div>
                        <div class="activity-null">Brak aktywności</div>
                    </div>
                </div>
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
  </body>
</html>
