const getArticlesUrl = "services/getData.php?cmd=getArticles";
const getArticlesEdtiUrl = "services/getData.php?cmd=getArticlesEdit";
const getTagsUrl = "services/getData.php?cmd=getTags";
const getCategoriesUrl = "services/getData.php?cmd=getCategories";
const editArticleUrl = "services/sendData.php?cmd=editArticle";
const uploadImgArticleUrl = "services/sendData.php?cmd=uploadImgArticle";
const deleteImgArticleUrl = "services/sendData.php?cmd=deleteImgArticle";

let articles = {
    getData: ()=>{
        Draws.getData(getArticlesUrl, articles.drawArticles);
    },
    articleEdit: (id) => {
        if(id > 0){
            $.ajax({
                url: getArticlesEdtiUrl + '&id=' + id,
                dataType: "JSON",
                success: function (data) {
                    articles.loadDataToForm(data.data);
                },
                error: function (request, status, error) {
                    console.log(error);
                }
            })
        }
    },
    getTags: ()=>{
        $.ajax({
            async: false,
            url: getTagsUrl,
            dataType: "JSON",
            success: function (data) {
                articles.drawTags(data.data);
            },
            error: function (request, status, error) {
                console.log(error);
            }
        })
    },
    getCategories: () => {
        $.ajax({
            async: false,
            url: getCategoriesUrl,
            dataType: "JSON",
            success: function (data) {
                articles.drawCategories(data.data);
            },
            error: function (request, status, error) {
                console.log(error);
            }
        })
    },
    toServer: (url, data) => {
        $.post(url, data, function (data) {
            articles.alertToastr('Sukces', 'success');
        });
    },
    sendImg: (file, editor, welEditable)=>{
        console.log(file);
        data = new FormData();
        data.append("file", file);
        $.ajax({
            data: data,
            type: "POST",
            url: uploadImgArticleUrl,
            cache: false,
            contentType: false,
            processData: false,
            success: function (url) {
                var image = $('<img>').attr('src', 'http://' + url);
                $('.summernote').summernote("insertNode", image[0]);
            }
        });
    },
    deleteImg: (src)=>{
        src = src.substring(src.indexOf("/blog") + 1);
        console.log(src);
        $.ajax({
            data: { src: src },
            type: "POST",
            url: deleteImgArticleUrl,
            cache: false,
            success: function (resp) {
                console.log(resp);
            }
        });
    },
    drawTags: (data)=>{
        let opt;
        data.forEach(tag => {
            opt += '<option id="'+tag.id+'">'+tag.name+'</option>';
        });
        $("#tags").append(opt);
        $('#tags').trigger("chosen:updated");
    },
    drawCategories: (data)=>{
        let opt = '';
        data.forEach(cat => {
            opt += '<option id="' + cat.id + '">' + cat.name + '</option>';
        });
        $("#category").append(opt);
        $('#category').trigger("chosen:updated");
    },
    drawArticles: (data)=>{
        let div = '';
        data.forEach(article => {
            div += '<div class="row article-row">';
            div += articles.articlesStatus(article.public);
            div += articles.articlesContent(article.title, article.createDate);
            div += '<div class="col-2 offset-coll d-block d-sm-none"></div>';
            div += articles.articleActions(article.id);
        })
        $("#articles").append(div);
        articles.drawCardView(data);
    },
    drawCardView: (data)=>{
        let div = '';
        data.forEach(article => {
            div += '<div class="card">';
            div += '<blockquote class="blockquote mb-0 card-body">';
            div += '<p>'+article.title+'</p>'
            div += '<footer class="blockquote-footer">';
            div += '<small class="text-muted"> Stworzono ';
            div += articles.dateArticles(article.createDate);
            div += '</small></footer>';
            div += '</blockquote>';
            div += '</div>';
        })
       // $(".card-columns").append(div);
    },
    articlesStatus: (status)=>{
        let div =  '';
            div += '<div class="col-md-1 com-sm-2 col-2 status-padding">';
            div += '<span class="badge badge-success">';
            div += (status==='0')?'Projekt':'Aktywny';
            div += '</span></div>';
        return div;
    },
    articlesContent: (title,date)=>{
        console.log(title,date);
        let div = '<div class="col-md-7 col-sm-5 col-9 article-title">';
            div += '<p class="article-t">';
            div += title;
            div += '</p><small>Stworzono ';
            div += articles.dateArticles(date);
            div += '</small></div>';
        return div;
    },
    dateArticles: (date)=>{
        const monthNamesPL = {
            "01":"Styczeń", 
            "02":"Luty",
            "03":"Marzec", 
            "04":"Kwiecień",
            "05":"Maj", 
            "06":"Czerwiec",
            "07":"Lipiec", 
            "08":"Sierpień", 
            "09":"Wrzesień", 
            "10":"Październik", 
            "11":"Listopad", 
            "12": "Grudzień"
        };
        let splitDate = date.split(" ")[0];
        let year = splitDate.split('-')[0];
        let month = splitDate.split('-')[1];
        let day = splitDate.split('-')[2];
        let month1 = monthNamesPL[month];
        let finaly = day+' '+month1+','+year;
        return finaly;
    },
    articleActions: (id)=>{
        let div = '<div class="col-md-4 col-sm-5 col-9">';
            div += '<div class="article-actions">';
            div += '<a onClick="articles.articleView('+id+')" class="btn btn-xs" role="button">';
            div += '<span class="fa fa-eye" aria-hidden="true">&nbsp;Podgląd</span></a>';
            div += '<a href="new-article?id='+id+'" class="btn btn-xs" role="button">';
            div += '<i class="fa fa-pencil" aria-hidden="true">&nbsp;Edytuj</i></a>';
            div += '<a onClick="articles.articleRemove(' + id +')" class="btn btn-xs" role="button">';
            div += '<i class="fa fa-remove" aria-hidden="true">&nbsp;Usun</i></a>';
            div += '</div></div></div>';
        return div;
    },
    articleView: (id)=>{
        console.log("view:"+id);
    },
    loadDataToForm: (data)=>{
        articles.getTags();
        articles.getCategories();
        let tags = data[0].id_tags.split(",");
        $.each(tags, function (i) {
            let actTag;
            $("#tags > option").each(function () {
                if(this.id === tags[i]){
                    actTag = $(this);
                }
            })
            $(actTag).attr('selected', 'selected');
        });
        $('#tags').trigger("chosen:updated");
        let title = data[0].title;
        let content = data[0].content;
        let category = (parseInt(data[0].id_category)) - 1;
        let actCat = $("#category option")[category];
        $(actCat).attr('selected', 'selected');
        $('#category').trigger("chosen:updated");  
        $("#title").val(title);
        $(".summernote").summernote("code", content);
    },
    articleSave: (id)=>{
        let data = articles.articleDataForm();
        articles.toServer(editArticleUrl+"&id="+id,data);
    },
    articleDataForm: ()=>{
        let title = $('#title').val();
        let selectedValues = [];
        let category = $('#category :selected').attr('id');
        $("#tags :selected").each(function () {
            selectedValues.push($(this).attr('id'));
        });
        let content = $('.summernote').summernote('code');
        let isPublic = 0;
        if ($('input#public').is(':checked')){
            isPublic = 1;
        }
        let data = {
            'title':title,
            'category':category,
            'tags':selectedValues.toString(),
            'content':content,
            'public':isPublic
        }
        console.log(data);
        return data;
    },
    articleRemove: (id)=>{
        console.log("remove:" + id);
    },
    search: ()=>{
        let input = document.getElementById("exampleInputAmount");
        let filter = input.value.toLowerCase();
        let nodes = document.getElementsByClassName('article-title');
        for (i = 0; i < nodes.length; i++) {
            if (nodes[i].innerText.toLowerCase().includes(filter)) {
                $(nodes[i]).parent().show();
            } else {
                $(nodes[i]).parent().hide();
            }
        }
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