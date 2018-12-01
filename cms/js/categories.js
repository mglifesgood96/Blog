const getCategoriesUrl = 'http://localhost/Blog/api/controlers/categories/read.php';
const addCategoryUrl = 'http://localhost/Blog/api/controlers/categories/add.php';
const updateCategoryUrl = 'http://localhost/Blog/api/controlers/categories/update.php';
const deleteCategoryUrl = 'http://localhost/Blog/api/controlers/categories/delete.php';
const tabID = 'categoriesTab';
const editorID = 'categoryEdit';

let getCategories = (refresh = false) => {
    $.ajax({
        url: getCategoriesUrl,
        dataType: "JSON",
        success: function (data) {
            categoriesTableData(data.data, data.message, refresh)
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let addCategory = (newName) => {
    $.ajax({
        type: "POST",
        url: addCategoryUrl,
        dataType: "json",
        data: { name: newName },
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
                cleanEditor(editorID);
                getCategories(true);
            } else {
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}
 
let editCategory = (id, newName) => {
    $.ajax({
        type: "POST",
        url: updateCategoryUrl,
        dataType: "json",
        data: { id: id, name: newName },
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
                cleanEditor(editorID);
                getCategories(true);
            } else {
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}

let deleteCategory = (id) => {
    $.ajax({
        type: "POST",
        url: deleteCategoryUrl,
        dataType: "json",
        data: { id: id },
        success: function (data) {
            if (data.status == '200') {
                toastrAlertFlota(data.message, "success");
                cleanEditor(editorID);
                getCategories(true);
            } else {
                toastrAlertFlota(data.message, "error");
            }
        },
        error: function (request, status, error) {
            alert('błąd api')
        }
    })
}

let categoriesTableData = (data, msg, ref = false) => {
    let fTab = $("#" + tabID);
    let db;
    if (!ref) {
        db = fTab.DataTable({
            "responsive": true,
            "data": data,
            "oLanguage": {
                "sZeroRecords": msg,
            },
            "createdRow": function (row, data, dataIndex) {
                $(row).attr('data-index', data.id);
            },
            "columns": [
                { "data": "name", className: 'category-name', responsivePriority: 1, },
                { "name": "actions" },
            ],
            "columnDefs": [{
                targets: [1],
                className: "text-center",
                width: '10%',
                orderable: false,
                responsivePriority: 1,
                render: function (data, type, row) {
                    return `<i class="fa fa-trash" onClick="confirmRemove(deleteCategory,${row.id})" style="cursor: pointer;"></i>`
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
        let categoryEditorValue = document.querySelector('#' + editorID).value;
        let isValid = true;
        if(data.length > 0){
            data.map(function (e) {
                if (e.name === categoryEditorValue) {
                    alert('taka kategoria juz istnieje');
                    isValid = false;
                }
            })
        }
        if (isValid) {
            if (dataIndex == 0 || dataIndex === '0')
                addCategory(categoryEditorValue);
            else
                editCategory(dataIndex, categoryEditorValue);

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

let templateCategories = () => {
    const thArr = ['nazwa', ''];
    let temp = `
        <div class="row" style="margin: 20px 5px 35px 5px;">
            ${pageHeader('Edycja kategorii')}
            <div class="col-md-4">
                ${pageEditor(editorID)}
            </div>
            <div class="col-md-8">
                ${pageTable(thArr, tabID)}
            </div>
        </div>
    `;
    document.getElementById('root').innerHTML = temp;
    getCategories();
}

templateCategories();