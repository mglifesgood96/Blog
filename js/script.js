const getPageName = () => {
    let url = window.location.href;
    let captured = /a=([^&]+)/.exec(url)[1];
    let result = captured ? captured : 'error';
    return result;
}