function showProject(id) {
    var x = document.getElementById(id);
    x.style.display = x.style.display !== "block" ? "block" : "none"
};

function changeTheme(theme){
    let styleSheet

    switch (theme) {
        case 'light':
            styleSheet = './css/light.css'
        break;
        case 'dark':
            styleSheet = './css/dark.css'
        break;
        case 'terminal':
            styleSheet = './css/terminal.css'
        break;
        default:
            styleSheet = './css/light.css'
        break;
    }

    document.getElementById("siteStyle").setAttribute("href", styleSheet);
    changeIcons(theme);
}

function changeIcons(theme) {
    if (theme =='terminal') {
        document.getElementById("vb").setAttribute("src", "./images/TerminalTheme/icons8-vb-50.png");
        document.getElementById("c").setAttribute("src", "./images/TerminalTheme/icons8-c-50.png");
        document.getElementById("asp").setAttribute("src", "./images/TerminalTheme/icons8-asp-52.png");
        document.getElementById("sql").setAttribute("src", "./images/TerminalTheme/icons8-sql-50.png");
        document.getElementById("html").setAttribute("src", "./images/TerminalTheme/icons8-html-50.png");
        document.getElementById("css").setAttribute("src", "./images/TerminalTheme/icons8-css-50.png");
        document.getElementById("js").setAttribute("src", "./images/TerminalTheme/icons8-js-50.png");
        document.getElementById("ang").setAttribute("src", "./images/TerminalTheme/icons8-angular-50.png");
        document.getElementById("linkedIn").setAttribute("src", "./images/TerminalTheme/icons8-linked-in-50.png");
        document.getElementById("github").setAttribute("src", "./images/TerminalTheme/icons8-github-50.png");
    }
    else {
        document.getElementById("vb").setAttribute("src", "./images/icons8-vb-100.png");
        document.getElementById("c").setAttribute("src", "./images/icons8-c-100.png");
        document.getElementById("asp").setAttribute("src", "./images/icons8-asp-100.png");
        document.getElementById("sql").setAttribute("src", "./images/icons8-sql-96.png");
        document.getElementById("html").setAttribute("src", "./images/icons8-html-100.png");
        document.getElementById("css").setAttribute("src", "./images/icons8-css3-100.png");
        document.getElementById("js").setAttribute("src", "./images/icons8-javascript-100.png");
        document.getElementById("ang").setAttribute("src", "./images/icons8-angular-100.png");
        document.getElementById("linkedIn").setAttribute("src", "./images/icons8-linked-in-100.png");
        document.getElementById("github").setAttribute("src", "./images/icons8-github-100.png");
    }
}