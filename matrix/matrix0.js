function v(id) {
    return parseFloat((document.getElementById(id)).value);
}
function set(id, v) {
    document.getElementById(id).value = v;
}

function mul() {
    document.getElementById("operator").textContext = "x";
    set("i", v("a")*v("e")+v("b")*v("g"));
    set("j", v("a")*v("f")+v("b")*v("h"));
    set("k", v("c")*v("e")+v("d")*v("g"));
    set("l", v("c")*v("f")+v("d")*v("h"));
}

function add() {
    document.getElementById("operator").textContext = "+";
    set("i", v("a")+v("e"));
    set("j", v("b")+v("f"));
    set("k", v("c")+v("g"));
    set("l", v("d")+v("h"));
}