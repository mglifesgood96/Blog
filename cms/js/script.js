const toastrAlertFlota = (msg, type) => {
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

const confirmRemove = (callback, param) => {
    swal({
        title: 'Czy napewno chcesz usunąć?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'Tak, usuń!'
    }).then((result) => {
        if (result.value) {
            callback(param)
        }
    })
}

const cleanEditor = (editorID) => {
    document.querySelector('#' + editorID).value = '';
}