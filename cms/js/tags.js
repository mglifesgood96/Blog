const getTagsUrl = 'http://localhost/Blog/api/controlers/tags/read.php';
const addTagsUrl = 'http://localhost/Blog/api/controlers/tags/add.php';
const tabID = 'tagsTab';
const editorID = 'tagsEdit';

let getTags = (refresh=false) => {
    $.ajax({
        url: getTagsUrl,
        dataType: "JSON",
        success: function (data) {
            if(data.status == '200'){
                let tags = data.data;
                tagsTableData(tags, refresh);
            }else{
                console.log(data.message);
            }
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

//getTags(true);
let addTag = (newName) => {
    $.ajax({
        type: "POST",
        url: addTagsUrl,
        dataType: "json",
        data: {name: newName},
        success: function (data) {
            if (data.status == '200') {
                console.log('dodano')
            } else {
                console.log(data.message);
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}
 
let editTag = (id, newName) => {
    console.log(id)
    console.log(newName)
}

let deleteTag = (id) => {
    console.log(id)
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
                    return `<i class="fa fa-trash" onClick="deleteTag(${row.id})"></i>`
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
        dataIndex = this.parentElement.getAttribute("data-index");
        document.querySelector('#' + editorID).value = this.innerHTML;
    });
    
    document.getElementById('editorSave').onclick = function () {
        let tagEditorValue = document.querySelector('#' + editorID).value;
        let isValid = true;
        data.map(function(e) {
            if (e.name === tagEditorValue){
                alert('taki tag juz istnieje');
                isValid = false;
            }
        })
        if(isValid){
            if (dataIndex == 0)
                addTag(tagEditorValue);
            else
                editTag(dataIndex, tagEditorValue);
        }
     };
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


// przenieś do jakiegoś skryptu ;D
let toastrAlertFlota = (msg, type) => {
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