const getTagsUrl = 'http://localhost/Blog/api/controlers/tags/read.php';
const tabID = 'tagsTab';

let getTags = () => {
    $.ajax({
        url: getTagsUrl,
        dataType: "JSON",
        success: function (data) {
            if(data.status == '200'){
                let tags = data.data;
                tagsTableData(tags);
            }else{
                console.log(data.message);
            }
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let addTag = () => {

}
 
let editTag = () => {

}

let deleteTag = () => {

}

let tagsTableData = (data, ref = false) => {
    let fTab = $("#" + tabID);
    let db;
    if (!ref) {
        db = fTab.DataTable({
            "responsive": true,
            "data": data,
            "columns": [
                { "data": "name", className:'tag-name', responsivePriority: 1, },
                { "name": "actions" },
            ],
            "columnDefs": [{
                targets: [1],
                className: "text-center",
                width: '10%',
                orderable: false,
                responsivePriority: 1,
                render: function (data, type, row) {
                    return `<i class="fa fa-trash"></i>`
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

let templateTags = () => {
    let thArr = ['nazwa', ''];
    let temp = `
        <div class="row" style="margin: 20px 5px 35px 5px;">
            ${pageHeader('Edycja tagów')}
            <div class="col-md-4">
                ${pageEditor()}
            </div>
            <div class="col-md-8">
                ${pageTable(thArr, tabID)}
            </div>
        </div>
    `;
    document.getElementById('root').innerHTML = temp;
    getTags();
}

templateTags();