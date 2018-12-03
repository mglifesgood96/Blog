let categories = [];
let tags = [];

const articleForm = (data) => {
    let isNew = (data)?false:true;
    let postTags = [];
    if(!isNew){
        tId = data.id_tag;
        postTags = tId.split(',');
    }
    console.log(tags)
    let temp = `
        <div class="mx-3">
            <div class="form-group">
                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Tytuł</label>
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value="${(isNew)?'':data.title}">
                </div>

                <div class="mb-3">
                    <label for="fieldCategory">Kategoria</label>
                        <select class="form-control form-control-chosen" data-placeholder="Wybierz kategorie..." id="fieldCategory">
                            <option></option>    
                            ${categories.map(e=>`
                                <option ${(isNew)?'':(e.id === data.id_category)?'selected':''} >
                                    ${e.name}
                                </option>`
                            )}
                        </select>
                </div>
                
                <div class="mb-3">
                    <label for="fieldTags">Tagi</label>
                        <select class="form-control form-control-chosen" multiple data-placeholder="Wybierz tagi..." id="fieldTags">
                            <option></option>
                            ${tags.map(e=>`
                                <option
                                    ${postTags.map(t=>(e.id === t)?'selected':'').join('')}
                                >
                                    ${e.name}
                                </option>`
                            )}
                        </select>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Status</label>
                        <select class="form-control" id="exampleFormControlSelect2">
                            <option>Projekt</option>
                            <option>Publiczny</option>
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${(isNew) ? '' : data.description}
                    </textarea>
                </div>
            </div>
            <div class="float-right">
                <button type="button" class="btn btn-secondary" onClick="closeArticleForm()">Powrót</button>
                <button type="button" class="btn btn-success">Zapisz</button>
            </div>
        </div>
    `;
    return temp;
}

const openArticleForm = (isNew=true,id) => {
    document.getElementById('tabBox').style.display = 'none';
    document.getElementById('articleForm').style.display = 'block';
    getCategories();
    getTags();
    if(!isNew){
        getOnePost(id)
    }else{
        $(document).ajaxStop(function () {
            document.getElementById('articleForm').innerHTML = articleForm()
            $('.form-control-chosen').chosen()
        });
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

let getCategories = () => {
    $.ajax({
        url: getCategoriesUrl,
        dataType: "JSON",
        success: function (data) {
            categories = data.data;
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let getTags = () => {
    $.ajax({
        url: getTagsUrl,
        dataType: "JSON",
        success: function (data) {
            tags = data.data;
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}