function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Eminem",
      title: "Without me",
      release_year: 2002,
      id: 2,
      formats: {
        1: "8T",
        2: "LP",
        3: "CD",
      },
      gold: false,
    },
  };

  return myMusic;
}

myFunction()[2];

module.exports = myFunction;
