<?php
  include('services/config.php');
  $id = 0;
  if(isset($_GET['id'])){
    $id = $_GET['id'];
  }
?>
<!doctype html>
<html>
  <head>
    <title></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="plugins/chosen/chosen.min.css">
    <link rel="stylesheet" href="plugins/sumernote/summernote-bs4.css">
    <link rel="stylesheet" href="plugins/tempusdominus-bootstrap/tempusdominus-bootstrap.min.css" />
    <link rel="stylesheet" href="plugins/pace/pace.css">
    <link rel="stylesheet" href="plugins/toastr/toastr.min.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/new-article.css">
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
              <h2 class="page-title">Nowy artykuly<span class="fa fa-chevron-up float-right btn-toggle-content" id="c1"></span></h2>
            </header>
            <div class="content-inner c1">
              <div class="form-wrapper">
                <form>
                  <div class="form-group">
                    <label class="sr-only">Tytul</label>
                    <input type="text" class="form-control" id="title" placeholder="Tytul">
                  </div>
                  <div class="form-group tochosen">
                    <label class="sr-only">Kategoria</label>
                    <select data-placeholder="Wybierz Kategorie" id="category" name="category" class="form-control chosen-select"></select>
                  </div>
                  <div class="form-group tochosen" id="">
                    <label class="sr-only">Tags</label>
                    <select data-placeholder="Wybierz Tagi" id="tags" class="form-control chosen-select" multiple name="tags"></select>
                  </div>
                  <div class="form-group">
                    <label class="sr-only">Tresc</label>
                    <textarea id="tresc" name="article" class="form-control summernote" placeholder="Tresc"></textarea>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" class="public-status" id="projekt" checked> Projekt
                    </label>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" class="public-status" id="public"> Publikuj
                    </label>
                  </div>
                  <div class="clearfix">
                    <button type="button"class="btn btn-adm float-right" onClick="articles.articleSave(1)">Zapisz</button>
                  </div>
                </form>
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
    <script src="plugins/popper/popper.min.js"></script>
    <script src="plugins/tooltip/tooltip.min.js"></script>
    <script src="plugins/toastr/toastr.min.js"></script>
    <!-- Bootstrap -->
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
    <!-- Chosen -->
    <script src="plugins/chosen/chosen.jquery.min.js"></script>
    <!-- Summernote -->
    <script src="plugins/sumernote/summernote-bs4.js"></script>
    <script type="text/javascript" src="plugins/moment/moment.min.js"></script>
    <script type="text/javascript" src="plugins/tempusdominus-bootstrap/tempusdominus-bootstrap.min.js"></script>
    <!-- Custom -->
    <script src="script/hamburger.js"></script>
    <script src="script/chosen.js"></script>
    <script src="script/script.js"></script>
    <script src="script/article.js"></script>
    <script>
      let id = <?php Print($id); ?>;
      articles.articleEdit(id);
    </script>
    <script>
      $('input.public-status').on('change', function() {
        $('input.public-status').not(this).prop('checked', false);
        $('input.public-status').not(this).prop('disabled',false);
        $(this).prop('disabled',true);
      });
    </script>
    <script>
      $(window).resize(function () {
        let div = $(".tochosen")[0];
        let width = div.offsetWidth+"px";
        $(".tochosen .chosen-select").css("width", width);
        $(".tochosen .chosen-container").css("width", width);
      });
    </script>
    <script>
      $('.summernote').summernote({
        height:300,
        fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36', '48' , '64', '82', '150'],
        toolbar: [
          ['style', ['style']],
          ['fontsize', ['fontsize']],
          ['font', ['bold', 'italic', 'underline', 'clear']],
          ['fontname', ['fontname']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']],
          ['insert', ['link','picture', 'video', 'hr']],
          ['table', ['table']],
          ['view', ['fullscreen', 'codeview']],
          ['help', ['help']],
        ],
        callbacks : {
          onImageUpload: function(files, editor, $editable) {
            articles.sendImg(files[0], editor, $editable);
          },
          onMediaDelete : function(target) {
            articles.deleteImg(target[0].src);
          }
        }
      });
    </script>
  </body>
</html>
