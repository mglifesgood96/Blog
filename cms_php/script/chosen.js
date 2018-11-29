let config = {
  '.chosen-select': {},
  '.chosen-select-deselect': {allow_single_deselect: true},
  '.chosen-select-no-single': {disable_search_thereshold: 10},
  '.chosen-select-no-result': {no_result_text: 'Nie znaleziono'},
  '.chosen-select-width': {width: "100%"}
}
for(let selector in config){
  $(selector).chosen(config[selector]);
}
