$("nav").load("nav.html", function() {
  $(".nav.navbar-nav a").each(function(idx, elem) {
    if (
      (window.location.pathname === "/pointcheck02.html" &&
        elem.pathname === "/pointcheck01.html") ||
      elem.pathname === window.location.pathname
    ) {
      $(".nav.navbar-nav li").removeClass("active");
      $(this)
        .parent()
        .addClass("active")
        .parents("li")
        .addClass("active");
    }
  });
});
$("footer").load("footer.html");
$(".fix_banners").load("fix-banner.html");
