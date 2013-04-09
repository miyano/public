function assert(err) {
    alert(err);
}

function get_node_textContent(node) {
    return node.textContent ||node.text;
}

/*
  get_selected_option_value
  in select: selection  object  (ex. document.fm.week)
  return current selected object value (ex. 'monday')
*/
function get_selected_option_value(select) {
  return select.options.item(select.selectedIndex).value;
}
