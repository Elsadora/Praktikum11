$(document).ready(function () {
  var page = 0;
  $("#load-film")
    .click(function () {
      $.get("film.php?page=" + page, function (respon) {
        $.each(respon, function (key, value) {
          $("#film").append(
            '<div class="col d-flex justify-content-center mb-4"><div class="card shadow zoom"> <img src="https://0.soompi.io/wp-content/uploads/2022/01/25002414/twenty-five-twenty-one.jpeg" class="card-img-top" alt="' +
              value.title +
              '"> <div class="card-body"><h5 class="card-title text-uppercase">' +
              value.title +
              '</h5><div class="d-flex justify-content-between"><p class="card-text">Rating: ' +
              value.rating +
              '</p><div><ul><li class="nav-item mx-2 d-inline"><a href="#"><i class="bi bi-pencil-square edit"></i></a></li><li class="nav-item d-inline"><a href="#"><i class="bi bi-trash hapus text-danger"></i></a></li></ul></div></div></div></div></div>'
          );
        });
        page += 12;
      });
      $("form").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $.post("film.php?action=create", data, function (response) {})
          .done(function () {
            alert("Data film berhasil ditambahkan");
            location.href = "index.html";
          })
          .fail(function () {
            alert("error");
          });
      });
    })
    .trigger("click");
});
