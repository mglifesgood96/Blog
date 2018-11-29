let pageTable = (thArr, tadId)=>{
    let temp = `
        <table id="${tadId}" class="table table-striped table-bordered" style="width:100%">
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