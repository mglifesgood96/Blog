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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="style/style.css">
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
                  <a href="services/logout.php">
                    <span class="fa fa-sign-out" aria-hidden="true"></span>
                    <span class="logout">wyloguj</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="admin-content-con">
                <header>
                  <h5>Users</h5>
                </header>     
                <div class="btns-users">
                  <button type="button" class="btn btn-large btn-block btn-adm person_btn" data-toggle="modal" data-target="#usersModal" style="font-size:14px;" onClick="users.newUser()"><i class="fa fa-plus"></i> Nowy</button>
                </div>

                <div class="users">
                <table id="usersTable" class="table table-striped table-bordered" style="width:100%"></table>
                <!--       <thead>
                            <tr>
                                <th>Id</th>
                                <th>Email</th>
                                <th>Rights</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td><button type="button" class="btn btn-xs btn-warning" onClick="">edytuj</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Accountant</td>
                                <td>Tokyo</td>
                                <td><button type="button" class="btn btn-xs btn-warning" onClick="">edytuj</button>
                                <button type="button" class="btn btn-xs btn-danger" onClick="">usun</button></td>
                                </td>
                            </tr>
                        </tbody> -->
                    
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="modal fade" id="usersModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content" id="userModalContent">
          <!--
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">Nowy uzytkownik</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="userEmail">Email</label>
              <input id="userEmail" class="form-control" type="text" aria-describedby="helpId">
              <small id="helpEmail" class="text-muted"></small>
            </div>
            <div class="form-group">
              <label for="userPass">Password</label>
              <input type="password" name="" id="userPass" class="form-control" placeholder="">
              <small id="helpPassword" class="text-muted"></small>
            </div>
            <div class="form-group">
              <label for="userRights">Uprawnienia</label>
              <select class="form-control" id="userRights">
                <option>1</option>
                <option>2</option>
              </select>
              <small id="helpRights" class="text-muted"></small>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
            <button type="button" class="btn btn-adm" id="userSave">Zapisz</button>
          </div>
        </div>
        -->
      </div>
    </div>

    <script src="plugins/jquery/jquery.js"></script>
    <script src="plugins/pace/pace.min.js"></script>
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="plugins/toastr/toastr.min.js"></script>
    <script src="script/hamburger.js"></script>
    <script src="plugins/sweetalert/sweetalert2.all.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <script src="script/script.js"></script>
    <script src="script/users.js"></script>
    <script>
      $(document).ready( function () {
        users.start();
      } );
    </script>
  </body>
</html>
