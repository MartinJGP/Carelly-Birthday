$(document).ready(function () {
    $(".container")
        .mouseenter(function () {
            $(".card").stop().animate(
                {
                    top: "-350px",
                    height: "400px",

                },
                "slow"
            );
            $(".card").cssRules().animate( {
            }, "slow");
        })
        .mouseleave(function () {
            $(".card").stop().animate(
                {
                    top: 0,
                    height: "140px",
                },
                "slow"

            );
        });
});
