$(function () {
    $(".rainbow-hover").hover(
        function () {
            // Lors du survol
            $('.sp').css({
                "background": "#2B3044",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
                "display": "block"
            });
        },
        function () {
            // Lorsque le survol est terminé
            $('.sp').css({
                "background": "linear-gradient(90deg, #866ee7, #ea60da, #ed8f57, #fbd41d, #2cca91)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
                "display": "block"
            });
        }
    );
});
