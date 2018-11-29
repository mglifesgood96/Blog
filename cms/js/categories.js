const getTagsUrl = 'http://localhost/blog/api/controlers/tags/read.php';

let getCategories = () => {
    $.ajax({
        url: getTagsUrl,
        dataType: "JSON",
        success: function (data) {
            if(data.status == '200'){
                console.log(data.data)
            }else{
                console.log(data.message);
            }
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let addCategories = () => {

}
 
let editCategories = () => {

}

let deleteCategories = () => {

}

let templateCategories = () => {
    let temp = `
        <div class="row" style="margin: 20px 5px 0px 5px;">
            ${pageHeader('Edycja kategorii')}
            ${pageEditor()}
            ${pageTable()}
        </div>
    `;
    document.getElementById('root').innerHTML = temp;
}

templateCategories();