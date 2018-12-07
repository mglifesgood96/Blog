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
                ${latestPosts()}
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