$("document").ready(function() {
  var characters = [
    {
      strength: 50,
      name: "Master<br/>Yoda",
      img: "./assets/11.png",
      type: "good",
      hp: 600
    },
    {
      strength: 30,
      name: "Han<br/>Solo",
      img: "./assets/33.png",
      type: "good",
      hp: 400
    },
    {
      strength: 35,
      name: "Anakin<br/>Skywalker",
      img: "./assets/44.png",
      type: "good",
      hp: 300
    },
    {
      strength: 25,
      name: "Kylo<br/>Ren",
      img: "./assets/22.png",
      type: "evil",
      hp: 440
    },
    {
      strength: 50,
      name: "Darth<br/>Vader",
      img: "./assets/55.png",
      type: "evil",
      hp: 600
    },
    {
      strength: 40,
      name: "General<br/>Grievous",
      img: "./assets/66.png",
      type: "evil",
      hp: 220
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
    var life1 = characters[player1].hp; // var power level stored
    var strength1 = characters[player1].strength;
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
      class: `col-sx-4 p-2 m-auto player1div ${characters[player1].type}`
    });
    var $infodiv = $("<div>", {
      class: `col-sx-4 p-2 m-auto infodiv`
    });
    var $player2div = $("<div>", {
      class: `col-sx-4 p-2 m-auto player2div`
    });
    $(".battle").addClass(`row m-auto`); //-----row for battle

    $($player1div)
      .append($player1img)
      .append(`<div id="strength1">Strength : ${strength1}</div>`)
      .append(`<div id="life1">HP : ${life1}</div>`);

    $(".battle")
      .append($player1div)
      .append($infodiv)
      .append($player2div);
    $(".btn-c").addClass("next");
    $(".btn-c").off("click");
    $(".infodiv").append(
      `<h1 class="m-2 p-2">${
        characters[player1].name
      }</h1>v.s.<h1>???</h1><h4>Select figther :</h4>`
    );
    //-------------------------------------------------
    $(".btn-c").on("click", function() {
      $(".infodiv").empty();
      var player2 = $(this).val();
      var life2 = characters[player2].hp;
      var strength2 = characters[player2].strength;

      console.log(life1, life2);
      $(".infodiv").append(
        `<h1 class="m-2 p-2">${characters[player1].name}</h1>v.s.<h1>${
          characters[player2].name
        }</h1>`
      );
      console.log(`${player2}`);
      $("h3").remove();
      var $selected = $(`#${player2}`)
        .children(".image")
        .clone();
      $(`#${player2}`).remove();
      $(".player2div")
        .addClass(characters[player2].type)
        .append($selected)
        .append(`<div id="strength2">Strength : ${strength2}</div>`)
        .append(`<div id="life2">HP : ${life2}</div>`);

      var $button = $("<button>") //add attack button
        .addClass("atk-button")
        .append("$ attack #");

      $(".player1div").append($button);

      $(".btn-c").off("click");

      var tmp_strength1 = 0;
      var tmp_strength2 = characters[player2].strength;
      var tmp_life1 = life1;
      var tmp_life2 = life2;
      // attack funtion button -----------------------
      $(".atk-button").on("click", function() {
        // strength1
        // life1
        // life2
        function show(fstrength1, flife1, flife2) {
          $("#strength1")
            .empty()
            .append(`<div id="strength1">Strength : ${fstrength1}</div>`);
          $("#life1")
            .empty()
            .append(`<div id="life1">HP : ${flife1}</div>`);
          $("#life2")
            .empty()
            .append(`<div id="life2">HP : ${flife2}</div>`);
        }
        function next() {
          $(".player2div").append(`<p>select next contender</p>`);
          $(".btn-c").on("click", function() {
            var newplayer2 = $(this).val();

            var newlife2 = characters[newplayer2].hp;
            strength2 = characters[newplayer2].strength;
            $(".infodiv").empty();

            $(".infodiv").append(
              `<h1 class="m-2 p-2">${characters[player1].name}</h1>v.s.<h1>${
                characters[newplayer2].name
              }</h1>`
            );

            var $selected = $(`#${newplayer2}`)
              .children(".image")
              .clone();
            $(`.player2div`).empty();
            $(".player2div")
              .addClass(characters[newplayer2].type)
              .append($selected)
              .append(`<div id="strength2">Strength : ${strength2}</div>`)
              .append(`<div id="life2">HP : ${newlife2}</div>`);
            $(`#${newplayer2}`).remove();
            console.log("inside = " + characters[newplayer2].hp);
            $(".btn-c").off("click");
            return characters[newplayer2].hp;
          });
        }

        // var tmp_strength1 = 0;
        // var tmp_strength2 = characters[player2].strength;
        // var tmp_life1 = life1;
        // var tmp_life2 = life2;
        tmp_strength1 = tmp_strength1 + characters[player1].strength;
        console.log(tmp_life1 + " life2 = " + tmp_life2);
        tmp_life1 = tmp_life1 - tmp_strength2;
        tmp_life2 = tmp_life2 - tmp_strength1;

        if (tmp_life1 < 0) {
          //win player 2
          show(tmp_strength1 + tmp_strength1, 0, tmp_life2);
        } else if (tmp_life2 < 0) {
          //win player 1
          show(tmp_strength1 + tmp_strength1, tmp_life1, 0);

          tmp_life2 = async function() {
            //var new1 = next();
            return await next();
          };
          //tmp_life2 = life2;
          console.log(tmp_life1 + " if life2 = " + tmp_life2);
        } else {
          show(tmp_strength1 + tmp_strength1, tmp_life1, tmp_life2);
        }
      });

      //------------------------------------------------
    });
  });
});
