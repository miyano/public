function assert(err) {
    alert(err);
}

function get_text_content(node) {
    return node.textContent ||node.text;
}

function remove_all_child(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function textNodeToHTML(node) {
    var html = '';
    var child = node.firstChild;
    while (child) {
        //var debug = 'type: ' + child.nodeType + '\nvalue: ' + child.nodeValue + '\ntagName: ' + child.tagName;
        //alert(debug);
        switch (child.nodeType) {
        case child.TEXT_NODE:
            html += child.nodeValue;
            break;
        case child.ELEMENT_NODE:
            if (child.tagName == 'br') {
                html += '<br>';
            }
            break;
        default:
            break;
        }
        child = child.nextSibling;
    }
    return html;
}

/*
  get_selected_option_value
  in select: selection  object  (ex. document.fm.week)
  return current selected object value (ex. 'monday')
*/
function get_selected_option_value(select) {
  return select.options.item(select.selectedIndex).value;
}

function debug_print_object(object) {
    var text = 'object: ' + object + "<br>";
    for (var i in object) {
        text += '&nbsp;&nbsp;&nbsp;' + i + ': ' + object[i] + "<br>";
    }
    return text;
}