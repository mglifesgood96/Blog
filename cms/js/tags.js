const getTagsUrl = 'http://localhost/Blog/api/controlers/tags/read.php';
const addTagsUrl = 'http://localhost/Blog/api/controlers/tags/add.php';
const updateTagsUrl = 'http://localhost/Blog/api/controlers/tags/update.php';
const deleteTagsUrl = 'http://localhost/Blog/api/controlers/tags/delete.php';
const tabID = 'tagsTab';
const editorID = 'tagsEdit';

let getTags = (refresh=false) => {
    $.ajax({
        url: getTagsUrl,
        dataType: "JSON",
        success: function (data) {
            let tags = data.data;
            tagsTableData(tags, refresh);
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let addTag = (newName) => {
    $.ajax({
        type: "POST",
        url: addTagsUrl,
        dataType: "json",
        data: {name: newName},
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
                cleanEditor(editorID);
                getTags(true);
            } else {
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}
 
let editTag = (id, newName) => {
    $.ajax({
        type: "POST",
        url: updateTagsUrl,
        dataType: "json",
        data: { id: id, name: newName },
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
                cleanEditor(editorID);
                getTags(true);
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
        url: deleteTagsUrl,
        dataType: "json",
        data: { id: id },
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
                cleanEditor(editorID);
                getTags(true);
            } else {
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}

let tagsTableData = (data, ref = false) => {
    let fTab = $("#" + tabID);
    let db;
    if (!ref) {
        db = fTab.DataTable({
            "responsive": true,
            "data": data,
            "createdRow": function (row, data, dataIndex) {
                $(row).attr('data-index', data.id);
            },
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
    let dataIndex = 0;

    $('#' + tabID + ' tbody').on('click', 'tr td:first-child', function () {
        document.getElementById('cancelEdit').style.display = "block";
        dataIndex = this.parentElement.getAttribute("data-index");
        document.querySelector('#' + editorID).value = this.innerHTML;
    });
    
    document.getElementById('editorSave').onclick = function () {
        let tagEditorValue = document.querySelector('#' + editorID).value;
        let isValid = true;
        if(data.length > 0){
            data.map(function(e) {
                if (e.name === tagEditorValue){
                    alert('taki tag juz istnieje');
                    isValid = false;
                }
            })
        }
        if(isValid){
            if (dataIndex == 0 || dataIndex === '0')
                addTag(tagEditorValue);
            else
                editTag(dataIndex, tagEditorValue);

            document.getElementById('cancelEdit').style.display = "none";
            dataIndex = 0;
        }
     };

    document.getElementById('cancelEdit').onclick = function () {
        dataIndex = 0;
        document.getElementById('cancelEdit').style.display = "none";
        cleanEditor(editorID);
    }
}

let templateTags = () => {
    const thArr = ['nazwa', ''];
    let temp = `
        <div class="row" style="margin: 20px 5px 35px 5px;">
            ${pageHeader('Edycja tagów')}
            <div class="col-md-4">
                ${pageEditor(editorID)}
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