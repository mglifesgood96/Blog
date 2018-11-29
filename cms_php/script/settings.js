const getSettingsUrl = 'services/getData.php?cmd=getSettings';
const editSettingsUrl = 'services/sendData.php?cmd=editSetting';

let settings = {
    getData: () => {
        $.ajax({
            url: getSettingsUrl,
            dataType: "JSON",
            success: function (data) {
                settings.drawSettings(data.data);
            },
            error: function (request, status, error) {
                console.log(error);
            }
        })
    },
    drawSettings: (data) => {
        data.forEach(set => {
            let com = (set.comments == 1)? 0:1;
            let tags = (set.tags == 1) ? 0:1;
            let num = set.postPerPge;
            $('.postOnWeb').val(num);
            $('.comments option')[com].selected = 'selected';
            $('.tags option')[tags].selected = 'selected';
        })
    },
    dataForm: () => {
        let num = $('.postOnWeb').val();
        let com = $('.comments').find(":selected").index();
        let tags = $('.tags').find(":selected").index();
        (com == 1)?com='0':com='1';
        (tags == 1)?tags='0':tags='1';
        data = {
            num:num,
            com:com,
            tags:tags
        };
        settings.toServer(editSettingsUrl,data)
    },
    toServer: (url,data) => {
        $.post(url, data, function (data) {
            settings.alertToastr('Sukces', 'success');
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
    }
}

settings.getData();