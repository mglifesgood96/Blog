const getTagsUrl = 'http://localhost/michal_monika_blog/api/controlers/tags/read.php';

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
        <div class="row">
            <div class="col-md-3 mb-3" style="border:1px solid black">a</div>
            <div class="col-md-9 mb-3" style="border:1px solid black">b</div>
        </div>
    `;
    document.getElementById('root').innerHTML = temp;
}

templateTags();