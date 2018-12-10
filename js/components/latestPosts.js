let getAllPosts = () => {
    $.ajax({
        url: "http://localhost/Blog/api/controlers/posts/read.php",
        dataType: "JSON",
        success: function (data) {
            latestPosts(data.data);
        },
        error: function (request, status, error) {
            console.log(error);
        }
    })
}

const latestPosts = (data) => {
    let temp = `
        ${data.map(e=>onePostView(e)).join("")}
        <div class="float-right">
            <nav aria-label="Page navigation example">
               <!-- <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>-->
            </nav>
        </div>
    `;
    document.getElementById('latestPosts').innerHTML = temp;
}