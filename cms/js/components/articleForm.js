let categories = [];
let tags = [];

const articleForm = (data) => {
    let isNew = (data)?false:true;
    let postTags = [];
    if(!isNew){
        tId = data.id_tag;
        postTags = tId.split(',');
    }
    let temp = `
    <form>
        <div class="mx-3">
            <div class="form-group">
                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Tytuł</label>
                    <input type="text" class="form-control" name="title" id="" aria-describedby="helpId" placeholder="" value="${(isNew)?'':data.title}">
                </div>

                <div class="mb-3">
                    <label for="fieldCategory">Kategoria</label>
                        <select class="form-control form-control-chosen" name="id_category" data-placeholder="Wybierz kategorie..." id="fieldCategory">
                            <option></option>    
                            ${categories.map(e=>`
                                <option 
                                    value="${e.id}"
                                    ${(isNew)?'':(e.id === data.id_category)?'selected':''} 
                                >
                                    ${e.name}
                                </option>`
                            ).join('')}
                        </select>
                </div>
                
                <div class="mb-3">
                    <label for="fieldTags">Tagi</label>
                        <select class="form-control form-control-chosen" name="id_tag" multiple data-placeholder="Wybierz tagi..." id="fieldTags">
                            <option></option>
                            ${tags.map(e=>`
                                <option
                                    value="${e.id}" 
                                    ${postTags.map(t=>(e.id === t)?'selected':'').join('')}
                                >
                                    ${e.name}
                                </option>`
                            )}
                        </select>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Status</label>
                        <select class="form-control form-control-chosen-ds" name="status" id="exampleFormControlSelect2">
                            <option value="1" ${(isNew) ? '' : (data.status == 1 || data.status === '1') ? 'selected' : ''} >Projekt</option>
                            <option value="2" ${(isNew) ? '' : (data.status == 2 || data.status === '2') ? 'selected' : ''}>Publiczny</option>
                        </select>
                </div> 

                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Dodaj zdjęcie</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="validatedCustomFile" required>
                        <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                        <div class="invalid-feedback">Example invalid custom file feedback</div>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1">Treść posta</label>
                    <textarea name="description" class="form-control" id="summernote" rows="3">${(isNew) ? '' : data.description}
                    </textarea>
                </div>
            </div>
            <div class="float-right">
                <button type="button" class="btn btn-secondary" onClick="closeArticleForm()">Powrót</button>
                <button type="button" class="btn btn-success" onClick="saveArticleForm(${(isNew) ? 0 : data.id})">Zapisz</button>
            </div>
        </div>
    <form>
    `;
    return temp;
}

const openArticleForm = (isNew=true,id) => {
    document.getElementById('tabBox').style.display = 'none';
    document.getElementById('articleForm').style.display = 'block';
    getCategories();
    getTags();
    if(!isNew){
        setTimeout(function () { getOnePost(id) }, 150);
    }else{
        setTimeout(function () {
            document.getElementById('articleForm').innerHTML = articleForm()
            $('.form-control-chosen').chosen()
            $('.form-control-chosen-ds').chosen({ "disable_search": true})  
            $('#summernote').summernote({
                height: ($(window).height() - 300),
                callbacks: {
                    onImageUpload: function (image) {
                        uploadImage(image[0]);
                    }
                }  
            });
        }, 150);
    }
}

const closeArticleForm = () => {
    document.getElementById('tabBox').style.display = 'block';
    document.getElementById('articleForm').innerHTML = '';
    document.getElementById('articleForm').style.display = 'none';
    categories = [];
    tags = [];
    getPosts(true);
}

const saveArticleForm = (id) => {
    let data = getArticleFromData();
    data.id = id;
    if(id == 0 || id === '0')
        createPost(data)
    else
        sendUpdatePost(data);
}


function uploadImage(image) {
    var data = new FormData();
    data.append("image", image);
    $.ajax({
        url: 'Your url to deal with your image',
        cache: false,
        contentType: false,
        processData: false,
        data: data,
        type: "post",
        success: function (url) {
            var image = $('<img>').attr('src', 'http://' + url);
            $('#summernote').summernote("insertNode", image[0]);
        },
        error: function (data) {
            console.log(data);
        }
    });
}