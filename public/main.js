$(document).ready(function() {
  let buttons = $("button");

  $.each(buttons, function(i, val) {
    $(val).addClass("special");
  });

  $("#change-theme-blue").on("click", function(ev) {
    $("#content").css("background-color", "blue");
  });

  $("#change-theme-red").on("click", function(ev) {
    $("#content").css("background-color", "red");
  });

  $("#import-people").on("click", function(ev) {
    let peopleList = $("#people-list");
    $.ajax({
      url: "http://localhost:5000/users"
    }).done(function(data) {
      data.forEach(el => {
        let li = $(
          `<li>
            <p>${el.first_name} ${el.last_name}</p>
          </li>`
				);
				$(li).addClass('person-li');
				peopleList.append(li);
      });
    });
  });
});
