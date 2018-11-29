const getTagsUrl = 'http://localhost/Blog/api/controlers/tags/read.php';

let getTags = () => {
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

let addTag = () => {

}
 
let editTag = () => {

}

let deleteTag = () => {

}

let templateTags = () => {
    let temp = `
        <div class="row" style="margin: 20px 5px 0px 5px;">
            ${pageHeader('Edycja tagów')}
            ${pageEditor()}
            ${pageTable()}
        </div>
    `;
    document.getElementById('root').innerHTML = temp;
}

templateTags();