let templateIndex = () => {
    let temp = `
        <main role="main" class="container">
            ${banner()}
            <br /><br />
            <div class="row">
                ${latestPostSlider()}
            </div>
            <br /><br />
            <span class="recent-articles">Ostatnie wstawki</span>
            <hr />
            <div class="row">
                <div id="latestPosts" class="col-lg-8 col-md-12 col-sm-12">
                </div>
                <div class="col-lg-4 col-md-4 d-none d-md-none d-lg-block">
                    <span class="sponsors">O mnie</span>
                    <br /><br />
                </div>
            </div>
        </main>
    `;
    document.getElementById('root').innerHTML = temp;
}
templateIndex();
getAllPosts();