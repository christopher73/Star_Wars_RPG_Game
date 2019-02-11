$("document").ready(function() {
  var characters = [
    {
      name: "Master<br/>Yoda",
      img: "./assets/11.png",
      type: "good",
      hp: 250
    },
    { name: "Han<br/>Solo", img: "./assets/33.png", type: "good", hp: 250 },
    {
      name: "Anakin<br/>Skywalker",
      img: "./assets/44.png",
      type: "good",
      hp: 250
    },
    { name: "Kylo<br/>Ren", img: "./assets/22.png", type: "evil", hp: 250 },
    { name: "Darth<br/>Vader", img: "./assets/55.png", type: "evil", hp: 250 },
    {
      name: "General<br/>Grievous",
      img: "./assets/66.png",
      type: "evil",
      hp: 250
    }
  ];
  $(".directions").append(`<h4 class="style">Choose you Side :</h4>`);

  for (var i = 0; i < characters.length; i++) {
    var $img = $("<img>", {
      src: characters[i].img,
      alt: characters[i].name,
      class: `image`
    });
    var $div = $("<div>", {
      id: i,
      class: `col-sx-2 p-0 m-auto characters ${characters[i].type}` //divs classes inside .line1
    });
    $(".line1").append($div);
    $(`#${i}`) // add img to $div var
      .append($img)
      .append(
        `<br/><button class="btn-c m-0 p-0" value="${i}"><p class="m-0 p-3"> ${
          characters[i].name
        }</p> </button>`
      );
  }

  $(".btn-c").on("click", function() {
    var player1 = $(this).attr("value");
    var powerlevel1 = characters[player1].hp;
    $(`.directions`).remove();
    $(`.${characters[player1].type}`).remove();
    $(`.characters`).removeClass("col-sx-2 p-0 m-2");
    $(`.characters`).addClass("col-sx-4 p-2 m-auto enemy");

    var $player1img = $("<img>", {
      //----declare img for player 1
      src: characters[player1].img,
      alt: characters[player1].name,
      class: `player1 ${characters[player1].type}`
    });
    //----declare div for player 1 && player 2 and info div
    var $player1div = $("<div>", {
      class: `col-sx-4 p-2 m-auto player1div`
    });
    var $infodiv = $("<div>", {
      class: `col-sx-4 p-2 m-auto infodiv`
    });
    var $player2div = $("<div>", {
      class: `col-sx-4 p-2 m-auto player2div`
    });
    $(".battle").addClass(`row m-auto`); //-----row for battle

    $($player1div).append($player1img);

    $(".battle")
      .append($player1div)
      .append($infodiv)
      .append($player2div);
    $(".btn-c").addClass("next");
    $(".btn-c").off("click");
    $(".infodiv").append(
      `<h1 class="m-2 p-2">${
        characters[player1].name
      }</h1>v.s.<h1>???<h1/> <h4>Select figther :</h4>`
    );
    //-------------------------------------------------
    $(".btn-c").on("click", function() {
      $(".infodiv").empty();
      var player2 = $(this).val();
      var powerlevel2 = characters[player2].hp;
      console.log(powerlevel1, powerlevel2);
      $(".infodiv").append(
        `<h1 class="m-2 p-2">${characters[player1].name}<h1/>v.s.<h1>${
          characters[player2].name
        }</h1>`
      );
      var $button = $(`<button class=atk-button>Attack</button>`);
      console.log(`${player2}`);
      $("h3").remove();
      var $selected = $(`#${player2}`)
        .children(".image")
        .clone();
      $(`#${player2}`).remove();
      $(".player2div").append($selected);
      $(".infodiv").append($button);
    });
  });

  //------------------------------------------------
});
