function deleteItem() {
  $(document).on("click", ".item__delete", function () {
    $(this).closest("li").remove();
  });
}

function complete() {
  $(document).on("click", "input[type=checkbox]", function () {
    $(this).closest("li").toggleClass("done");
  });
}

$(".new").click(function () {
  var str = $(".content").val();
  $("ul").append(
    "<li class='item'><label class='item__checkbox'><input type='checkbox'><i class='fas fa-check'></i></label>" +
      str +
      "<button class='item__delete'><i class='fas fa-trash-alt'></i></button></li>"
  );

  var priority = $("input:checked").val();

  if (priority !== 0) {
    var a = $("ul li:last-child").find("label");
    $(a).addClass("item__checkbox--" + priority);
  }

  $(".content").val("");
});

complete();
deleteItem();

$(".nav__item").click(function () {
  $(".nav__item").removeClass("active");
  $(this).addClass("active");
});

$(".all").click(function () {
  $(".item").show();
});

$(".now").click(function () {
  $(".item").show();
  $(".done").hide();
});

$(".complete").click(function () {
  $(".item").show();
  $(".item:not(.done)").hide();
});
