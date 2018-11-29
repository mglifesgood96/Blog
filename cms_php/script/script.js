$(".btn-toggle-content").click(function(event) {
  let tId = $(this).attr('id');
  if($(this).hasClass('fa-chevron-up')){
    if($(".content-inner").hasClass(tId)){
      $(".content-inner."+tId).hide();
      $(this).removeClass('fa-chevron-up');
      $(this).addClass('fa-chevron-down');
    }
  }else {
    if($(".content-inner").hasClass(tId)){
      $(".content-inner."+tId).show();
      $(this).removeClass('fa-chevron-down');
      $(this).addClass('fa-chevron-up');
    }
  }
});


$("#card-change").click(function(){
  if($("#articles").hasClass("active-view")){
    $("#articles").hide();
    $("#articles").removeClass("active-view");
    $("#view-card").show();
    $("#view-card").addClass("active-view");
  }else{
    $("#view-card").hide();
    $("#view-card").removeClass("active-view");
    $("#articles").show();
    $("#articles").addClass("active-view");
  }
})


let Draws = {
  dataTable: (id, fields,data,colDefs={})=>{
    $(id).DataTable({
      data: data,
      columns: fields,
      columnDefs: colDefs
    });
  },
  getData: (url,func,arr=[])=>{
    $.ajax({
      url: url,
      dataType: "JSON",
      success: function (data) {
        func(data.data);
        arr.push(data.data);
      },
      error: function (request, status, error) {
        console.log(error);
      }
    })
  },
  toServer: (url,data,func)=>{
    $.post(url, data, function (data) {
      func()
    });
  },
  alertToastr: (msg, type) => {
    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "500",
      "hideDuration": "500",
      "timeOut": "1000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    if (type === 'success') {
      toastr.success(msg);
    } else if (type === 'error') {
      toastr.error(msg);
    }
  },
  alertSweet: (title,text,type,confirmBtn,func,param) => {
    swal({
      title: title,
      text: text,
      type: type,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmBtn
    }).then((result) => {
      if (result.value) {
        func(param)
      }
    })
    $('body').removeClass('swal2-height-auto');
  }
}