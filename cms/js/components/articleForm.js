const articleForm = (data) => {
    let isNew = (data)?false:true;
    let temp = `
        <div class="mx-3">
            <div class="form-group">
                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Tytuł</label>
                    <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value="${(isNew)?'':data.title}">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Kategoria</label>
                        <select class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                        </select>
                </div>
                
                <div class="mb-3">
                    <label for="exampleFormControlSelect2">Tagi</label>
                        <select class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
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
        </div>
    `;
    return temp;
}

const openArticleForm = (isNew=true,id) => {
    document.getElementById('tabBox').style.display = 'none';
    document.getElementById('articleForm').style.display = 'block';
    if(!isNew)
        getOnePost(id)
    else
        document.getElementById('articleForm').innerHTML = articleForm()
}

const closeArticleForm = () => {
    document.getElementById('tabBox').style.display = 'block';
    document.getElementById('articleForm').innerHTML = '';
    document.getElementById('articleForm').style.display = 'none';
}