const articleContent = (data)=>{
    console.log(data.title)
    let temp = `
    <div class="col-lg-12">
        <hr />
            <span class="main-article-category">Kategoria artykułu</span>
        <br />
            <a href="article.html"></a><span class="main-article-title">${data.title}</span></a>
        <br />
        <span>By <span class="author-name">Monika Nastalska</span></span>
        <br /><br />
            <span class="main-article-content">
                ${data.description}
            </span>
        <br /><br />
        <span class="main-article-tag">

        </span>
    </div>
    `;
    return temp;
}