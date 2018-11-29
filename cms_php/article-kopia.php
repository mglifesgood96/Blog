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
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/article.css">
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
              <h2 class="page-title">Artykuly <span class="float-right fa fa-bars" id="card-change"></span><button type="button" class="btn btn-xs btn-small float-right">Nowy artykul</button></h2>
            </header>
            <div class="content-inner active-view" id="view-main">
              <div class="row search-row">
                <div class="col-md-12">
                  <div class="input-group">
                    <input type="text" id="exampleInputAmount" class="form-control search-field" placeholder="Szukaj">
                    <span class="input-group-append">
                      <button type="button" class="btn btn-outline-secondary search-btn">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row article-row">
                <div class="col-md-1 com-sm-2 col-2 status-padding">
                  <span class="badge badge-success">Aktywny</span>
                </div>
                <div class="col-md-7 col-sm-5 col-9 article-title">
                  <p>Jakis tytul artykulu 1</p>
                  <small>Stworzono 2 Sierpnia, 2018</small>
                </div>
                <div class="col-2 offset-coll d-block d-sm-none"></div>
                <div class="col-md-4 col-sm-5 col-10">
                  <div class="article-actions">
                    <a href="#" class="btn btn-xs" role="button">
                      <span class="fa fa-eye" aria-hidden="true">&nbsp;Podgląd</span>
                    </a>
                    <a href="#" class="btn btn-xs" role="button">
                      <i class="fa fa-pencil" aria-hidden="true">&nbsp;Edytuj</i>
                    </a>
                    <a href="#" class="btn btn-xs" role="button">
                      <i class="fa fa-remove" aria-hidden="true">&nbsp;Usun</i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="row article-row">
                <div class="col-md-1 com-sm-2 col-2 status-padding">
                  <span class="badge badge-success">Aktywny</span>
                </div>
                <div class="col-md-7 col-sm-5 col-9 article-title">
                  <p>Jakis tytul artykulu 2</p>
                  <small>Stworzono 2 Sierpnia, 2018</small>
                </div>
                <div class="col-2 offset-coll d-block d-sm-none"></div>
                <div class="col-md-4 col-sm-5 col-9">
                  <div class="article-actions">
                    <a href="#" class="btn btn-xs" role="button">
                      <span class="fa fa-eye" aria-hidden="true">&nbsp;Podgląd</span>
                    </a>
                    <a href="#" class="btn btn-xs" role="button">
                      <i class="fa fa-pencil" aria-hidden="true">&nbsp;Edytuj</i>
                    </a>
                    <a href="#" class="btn btn-xs" role="button">
                      <i class="fa fa-remove" aria-hidden="true">&nbsp;Usun</i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="row navi">
                <div class="col-md-12">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div class="content-inner" id="view-card">
              <div class="row">
                <div class="card-columns">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Card title that wraps to a new line</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.</p>
                    </div>
                  </div>
                  <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer class="blockquote-footer">
                        <small class="text-muted">
                          Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card p-3">
                    <blockquote class="blockquote mb-0">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                      <footer class="blockquote-footer">
                        <small>
                          Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card p-3">
                    <blockquote class="blockquote mb-0">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer class="blockquote-footer">
                        <small class="text-muted">
                          Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                        This card has even longer content than the first to show that equal height action.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
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
    <script src="script/hamburger.js"></script>
    <script src="script/script.js"></script>

  </body>
</html>
