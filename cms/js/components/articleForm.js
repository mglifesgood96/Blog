let categories = [];
let tags = [];
let dz;
let ids;
let imgban = '';

const articleForm = (data) => {
    imgban = (data)?data.img_detal.name:'';
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
                    <label for="exampleFormControlSelect2">
                        Tytuł 
                        <!--<div class="btn btn-secondary circle-div" data-toggle="tooltip" data-placement="top" title="Tytuł musi mieć unikalną nazwe">
                            <span>?</span>
                        </div>-->
                    </label>
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
                    <label for="exampleFormControlSelect2">Zdjęcie główne</label>
                    <div class="row">
                        <div class="col-md-4" id="usImg">
                            ${
                                (isNew || data.img_baner === "")?'':`<img src="../${data.img_baner}" class="img-fluid" alt="Responsive image" id="img_baner"><br /> <br />`
                            }
                            <button type="button" class="btn btn-info" onClick="showDropzoneNew()">Nowe</button>
                            <button type="button" class="btn btn-danger" onClick="removeImgBaner()">Usuń</button>
                        </div>
                    </div>
                    <div id="newBaner">
                        <div style="cursor: pointer;" onClick="cancelAddIMG()"><i class="fa fa-times"></i> Anuluj</div>
                        <div id="dZUpload" class="dropzone"></div>
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
    requiredFunc(data)
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
    ids = id;
    (dz.files.length > 0) ? dz.processQueue() : sendNewData();
}

const sendNewData = () => {
    let data = getArticleFromData();
    data.id = ids;
    data.img_baner = imgban;
    if (ids == 0 || ids === '0')
        createPost(data)
    else
        sendUpdatePost(data);
}

const requiredFunc = (data) => {
    $(function () {
        $('#newBaner').hide();
        Dropzone.autoDiscover = false;
        dz = new Dropzone(dZUpload, {
            url: uploadHeaderImageUrl,
            autoProcessQueue: false,
            uploadMultiple: false,
            addRemoveLinks: true,
            acceptedFiles: ".jpeg,.jpg,.png,.gif",
            maxFiles: 1,
            init: function () {
                this.on("maxfilesexceeded", function (file) {
                    this.removeAllFiles();
                    this.addFile(file);
                });
            },
            success: function (file, response) {
                response = jQuery.parseJSON(response)
                let data = getArticleFromData();
                data.id = ids;
                data.img_baner = response.file;
                if (ids == 0 || ids === '0')
                    createPost(data)
                else
                    sendUpdatePost(data);
            } 
        });
        dz.on("complete", function (file) {
            dz.removeFile(file);
        }),
        $('[data-toggle="tooltip"]').tooltip()
    })
}

const refreshImage = (src) => {
    document.getElementById('img_baner').setAttribute("src", '../images/'+src);
}

const showDropzoneNew = () => { 
    $('#usImg').hide();
    $('#newBaner').show();
}

const showImgView = () => {
    $('#usImg').show();
    $('#newBaner').hide();
}

const removeImgBaner = () => {
    alert('niedostępne')
}

const cancelAddIMG = () => {
    if(dz.files.length > 0)dz.removeAllFiles();
    showImgView();
}