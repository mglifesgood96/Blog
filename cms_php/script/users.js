const getUsersUrl = "services/getData.php?cmd=getUsers";
const getRightsUrl = "services/getData.php?cmd=getRights";

let users = {
    rights: [],
    users:[],
    start: () => {
        users.getRights();
        users.getUsers();
    },
    getUsers: () => {
        Draws.getData(getUsersUrl, users.drawUserTable);
    },
    getRights: () => {
        Draws.getData(getRightsUrl, users.dataRights, users.rights);
    },
    dataRights: (data) => {
        users.rights.push(data);
    },
    drawRights: (id) => {
        let rightName;
        let data = users.rights[0];
        if (data == null){
            location.reload();
        }
        data.forEach(did => {
            if (id == did.id){
                rightName = did.name;
            }
        });
        return rightName;
    },
    drawUserTable: (data) => {
        users.users.push(data);
        let fields =
            [{ "title":"Id","data": "id" },
            { "title":"Email","data": "email" }, 
            { "title": "Rights" },
            { "title": "Action", "data": "" }
        ];
        let cols = [{ "width": "10%", "targets": 0 },
            {
                "targets": 2,
                "data": "rights_id",
                "render": function (data, type, row, meta) {
                    //return users.drawRights(rights_id);
                    return users.drawRights(data);
                }
            },
            { "targets": -1, "data": null, "render": function (data, type, row, meta) {
                return '<button type="button" class="btn btn-xs btn-warning" data-toggle="modal" data-target="#usersModal" onclick="users.editUser(' + row.id + ')">edytuj</button>&nbsp;<button type="button" class="btn btn-xs btn-danger" onclick="users.delUser(' + row.id +')">usun</button>'}}];
        Draws.dataTable("#usersTable", fields,data,cols);
    },
    drawModal: (title, idUser) => {
        let uD = users.drawModalInputsData(idUser);
        $("#userModalContent").empty();
        let div = '<div class="modal-header">';
        div += '<h5 class="modal-title" id="modalTitle">'+title+'</h5>';
        div += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria - hidden="true" >& times;</span></button></div>';
        div += '<div class="modal-body"><div class="form-group">';
        div += '<label for="userEmail">Email</label>';
        div += '<input id="userEmail" class="form-control" type="text" value="';
        div += (idUser == null)?"":uD.email;
        div += '">';
        div += '</div><div class="form-group"><label for="userPass">Password</label>';
        div += '<input type="password" name="" id="userPass" class="form-control" placeholder="" value="';      
        div += (idUser == null)?"":uD.password
        div += '">';
        div += '</div><div class="form-group"><label for="userRights">Uprawnienia</label>';
        div += users.drawSelectRights(idUser);
        div += '</div></div><div class="modal-footer">';
        div += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>';
        div += '<button type="button" class="btn btn-adm" onClick="users.userSave('+idUser+')">Zapisz</button>';
        div += '</div></div>';
        $("#userModalContent").append(div);
    },
    drawSelectRights: (id) => {
        let dataUsers = users.users[0];
        let rId;
        dataUsers.forEach(did => {
            if(did.id == id)
                rId = did.rights_id;
        });
        let select = '<select class="form-control" id="userRights">';
        (id == null) ? select += '<option value="" disabled selected>Wybierz uprawnienia</option>' : null;
        let data = users.rights[0];
        data.forEach(did => {
            (rId == did.id) ? select += '<option selected id="' + did.id + '">' + did.name + '</option>' : select += '<option id="' + did.id + '">' + did.name + '</option>';
        })
        select += '</select>'
        return select;
    },
    drawModalInputsData: (id) => {
        let dataUsers = users.users[0];
        let dd;
        dataUsers.forEach(did => {
            if (did.id == id)
                dd = {
                    "email":did.email,
                    "password":did.password
                };
        });
        return dd;
    },
    editUser: (id) => {
        users.drawModal('Edycja uzytkownika',id);
    },
    newUser: () => {
        users.drawModal('Nowy uzytkownik');
    },
    userSave: (id) => {
        $('#usersModal').modal('hide');
        console.log(id);
        Draws.alertToastr('Sukces', 'success');
    },
    delUser: (id) => {
        Draws.alertSweet("Czy napewno chcesz usunąć?", "Wybrany uzytkownik zostanie trwale usunięty!", "warning", "Tak, usuń!", users.delTrue,id);
    },
    delTrue: (id)=>{
        console.log(id);
        Draws.alertToastr('Sukces', 'success');
    }
}