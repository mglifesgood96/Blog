const onePostView = (data) => {
    let temp = `
        <div class="row" onclick="window.location='article?a=${data.page_name}'">
            <div class="col-md-4">
                <img class="img-responsive" width="100%" src="${data.img_baner}">
            </div>
            <div class="col-md-8">
                <span class="sub-article-date">${PostDateFormat(data.creation_date)}</span>
                <br />
                <a><span class="sub-article-title">${data.title}</span></a>
                <br />
                <span class="sub-article-author">By <span class="autor-name">Monika Nastalska</span></span>
                <span class="sub-article-category">${data.category}</span>
            </div>
        </div>
        <hr />
    `;
    return temp;
}