<?php
  include 'services/login.php';
?>

<!doctype html>
<html>
<head>
  <meta charset=utf-8>
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="style/style.css">
  <link rel="stylesheet" href="style/login.css">
</head>
<body>

  <div class="modal-dialog text-center">
    <div class="col-sm-9 main-section">
      <div class="modal-content">
        <div class="col-12 form-input">
          <form method="post">
            <div class="form-group">
              <input type="email"  name="email" class="form-control" id="" placeholder="Wprowadź email">
            </div>
            <div class="form-group">
              <input type="password" name="password" class="form-control" id="" placeholder="Wprowadź hasło">
            </div>
            <button type="submit" name="login" class="btn login-btn" id="">LOGIN</button>
          </form>
        </div>
        <div class="col-12 forgot">
          Przypomnij haslo
        </div>
      </div>
    </div>
  </div>

  <script src="plugins/jquery/jquery.js"></script>
  <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>
