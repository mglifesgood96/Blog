let templateArticle = () => {
    let temp = `
    <main role="main" class="container">
        <br /> <br />
        <div class="row">
            ${
                imgHeader()
            }
            ${
                articleContent()
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

templateArticle();