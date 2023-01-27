var tab_html = document.querySelector(".tab-html");
var tab_css = document.querySelector(".tab-css");
var tab_js = document.querySelector(".tab-js");
var html_space = document.querySelector(".html-space");
var css_space = document.querySelector(".css-space");
var js_space = document.querySelector(".js-space");
var set = document.querySelector(".set");
var set_tab = document.querySelector(".settings-tab");
var close = document.querySelector(".close");
var html_inner_space = document.querySelector(".html-inner-space-textarea");
var css_inner_space = document.querySelector(".css-inner-space-textarea");
var js_inner_space = document.querySelector(".js-inner-space-textarea");
var color_option_1 = document.querySelector(".color-option-1");
var color_option_2 = document.querySelector(".color-option-2");
var font_family_select = document.querySelector(".font-family-select");
var font_weight_select = document.querySelector(".font-weight-select");
var font_size_select = document.querySelector(".font-size-select");
var font_size_select_style = window.getComputedStyle(font_size_select, null).getPropertyValue('font-size');
var fontSize = parseFloat(font_size_select_style); 
var output = document.querySelector(".output");
var run_btn = document.querySelector(".run");
var switch_btn = document.querySelector(".switch");
var upgrade = document.querySelector(".upgrade");

font_size_select.value = Math.floor(fontSize);

tab_html.addEventListener("click", function(){
    tab_html.style.border = "1px groove lavender";
    tab_html.style.borderBottom = "none";
    tab_html.style.backgroundColor = "#202020";
    tab_css.style.border = "1px groove transparent";
    tab_css.style.backgroundColor = "#333";
    tab_js.style.border = "1px groove transparent";
    tab_js.style.backgroundColor = "#333";
    html_space.style.zIndex = "2";
    css_space.style.zIndex = "1";
    js_space.style.zIndex = "0";
});

tab_css.addEventListener("click", function(){
    tab_css.style.border = "1px groove lavender";
    tab_css.style.borderBottom = "none";
    tab_css.style.backgroundColor = "#202020";
    tab_html.style.border = "1px groove transparent";
    tab_html.style.backgroundColor = "#333";
    tab_js.style.border = "1px groove transparent";
    tab_js.style.backgroundColor = "#333";
    css_space.style.zIndex = "2";
    html_space.style.zIndex = "1";
    js_space.style.zIndex = "0";
});

tab_js.addEventListener("click", function(){
    tab_js.style.border = "1px groove lavender";
    tab_js.style.borderBottom = "none";
    tab_js.style.backgroundColor = "#202020";
    tab_html.style.border = "1px groove transparent";
    tab_html.style.backgroundColor = "#333";
    tab_css.style.border = "1px groove transparent";
    tab_css.style.backgroundColor = "#333";
    js_space.style.zIndex = "2";
    html_space.style.zIndex = "1";
    css_space.style.zIndex = "0";
});

set.addEventListener("click", function () {
    set_tab.style.display = "flex";
});

close.addEventListener("click", function () {
    set_tab.style.display = "none";
});

color_option_1.addEventListener("keyup", function (){
    console.log(color_option_1.value);
    html_inner_space.style.color = color_option_1.value;
    css_inner_space.style.color = color_option_1.value;
    js_inner_space.style.color = color_option_1.value;
});

color_option_2.addEventListener("change", function (){
    console.log(color_option_1.value);
    html_inner_space.style.color = color_option_2.value;
    css_inner_space.style.color = color_option_2.value;
    js_inner_space.style.color = color_option_2.value;
});

font_family_select.addEventListener("change", function (){
    html_inner_space.style.fontFamily = font_family_select.value;
    css_inner_space.style.fontFamily = font_family_select.value;
    js_inner_space.style.fontFamily = font_family_select.value;
});

font_weight_select.addEventListener("change", function (){
    html_inner_space.style.fontWeight = font_weight_select.value;
    css_inner_space.style.fontWeight = font_weight_select.value;
    js_inner_space.style.fontWeight = font_weight_select.value;
});

font_size_select.addEventListener("input", function (){
    html_inner_space.style.fontSize = font_size_select.value + "px";
    css_inner_space.style.fontSize = font_size_select.value + "px";
    js_inner_space.style.fontSize = font_size_select.value + "px";
});

run_btn.addEventListener("click", function (){
    let html_code = html_inner_space.value;
    let css_code = "<style>" + css_inner_space.value + "</style>";
    let js_code = js_inner_space.value;
    output.contentDocument.body.innerHTML = html_code + css_code;
    output.contentWindow.eval(js_code);
});

switch_btn.addEventListener("change", function (){
    html_inner_space.addEventListener("keyup", run);
    css_inner_space.addEventListener("keyup", run);
    js_inner_space.addEventListener("keyup", run);
});

function run(){
    let html_code = html_inner_space.value;
    let css_code = "<style>" + css_inner_space.value + "</style>";
    let js_code = js_inner_space.value;
    output.contentDocument.body.innerHTML = html_code + css_code;
    output.contentWindow.eval(js_code);
}

upgrade.addEventListener("click", function (){
    alert("This Feature Is Currently Unavailable");
});