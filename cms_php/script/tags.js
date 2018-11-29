const getTagsUrl = "services/getData.php?cmd=getTags" ;
const newTagUrl = "services/sendData.php?cmd=newTag";
const editTagUrl = "services/sendData.php?cmd=editTag";
const removeTagUrl = "services/sendData.php?cmd=removeTag";

let tags = {
    dataTag: [],
    getData: () => {
        Draws.getData(getTagsUrl, tags.drawTags, tags.dataTag);
    },
    drawTags: (data) => {
        let tr;
        $('#tags-tbody').empty();
        data.forEach(tag => {
            //console.log(tag.createDate);
            tr += '<tr>';
            tr += '<td>'+tag.name+'</td>';
            tr += '<td>'+tags.btnStatus(tag.status)+'</td>';
            tr += '<td>' + tags.daysAgo(tag.createDate)+'</td>';
            tr += '<td><button type="button" class="btn btn-xs btn-warning" onClick="tags.editTag('+tag.id+')">edytuj</button>&nbsp;';
            tr += '<button type="button" class="btn btn-xs btn-danger" onClick="tags.removeTag(' + tag.id +')">usun</button></td>';
            tr += '</tr>';
        })
        $('#tags-tbody').append(tr);
        tags.saveBtn();
    },
    btnStatus: (status) => {
        let span;
        if(status == "0"){
            span = '<span class="badge badge-secondary">nie aktywny</span>';
        }else{
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
        if(yyyy == bits[0]){
            if(mm == bits[1]){
                if(dd == bits[2]){
                    $msg = 'dzisiaj';
                }else{
                    let ddAgo = parseInt(dd-bits[2]);
                    if(ddAgo == 1){
                        $msg = 'wczoraj';
                    }else if (ddAgo>1 && ddAgo < 16){
                        $msg = ddAgo+' dni temu';
                    }else{
                        $msg = '1 miesiąc temu';
                    }
                }
            }else{
                let mmAgo = parseInt(mm - bits[1]);
                if(mmAgo > 1)
                    $msg = mmAgo+' miesiace temu';
                else
                    $msg = '1 miesiąc temu';
            }
        }else{
            let mmAgo = parseInt(mm - bits[1]);
            let yyyyAgo = parseInt(yyyy - bits[0]);
            let mmNew;
            if(yyyyAgo > 1){
                $msg = yyyyAgo+' lat temu';
            }else if(yyyyAgo == 1){
                if(mmAgo < 0){
                    mmNew = 12+mmAgo;
                    $msg = mmNew+ ' miesięcy temu';
                }else{
                    $msg = '1 rok temu';
                }
            }
        }
        return $msg;
    },
    editTag: (id) => {
        tags.clearError();
        let title = '<span class="fa fa-times" onClick="tags.clearEdit()"></span> Edytujesz tag';
        let data = tags.dataTag;
        data.forEach(tag => {
            tag.forEach(t => {
                if(t.id == id){
                    $("#tag-editor").val(t.name);
                    $('.tag-title').empty();
                    $('.tag-title').append(title);
                }
            })
        }); 
        tags.saveBtn(id);
    },
    removeTag: (id) => {
        tags.alertSweet(id);
    },
    tagSave: (id) => {
        let tag_name = $("#tag-editor").val();
        if(tag_name === ""){
            $('textarea').addClass('has-error');
            tags.alertToastr('Błąd','error');
            $(".textarea-error").show();
        }else{
            let tag_data = {name: tag_name};
            if (id != 0)
                tags.toServer(editTagUrl+"&id="+id, tag_data);
            else
                tags.toServer(newTagUrl, tag_data);
        }
    },
    clearTag: () => {
        $("#tag-editor").val("");
        tags.saveBtn();
    },
    clearError: () => {
        $('textarea').removeClass('has-error');   
        $(".textarea-error").hide();
    },
    clearEdit: () => {
        tags.clearError();
        $('.tag-title').empty();
        $('.tag-title').append('Nowy tag:');
        tags.clearTag();
    },
    saveBtn: (id) => {
        $(".tag-save").empty();
        let btn = '<button type="button" class="btn btn-large btn-block btn-adm"';
        btn += 'onClick="tags.tagSave(';
        btn += (id == null) ? 0:id;
        btn += ')"';
        btn += '>Zapisz</button>';
        $(".tag-save").append(btn);
    },
    toServer: (url,data) => {
        $.post(url, data, function (data) {
            tags.getData();
            tags.clearEdit();
            tags.alertToastr('Sukces','success');
        });
    },
    alertToastr: (msg,type) => {
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
        if(type === 'success'){
            toastr.success(msg);
        }else if(type === 'error'){
            toastr.error(msg);
        }
    },
    alertSweet: (id) => {
        swal({
            title: 'Czy napewno chcesz usunąć?',
            text: "Wybrany tag zostanie trwale usunięty!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tak, usuń!'
        }).then((result) => {
            if (result.value) {
                tags.toServer(removeTagUrl + "&id=" + id, {});
            }
        })
        $('body').removeClass('swal2-height-auto');
        
    }
}

tags.getData();

$('textarea').click(function(){
    if($('textarea').hasClass('has-error')){
        tags.clearError();
    }
});
