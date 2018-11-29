const getCategoriesUrl = "services/getData.php?cmd=getCategories";
const newCategoryUrl = "services/sendData.php?cmd=newCategory";
const editCategoryUrl = "services/sendData.php?cmd=editCategory";
const removeCategoryUrl = "services/sendData.php?cmd=removeCategory";

let categories = {
    dataCat: [],
    getData: () => {
        Draws.getData(getCategoriesUrl, categories.drawCat, categories.dataCat);
    },
    drawCat: (data) => {
        let tr;
        $('#tags-tbody').empty();
        data.forEach(cat => {
            tr += '<tr>';
            tr += '<td>' + cat.name + '</td>';
            tr += '<td>' + categories.btnStatus(cat.status) + '</td>';
            tr += '<td>' + categories.daysAgo(cat.createDate) + '</td>';
            tr += '<td><button type="button" class="btn btn-xs btn-warning" onClick="categories.editCategory(' + cat.id + ')">edytuj</button>&nbsp;';
            tr += '<button type="button" class="btn btn-xs btn-danger" onClick="categories.removeCategory(' + cat.id + ')">usun</button></td>';
            tr += '</tr>';
        })
        $('#tags-tbody').append(tr);
        categories.saveBtn();
    },
    btnStatus: (status) => {
        let span;
        if (status == "0") {
            span = '<span class="badge badge-secondary">nie aktywny</span>';
        } else {
            span = '<span class="badge badge-success">aktywny</span>';
        }
        return span;
    },
    daysAgo: (day) => {
        let bits = day.split(/\D/);
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let msg;
        if (yyyy == bits[0]) {
            if (mm == bits[1]) {
                if (dd == bits[2]) {
                    $msg = 'dzisiaj';
                } else {
                    let ddAgo = parseInt(dd - bits[2]);
                    if (ddAgo == 1) {
                        $msg = 'wczoraj';
                    } else if (ddAgo > 1 && ddAgo < 16) {
                        $msg = ddAgo + ' dni temu';
                    } else {
                        $msg = '1 miesiąc temu';
                    }
                }
            } else {
                let mmAgo = parseInt(mm - bits[1]);
                if (mmAgo > 1)
                    $msg = mmAgo + ' miesiace temu';
                else
                    $msg = '1 miesiąc temu';
            }
        } else {
            let mmAgo = parseInt(mm - bits[1]);
            let yyyyAgo = parseInt(yyyy - bits[0]);
            let mmNew;
            if (yyyyAgo > 1) {
                $msg = yyyyAgo + ' lat temu';
            } else if (yyyyAgo == 1) {
                if (mmAgo < 0) {
                    mmNew = 12 + mmAgo;
                    $msg = mmNew + ' miesięcy temu';
                } else {
                    $msg = '1 rok temu';
                }
            }
        }
        return $msg;
    },
    editCategory: (id) => {
        categories.clearError();
        let title = '<span class="fa fa-times" onClick="categories.clearEdit()"></span> Edytujesz kategorie';
        let data = categories.dataCat;
        data.forEach(tag => {
            tag.forEach(t => {
                if (t.id == id) {
                    $("#tag-editor").val(t.name);
                    $('.tag-title').empty();
                    $('.tag-title').append(title);
                }
            })
        });
        categories.saveBtn(id);
    },
    removeCategory: (id) => {
        categories.alertSweet(id);
    },
    categorySave: (id) => {
        let tag_name = $("#tag-editor").val();
        if (tag_name === "") {
            $('textarea').addClass('has-error');
            categories.alertToastr('Błąd', 'error');
            $(".textarea-error").show();
        } else {
            let cat_data = { name: tag_name };
            if (id != 0)
                categories.toServer(editCategoryUrl + "&id=" + id, cat_data);
            else
                categories.toServer(newCategoryUrl, cat_data);
        }
    },
    clearTag: () => {
        $("#tag-editor").val("");
        categories.saveBtn();
    },
    clearError: () => {
        $('textarea').removeClass('has-error');
        $(".textarea-error").hide();
    },
    clearEdit: () => {
        categories.clearError();
        $('.tag-title').empty();
        $('.tag-title').append('Nowy tag:');
        categories.clearCategory();
    },
    categorySave: (id) => {
        let tag_name = $("#tag-editor").val();
        if (tag_name === "") {
            $('textarea').addClass('has-error');
            categories.alertToastr('Błąd', 'error');
            $(".textarea-error").show();
        } else {
            let tag_data = { name: tag_name };
            if (id != 0)
                categories.toServer(editCategoryUrl + "&id=" + id, tag_data);
            else
                categories.toServer(newCategoryUrl, tag_data);
        }
    },
    clearCategory: () => {
        $("#tag-editor").val("");
        categories.saveBtn();
    },
    clearError: () => {
        $('textarea').removeClass('has-error');
        $(".textarea-error").hide();
    },
    clearEdit: () => {
        categories.clearError();
        $('.tag-title').empty();
        $('.tag-title').append('Nowy tag:');
        categories.clearTag();
    },
    saveBtn: (id) => {
        $(".tag-save").empty();
        let btn = '<button type="button" class="btn btn-large btn-block btn-adm"';
        btn += 'onClick="categories.categorySave(';
        btn += (id == null) ? 0 : id;
        btn += ')"';
        btn += '>Zapisz</button>';
        $(".tag-save").append(btn);
    },
    toServer: (url, data) => {
        $.post(url, data, function (data) {
            categories.getData();
            categories.clearEdit();
            categories.alertToastr('Sukces', 'success');
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
    alertSweet: (id) => {
        swal({
            title: 'Czy napewno chcesz usunąć?',
            text: "Wybrana kategoria zostanie trwale usunięty!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tak, usuń!'
        }).then((result) => {
            if (result.value) {
                categories.toServer(removeCategoryUrl + "&id=" + id, {});
            }
        })
        $('body').removeClass('swal2-height-auto');
    }
}

categories.getData();

$('textarea').click(function () {
    if ($('textarea').hasClass('has-error')) {
        categories.clearError();
    }
});