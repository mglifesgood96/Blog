let sideMenu ={
  construct: ()=>{
    let content = sideMenu.loadContent();
    $("#side-menu").addClass("col-md-2 col-sm-1 col-2 d-none d-sm-block display-table-cell valing-top");
    $("#side-menu").append(content);
  },
  loadContent: ()=>{
    let content = "";
    let list = sideMenu.sideList();
    content = '<h1>Navi</h1>'+list;
    return content;
  },
  sideList: ()=>{
    const items = [
      {href: 'index', text: 'Start', icon: 'th'},
      {href: 'collapse-menu', icon:'list-alt', text: 'Artykuly', collapse:
      [
        {href: 'article', text: 'Artykuly'},
        {href: 'new-article', text: 'Nowy artykul'}
      ]},
      {href: 'comments', text: 'Komentarze', icon: 'pencil'},
      {href: 'tags.php', text: 'Tags', icon: 'tags'},
      {href: 'settings', text: 'Ustawienia', icon: 'cog'}
    ]
    let ulMenu = '<ul>';
    let navItem, navLink;
    let navSpan;

    for(let val in items){
      /*navItem = document.createElement('li');
      navLink = document.createElement('a');
      navLink.href = items[val].href;
      navLink.innerHTML = sideMenu.spans(items[val].text,items[val].icon);
      navItem.append(navLink);
      ulMenu.append(navItem);*/
      let colMenu = '';
      navItem = '<li class="link">';
      navLink = '<a href="'+items[val].href+'" >';
      if(items[val].collapse != undefined){
        colMenu = sideMenu.drawCollapse(items[val].collapse);
        navLink = '<a href="#'+items[val].href+'" data-toggle="collapse" aria-controls="collapse-menu" >';
      }
      navSpan = sideMenu.spans(items[val].text,items[val].icon);
      navLink += navSpan;
      navLink += '</a>';
      navLink += colMenu;
      navItem += navLink;
      navItem += '</li>';
      ulMenu += navItem;
    }
    ulMenu += '</ul>';
    //console.log(ulMenu);
    return ulMenu;
  },
  spans: (textItem, iconItem)=>{
    let span1,span2;
    let return_span;
    /*span1 = document.createElement('span');
    span1.setAttribute("aria-hidden", "true");
    span1.className = "fa fa-"+iconItem;
    span2 = document.createElement('span');
    span2.className = "d-none d-md-inline";
    span2.innerHTML = textItem;*/
    span1 = '<span class="fa fa-'+iconItem+'" aria-hidden="true"></span>';
    span2 = '<span class="d-none d-md-inline">'+textItem+'</span>';
    return_span = span1+span2;
    return return_span;
  },
  drawCollapse: (obj)=>{
    let colUl = '<ul class="collapse collapseable" id="collapse-menu">';
    for(let val in obj){
      colUl += '<li><a href="'+obj[val].href+'">'+obj[val].text+'</a></li>';
    }
    colUl += '</ul>';
    return colUl;
  }
}
sideMenu.construct();
