
let i = 0;

$(document).ready(function() {
    $("#title").click(function() {
        console.log("clicked");
        if (i == 0) {
            $("body").css({"font-family": "neue-haas-grotesk-display, sans-serif"})
            i++
        } else if (i == 1) {
            $("body").css({"font-family": "source-code-pro, monospace"})
            i++
        } else if (i == 2) {
            $("body").css({"font-family": "forma-djr-display, sans-serif"})
            i++
        } else if (i == 3) {
            $("body").css({"font-family": "helvetica, sans-serif"})
            i++
        } else if (i == 4) {
            $("body").css({"font-family": "times-new-roman"})
            i = 0
        }
    });
});