let getArticle = () => {
    let pn = getPageName();
    $.ajax({
        type: "POST",
        url: 'http://localhost/Blog/api/controlers/posts/read_one.php',
        dataType: "JSON",
        data: { page_name: pn },
        success: function (data) {
            console.log(data)
            if (data.hasOwnProperty('error')) {
                alert(data.error)
            }else{
                templateArticle(data.data[0]);
                getTags(data.data[0].id_tag);
            }
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let getTags = (ds) => {
    $.ajax({
        type: "POST",
        url: 'http://localhost/Blog/api/controlers/tags/ids.php',
        dataType: "JSON",
        data: { ids: ds },
        success: function (data) {
            document.getElementById('tags').innerHTML = '';
            data.data.forEach(e => {
                document.getElementById('tags').innerHTML += '#'+e.name;
            });
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

let templateArticle = (data) => {
    let temp = `
    ${menuTemplate()}
    <main role="main" class="container">
        <br /> <br />
        <div class="row">
            ${
                imgHeader(data)
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
categoriesMenu();