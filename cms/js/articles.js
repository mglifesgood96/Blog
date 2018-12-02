const getPostsUrl = 'http://localhost/Blog/api/controlers/posts/read_adm.php';
const getOnePostUrl = 'http://localhost/Blog/api/controlers/posts/read_one.php';
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
}

let templateCategories = () => {
    const thArr = ['id', 'tytuł', 'kategoria', 'status', 'dodano', ''];
    let temp = `
        <div class="row" style="margin: 20px 5px 35px 5px;">
            ${pageHeader('Edycja postów')}
        <div class="col-md-12">
            ${pageTable(thArr, tabID)}
        </div> 
    </div>
    `;
    document.getElementById('root').innerHTML = temp;
    getPosts();
}

templateCategories();