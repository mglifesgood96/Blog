<?php
  $strona = basename($_SERVER['PHP_SELF']);
?>
    
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
  
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="vendor/chart.js/Chart.min.js"></script>
  <script src="vendor/datatables/jquery.dataTables.js"></script>
  <script src="vendor/datatables/dataTables.bootstrap4.js"></script>

  <script src="js/sb-admin.min.js"></script>

  <?php if ($strona == "tags.php") { ?> 
    <script src="js/tags.js"></script>
  <?php } ?>
  <?php if ($strona == "categories.php") { ?> 
    <script src="js/categories.js"></script>
  <?php } ?>

</body>

</html>