let pageTable = (thArr, tabId)=>{
    let temp = `
        <table id="${tabId}" class="table table-striped table-bordered" style="width:100%">
            <thead>
                <tr>
                    ${
                        thArr.map(function (e) {
                            return `<th>` + e + `</th>`
                        }).join('')
                    }
                </tr>
            </thead>
        </table>
    `;
    return temp;
}