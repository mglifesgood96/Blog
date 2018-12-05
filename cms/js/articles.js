const getPostsUrl = 'http://localhost/Blog/api/controlers/posts/read_adm.php';
const getOnePostUrl = 'http://localhost/Blog/api/controlers/posts/read_one_adm.php'; 
const getCategoriesUrl = 'http://localhost/Blog/api/controlers/categories/read.php';
const getTagsUrl = 'http://localhost/Blog/api/controlers/tags/read.php';
const getStatusesUrl = 'http://localhost/Blog/api/controlers/posts_status/read.php';
const deletePostUrl = 'http://localhost/Blog/api/controlers/posts/delete.php';
const updatePostUrl = 'http://localhost/Blog/api/controlers/posts/update.php';
const createPostUrl = 'http://localhost/Blog/api/controlers/posts/create.php';
const tabID = 'articlesTab';

let getPosts = (refresh = false) => {
    $.ajax({
        url: getPostsUrl,
        dataType: "JSON",
        success: function (data) {
            let posts = data.data;
            postsTable(posts, refresh);
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let getOnePost = (id) => {
    $.ajax({
        type: "POST",
        url: getOnePostUrl,
        dataType: "JSON",
        data: {id:id},
        success: function (data) {
            document.getElementById('articleForm').innerHTML = articleForm(data.data[0]);
            $('.form-control-chosen').chosen()
            $('.form-control-chosen-ds').chosen({ "disable_search": true })   
            $('#summernote').summernote({
                height: ($(window).height() - 300)
            });
            // callbacks: {
            //     onImageUpload: function (image) {
            //         uploadImage(image[0]);
            //     }
            // }
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let getCategories = () => {
    $.ajax({
        url: getCategoriesUrl,
        dataType: "JSON",
        success: function (data) {
            categories = data.data;
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let createPost = (data) => {
    $.ajax({
        type: "POST",
        url: createPostUrl,
        dataType: "json",
        data: data,
        success: function (data) {
            if (data.status == '200') {
                openArticleForm(false, data.insertId)
                toastrAlertFlota(data.message, "success");
            } else {
                openArticleForm(false, data.insertId)
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}

let sendUpdatePost = (data) => {
    $.ajax({
        type: "POST",
        url: updatePostUrl,
        dataType: "json",
        data: data,
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
            } else {
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}

let deleteTag = (id) => {
    $.ajax({
        type: "POST",
        url: deletePostUrl,
        dataType: "json",
        data: { id: id },
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
                getPosts(true);
            } else {
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}

let getTags = () => {
    $.ajax({
        url: getTagsUrl,
        dataType: "JSON",
        success: function (data) {
            tags = data.data;
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let getArticleFromData = () => {
    let result = {};
    let tags = $('#fieldTags').val();
    $.each($('form').serializeArray(), function () {
        result[this.name] = this.value;
    });
    result.id_tag = tags.toString();
    return result;
}

let postsTable = (data, refresh=false) => {
    let fTab = $("#" + tabID);
    let db;
    if(!refresh) {
        db = fTab.DataTable({
            "responsive": true,
            "data": data,
            "createdRow": function (row, data, dataIndex) {
                $(row).attr('data-index', data.id);
            },
            "columns": [
                { "data": "id", responsivePriority: 1, },
                { "data": "title", responsivePriority: 1, },
                { "data": "category", responsivePriority: 1, },
                { "data": "status", responsivePriority: 1, },
                { "data": "creation_date", responsivePriority: 1, },
                { "name": "actions" },
            ],
            "columnDefs": [{
                targets: [5],
                className: "text-center",
                width: '10%',
                orderable: false,
                responsivePriority: 1,
                render: function (data, type, row) {
                    return `<i class="fa fa-trash" onClick="confirmRemove(deleteTag,${row.id})" style="cursor: pointer;"></i>`
                }
            }],
        });
    } else {
        let ff = fTab.DataTable();
        ff.clear().draw();
        ff.rows.add(data);
        ff.columns.adjust().draw();
    }

    $('#' + tabID + ' tbody').on('click', 'tr td:not(:last-child)', function () {
        let postId = this.parentElement.getAttribute("data-index");
        openArticleForm(false, postId)
    });
}

let templateCategories = () => {
    const thArr = ['id', 'tytuł', 'kategoria', 'status', 'dodano', ''];
    let temp = `
        <div class="row" style="margin: 20px 5px 35px 5px;">
            ${pageHeader('Edycja postów')}
        <div class="col-md-12" id="tabBox">
            ${pageTable(thArr, tabID)}
        </div> 
        <div class="col-md-12" id="articleForm" style="display:none">
        </div> 
    </div>
    `;
    document.getElementById('root').innerHTML = temp;
    getPosts();
}

templateCategories();