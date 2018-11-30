let pageEditor = (editorID)=>{
    let temp = `
        <div class="form-group">
            <div style="display:none" id="cancelEdit"><i class="fa fa-times"></i> Anuluj</div>
            <textarea class="form-control" id="${editorID}" rows="2" style="resize: none;"></textarea>
            <button id="editorSave" type="button" class="btn btn-success" style="margin-top: 10px; width: 100%">Zapisz</button>
        </div>
    `;
    return temp;
}