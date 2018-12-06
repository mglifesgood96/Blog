let getArticle = () => {
    let pn = getPageName();
    $.ajax({
        type: "POST",
        url: 'http://localhost/Blog/api/controlers/posts/read_one.php',
        dataType: "JSON",
        data: { page_name: pn },
        success: function (data) {
            templateArticle(data.data[0]);
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let templateArticle = (data) => {
    console.log(data);
    let temp = `
    <main role="main" class="container">
        <br /> <br />
        <div class="row">
            ${
                imgHeader()
            }
            ${
                articleContent(data)
            }
        </div>
    </main>
    <br /><br />
    ${
        footer()
    }
    `;
    document.getElementById('root').innerHTML = temp;
}

getArticle();