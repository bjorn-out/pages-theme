var list = document.querySelector('#nav-tab');
var max = list.children.length

function goto(tab_id) {
    localStorage.setItem("tab-id", tab_id);
    trigger = document.querySelector('#nav-' + tab_id + '-tab');
    tab_obj = new bootstrap.Tab(trigger);
    tab_obj.show();
}

// Shows the correct tab upon opening the page
var tab = parseInt(localStorage.getItem("tab-id"));
if (!typeof(tab) == "number" || isNaN(tab)) {
    tab = 0;
}

goto(tab);

function next() {
    if (tab < (max - 1)) {
        tab++;
        goto(tab);
    }
}

function prev() {
    if (tab > 0) {
        tab--;
        goto(tab);
    }
}
