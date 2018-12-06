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
  <script src="vendor/toastr/toastr.min.js"></script>
  <script src="vendor/sweetalert/sweetalert2.all.min.js"></script>
  <script src="vendor/choosen/chosen.jquery.min.js"></script>
  <script src="vendor/popper/popper.min.js"></script>

  <script src="js/sb-admin.min.js"></script>
  <script src="js/script.js"></script>

  <script src="js/components/header.js"></script>
  <script src="js/components/editor.js"></script>
  <script src="js/components/table.js"></script>

  <?php if ($strona === "tags.php") { ?> 
    <script src="js/tags.js"></script>
  <?php } ?>
  <?php if ($strona === "categories.php") { ?> 
    <script src="js/categories.js"></script>
  <?php } ?>
  <?php if ($strona === "articles.php") { ?> 
    <script src="vendor/dropzone/dropzone.js"></script>
    <script src="vendor/summernote/summernote-bs4.js"></script>
    <script src="js/components/articleForm.js"></script>
    <script src="js/articles.js"></script>
  <?php } ?>

</body>

</html>