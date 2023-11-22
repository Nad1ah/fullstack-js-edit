$(document).ready(function () {
  $("#botao").on("click", function () {
    $("#meu").text("Adeus");
  });

  $("#btn2").on("click", function () {
    $("ol").append("<li>Appended item</li>");
  });

  $("ol").on("click", "li", function () {
    $(this).remove();
  });
});
