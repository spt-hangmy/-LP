$(document).ready(function () {
  $(".item-customer").click(function () {
    const toggleButton = $(this).find(".toggle-button");
    const showIcon = toggleButton.find(".show-icon");
    const hideIcon = toggleButton.find(".hide-icon");
    const answerSection = $(this).find(".wrap-answer");

    // Toggle hide/show class for other list items
    $(".wrap-answer").not(answerSection).hide();

    // Toggle hide/show class for clicked item
    answerSection.toggle();

    // Toggle show/hide icons
    showIcon.toggle(answerSection.is(":hidden"));
    hideIcon.toggle(answerSection.is(":visible"));

    // Toggle display style
    const newDisplayStyle = answerSection.is(":hidden") ? "none" : "flex";
    answerSection.css("display", newDisplayStyle);
  });
  $(".item-general").click(function () {
    const toggleButton = $(this).find(".toggle-button");
    const showIcon = toggleButton.find(".show-icon");
    const hideIcon = toggleButton.find(".hide-icon");
    const answerSection = $(this).find(".wrap-answer");

    // Toggle hide/show class for other list items
    $(".wrap-answer").not(answerSection).hide();

    // Toggle hide/show class for clicked item
    answerSection.toggle();

    // Toggle show/hide icons
    showIcon.toggle(answerSection.is(":hidden"));
    hideIcon.toggle(answerSection.is(":visible"));

    // Toggle display style
    const newDisplayStyle = answerSection.is(":hidden") ? "none" : "flex";
    answerSection.css("display", newDisplayStyle);
  });
  $(".menu-mobile").click(function () {
    $(".navigation").toggleClass("active");
    var openButton = document.querySelector(".open");
    var closeButton = document.querySelector(".close");
    if ($(".navigation").hasClass("active")) {
      openButton.style.display = "none";
      closeButton.style.display = "inline-block";
      $("body").css("overflow", "hidden");
      $(".wrap-h1-menu").css(
        "box-shadow",
        "0px 4px 4px 0px rgba(0, 0, 0, 0.02)"
      );
    } else {
      $("body").css("overflow", "auto");
      openButton.style.display = "inline-block";
      closeButton.style.display = "none";
      $(".wrap-h1-menu").css("box-shadow", "none");
    }
  });
});
