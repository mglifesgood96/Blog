const getPageName = () => {
    let url = window.location.href;
    let captured = /a=([^&]+)/.exec(url)[1];
    let result = captured ? captured : 'error';
    return result;
}

const PostDateFormat = (date) => {
    const monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    date = date.split(" ")[0];
    date = date.split("-");
    return monthNames[date[1]-1]+' '+date[2]+', '+date[0];
}