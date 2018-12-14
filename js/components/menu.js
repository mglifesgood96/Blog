const categoriesMenu = () => {
    $.ajax({
        type: "POST",
        url: 'http://localhost/Blog/api/controlers/categories/read_blog.php',
        dataType: "JSON",
        success: function (data) {
            let cat = data.data;
            let temp = `
                ${cat.map(e =>`<a class="dropdown-item" href="#">${e.name}</a>`).join('')}
            `;
            document.getElementById('catMenu').innerHTML = temp;
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

const menuTemplate = () => {
    let temp = `
        <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <a class="navbar-brand" href="index.html">E-Marketing</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#jakePaul" aria-controls="jakePaul"
                aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

            <div class="collapse navbar-collapse" id="jakePaul">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Strona Główna</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="appleSauce" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">Kategorie</a>
                        <div id="catMenu" class="dropdown-menu" aria-labelledby="appleSauce"></div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input type="text" placeholder="Search" class="form-control mr-sm-2">
                    <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Szukaj</button>
                </form>
            </div>
        </nav>
    `;
    return temp;
}