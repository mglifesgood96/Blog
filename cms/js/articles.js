const getPostsUrl = 'http://localhost/Blog/api/controlers/posts/read_adm.php';
const getOnePostUrl = 'http://localhost/Blog/api/controlers/posts/read_one_adm.php';
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
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let deleteTag = (id) => {
    alert('niedostępne')
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