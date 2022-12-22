if (isThemeLight()) {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
} else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
}

$(function () {
    updateColorMode();

    $(".theme-selector").click(function () {
        if ($("body").hasClass("dark-theme")) {
            $("body").removeClass("dark-theme");
            $("body").addClass("light-theme");
            localStorage.setItem("feather-theme", "light");
        } else {
            $("body").removeClass("light-theme");
            $("body").addClass("dark-theme");
            localStorage.setItem("feather-theme", "dark");
        }
        updateColorMode();
    });
});

function updateColorMode() {
    if ($("body").hasClass("dark-theme")) {
        $(".theme-selector").html('<i class="fas fa-moon" aria-hidden="true"></i>');
        $(".main-sidebar img").attr('src', 'https://i.imgur.com/9ZfHrCw.png');
        $(".mid-logo a img").attr('src', 'https://i.imgur.com/9ZfHrCw.png');
        $(".wolf-logo a img").attr('src', 'https://i.imgur.com/C6FH134.png');
    } else {
        $(".theme-selector").html('<i class="fas fa-sun" aria-hidden="true"></i>');
        $(".main-sidebar img").attr('src', 'https://i.imgur.com/foGiwRj.png');
        $(".mid-logo a img").attr('src', 'https://i.imgur.com/foGiwRj.png');
        $(".wolf-logo a img").attr('src', 'https://i.imgur.com/iOUq7P9.png');
    }
}

function isThemeLight() {
    return localStorage.getItem("feather-theme") === "light";
}

$("#navbar-toggler-btn").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$("body").removeClass("body-fixed");
	} else {
		$(this).addClass("active");
		$("body").addClass("body-fixed");
	}
});