let toastrAlertFlota = (msg, type) => {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "2000",
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
    } else if (type === 'warning') {
        toastr.warning(msg);
    }
}