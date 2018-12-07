const latestPosts = () => {
    let temp = `
    <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="img-responsive" width="100%" src="http://via.placeholder.com/800x600">
                        </div>
                        <div class="col-md-8">
                            <span class="sub-article-date">Marzec. 30, 2018</span>
                            <br />
                            <a href="#"><span class="sub-article-title">Jak skutecznie ominąć kategorię SPAM?</span></a>
                            <br />
                            <span class="sub-article-author">By <span class="autor-name">Monika Nastalska</span></span>
                            <span class="sub-article-category">Kategoria artykułu</span>
                        </div>
                    </div>
                    <hr />


                    <div class="row">
                        <div class="col-md-4">
                            <img class="img-responsive" width="100%" src="http://via.placeholder.com/800x600">
                        </div>
                        <div class="col-md-8">
                            <span class="sub-article-date">Kwiecień. 12, 2017</span>
                            <br />
                            <a href="#"><span class="sub-article-title">Uwierzytelnianie domeny - czyli kilka słów o DKIM,
                                    SPF, DMARC</span></a>
                            <br />
                            <span class="sub-article-author">By <span class="autor-name">Monika Nastalska</span></span>
                            <span class="sub-article-category">Kategoria artykułu</span>
                        </div>
                    </div>
                    <hr />


                    <div class="row">
                        <div class="col-md-4">
                            <img class="img-responsive" width="100%" src="http://via.placeholder.com/800x600">
                        </div>
                        <div class="col-md-8">
                            <span class="sub-article-date">Maj. 14, 2014</span>
                            <br />
                            <a href="#"><span class="sub-article-title">Dostarczalność - jak sprawić, by wiadomość dotarła
                                    do głównej skrzynki odbiorcy</span></a>
                            <br />
                            <span class="sub-article-author">By <span class="autor-name">Monika Nastalska</span></span>
                            <span class="sub-article-category">Kategoria artykułu</span>
                        </div>
                    </div>
                    <hr />


                    <div class="float-right">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

    `;
    return temp;
}