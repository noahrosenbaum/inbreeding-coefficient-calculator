var Antigone = "Antigone";
var Oedipus = "Oedipus";
var Jocasta = "Jocasta";
var Laius = "Laius";
var Menoeceus = "Menoeceus";
var Labdacus = "Labdacus";
var Polydorus = "Polydorus";
var Nycteïs = "Nycteïs";
var Pentheus = "Pentheus";
var Cadmus = "Cadmus";
var Harmonia = "Harmonia";
var Nycteus = "Nycteus";
var Agave = "Agave";
var Agenor = "Agenor";
var Telephassa = "Telephassa";
var Ares = "Ares";
var Aphrodite = "Aphrodite";
var Poseidon = "Poseidon";
var Libya = "Libya";
var Nilus = "Nilus";
var Zeus = "Zeus";
var Hera = "Hera";
var Epaphus = "Epaphus";
var Memphis = "Memphis";
var Oceanus = "Oceanus";
var Tethys = "Tethys";
var Io = "Io";
var Inachus = "Inachus";
var Melia = "Melia";
var Cronus = "Cronus";
var Rhea = "Rhea";
var U1 = "U1";
var U2 = "U2";
var U3 = "U3";
var U4 = "U4";
var U5 = "U5";
var U6 = "U6";
var U7 = "U7";
var U8 = "U8";
var U9 = "U9";
var U10 = "U10";
var U11 = "U11";
var U12 = "U12";
var U13 = "U13";
var U14 = "U14";
var U15 = "U15";
var U16 = "U16";
var U17 = "U17";
var U18 = "U18";
var U19 = "U19";
var U20 = "U20";
var U21 = "U21";
var U22 = "U22";
var U23 = "U23";
var U24 = "U24";
var U25 = "U25";
var Polyxo = "Polyxo";
var Echion = "Echion";
var Cthonius = "Cthonius";
var Nephele = "Nephele";
var Uranus = "Uranus";
var Seafoam = "Seafoam";
var Gaia = "Gaia";
var Dione = "Dione";
var Aether = "Aether";
var Erebus = "Erebus";
var Nyx = "Nyx";
var Ananke = "Ananke";
var Euryganeia = "Euryganeia";
var Phoenix = "Phoenix";
var Perimede = "Perimede";
var Electra = "Electra";
var Hyrieus = "Hyrieus";
var Clonia = "Clonia";
var Belus = "Belus";
var Achiroe = "Achiroe";
var Hemera = "Hemera";
var Hyperphas = "Hyperphas";
var Damno = "Damno";
var Oeneus = "Oeneus";
var Althaea = "Althaea";
var Alcyone = "Alcyone";
var Chronos = "Chronos";
var Porthaon = "Porthaon";
var Euryte = "Euryte";
var Thestius = "Thestius";
var Eurythemis = "Eurythemis";
var Atlas = "Atlas";
var Pleione = "Pleione";
var Aethra = "Aethra";
var Epicaste = "Epicaste";
var Hippodamas = "Hippodamas";
var Demonice = "Demonice";
var Cleoboea = "Cleoboea";
var Iapetus = "Iapetus";
var Asia = "Asia";
var Clymene = "Clymene";
var Calydon = "Calydon";
var Aeolia = "Aeolia";
var Achelous = "Achelous";
var Pompholyge = "Pompholyge";
var Aetolus = "Aetolus";
var Pronoe = "Pronoe";
var Amythaon = "Amythaon";
var Endymion = "Endymion";
var Chromia = "Chromia";
var Phorbus = "Phorbus";
var Cretheus = "Cretheus";
var Tyro = "Tyro";
var Aethlius = "Aethlius";
var Calyce = "Calyce";
var Phoenissa = "Phoenissa";
var Itonus = "Itonus";
var Melanippe = "Melanippe";
var Aeolus = "Aeolus";
var Enarete = "Enarete";
var Laodice = "Laodice";
var Salmoneus = "Salmoneus";
var Alcidice = "Alcidice";
var Protogeneia = "Protogeneia";
var Alpheus = "Alpheus";
var Amphictyon = "Amphictyon";
var Cranaus = "Cranaus";
var Pedias = "Pedias";
var Orseis = "Orseis";
var Hellen = "Hellen";
var Deïmachus = "Deïmachus";
var Aloeus = "Aloeus";
var Iphis = "Iphis";
var Peneus = "Peneus";
var Aleus = "Aleus";
var Neaera = "Neaera";
var Cleobule = "Cleobule";
var Deucalion = "Deucalion";
var Pyrrha = "Pyrrha";
var Mynes = "Mynes";
var Pronoos = "Pronoos";
var Terah = "Terah";
var AbrahamsMother = "Abraham's Mother";
var SarahsMother = "Sarah's Mother";
var Sarah = "Sarah";
var Abraham = "Abraham";
var Nahor = "Nahor";
var Haran = "Haran";
var HaransWife = "Haran's Wife";
var Isaac = "Isaac";
var Milcah = "Milcah";
var Bethuel = "Bethuel";
var BethuelsWife = "Bethuel's Wife";
var Rebecca = "Rebecca";
var Laban = "Laban";
var LabansWife = "Laban's Wife";
var Jacob = "Jacob";
var Rachel = "Rachel";
var Joseph = "Joseph";

var inbreedingCalculator = {
  data: {
    Sarah: { father: Terah, mother: SarahsMother },
    Abraham: { father: Terah, mother: AbrahamsMother },
    Nahor: { father: Terah, mother: AbrahamsMother },
    Haran: { father: Terah, mother: AbrahamsMother },
    Isaac: { father: Abraham, mother: Sarah },
    Milcah: { father: Haran, mother: HaransWife },
    Bethuel: { father: Nahor, mother: Milcah },
    Rebecca: { father: Bethuel, mother: BethuelsWife },
    Laban: { father: Bethuel, mother: BethuelsWife },
    Jacob: { father: Isaac, mother: Rebecca },
    Rachel: { father: Laban, mother: LabansWife },
    Joseph: { father: Jacob, mother: Rachel },
    Oedipus: { father: Laius, mother: Jocasta },
    Jocasta: { father: Menoeceus, mother: U1 },
    Laius: { father: Labdacus, mother: U2 },
    Menoeceus: { father: Pentheus, mother: U3 },
    Labdacus: { father: Polydorus, mother: Nycteïs },
    Polydorus: { father: Cadmus, mother: Harmonia },
    Nycteïs: { father: Nycteus, mother: Polyxo },
    Pentheus: { father: Echion, mother: Agave },
    Harmonia: { father: Ares, mother: Aphrodite },
    Agave: { father: Cadmus, mother: Harmonia },
    Telephassa: { father: Nilus, mother: Nephele },
    Ares: { father: Zeus, mother: Hera },
    Poseidon: { father: Cronus, mother: Rhea },
    Libya: { father: Epaphus, mother: Memphis },
    Nilus: { father: Oceanus, mother: Tethys },
    Zeus: { father: Cronus, mother: Rhea },
    Hera: { father: Cronus, mother: Rhea },
    Epaphus: { father: Zeus, mother: Io },
    Memphis: { father: Nilus, mother: Nephele },
    Oceanus: { father: Uranus, mother: Gaia },
    Tethys: { father: Uranus, mother: Gaia },
    Io: { father: Inachus, mother: Melia },
    Melia: { father: Oceanus, mother: Tethys },
    Perimede: { father: Oeneus, mother: Althaea },
    Hyrieus: { father: Poseidon, mother: Alcyone },
    Achiroe: { father: Nilus, mother: U10 },
    Damno: { father: Belus, mother: U11 },
    Belus: { father: Poseidon, mother: Libya },
    Oeneus: { father: Porthaon, mother: Euryte },
    Althaea: { father: Thestius, mother: Eurythemis },
    Porthaon: { father: Agenor, mother: Epicaste },
    Euryte: { father: Hippodamas, mother: U12 },
    Eurythemis: { father: U13, mother: Cleoboea },
    Pleione: { father: Oceanus, mother: Tethys },
    Aethra: { father: Oceanus, mother: Tethys },
    Epicaste: { father: Calydon, mother: Aeolia },
    Hippodamas: { father: Achelous, mother: Perimede },
    Demonice: { father: Agenor, mother: Epicaste },
    Iapetus: { father: Uranus, mother: Gaia },
    Clymene: { father: Oceanus, mother: Tethys },
    Calydon: { father: Aetolus, mother: Pronoe },
    Aeolia: { father: Amythaon, mother: U14 },
    Aetolus: { father: Endymion, mother: Chromia },
    Pronoe: { father: Phorbus, mother: U15 },
    Amythaon: { father: Cretheus, mother: Tyro },
    Chromia: { father: Itonus, mother: Melanippe },
    Tyro: { father: Salmoneus, mother: Alcidice },
    Calyce: { father: Aeolus, mother: Enarete },
    Phoenissa: { father: Alpheus, mother: U16 },
    Itonus: { father: Amphictyon, mother: U17 },
    U17: { father: Cranaus, mother: Pedias },
    Enarete: { father: Deïmachus, mother: U18 },
    Laodice: { father: Aloeus, mother: U19 },
    Iphis: { father: Peneus, mother: U20 },
    Protogeneia: { father: Deucalion, mother: Pyrrha },
    Alpheus: { father: Oceanus, mother: Tethys },
    Pedias: { father: Mynes, mother: U23 },
    Orseis: { father: Oceanus, mother: Tethys }
  },

  original: true,

  inbreedingCoefficient: 0,

  namesAlreadySeen: {},

  arrayPairs: [],

  treeNodes: {},

  /* makeTree: function() {
    var tree = {};

    //add names to the data object
    Object.keys(this.data).forEach(key => {
      this.data[key].name = key;
    });

    return this.nodify(this.data['Antigone'])
  },

  nodify: function(node) {
    if (!node) return null;

    console.log("nodifying" + JSON.stringify(node));
    if (!this.treeNodes[node.name]) {
      this.treeNodes[node.name] = node;
    }

    if (this.treeNodes[node.father]) {
      node.dad = this.treeNodes[node.father];
    } else {
      console.log("nodify father " + node.father);
      node.dad = this.nodify(this.data[node.father]);
    }

    if (this.treeNodes[node.mother]) {
      node.mom = this.treeNodes[node.mother];
    } else {
      console.log("nodify mother " + node.mother);
      node.mom = this.nodify(this.data[node.mother]);
    }

    return node;
  },*/
  /*
  aphroditeParents: function(parents) {
    if (parents == 'Uranus/Seafoam') {
      this.data[Aphrodite] = {father: Uranus, mother: Seafoam}
    } else if (parents == 'Zeus/Dione') {
      this.data[Aphrodite] = {father: Zeus, mother: Dione}
    }
  },
  
  dioneParents: function(parents) {
    if (parents == 'Uranus/Gaia') {
      this.data[Dione] = {father: Uranus, mother: Gaia}
    } else if (parents == 'Aether/Gaia') {
      this.data[Dione] = {father: Aether, mother: Gaia}
    } else if (parents == 'Oceanus/Tethys') {
      this.data[Dione] = {father: Oceanus, mother: Tethys}
    }
  },
  
  aetherParents: function(parents) {
    if (parents == 'Erebus/Nyx') {
      this.data[Aether] = {father: Erebus, mother: Nyx}
    } else if (parents == 'Cronus/Ananke') {
      this.data[Aether] = {father: Chronos, mother: Ananke}
    }
  },
  
  antigoneParents: function(parents) {
    if (parents == 'Oedipus/Jocasta') {
      this.data[Antigone] = {father: Oedipus, mother: Jocasta}
    } else if (parents == 'Oedipus/Euryganeia') {
      this.data[Antigone] = {father: Oedipus, mother: Euryganeia}
    }
  },
  
  cadmusParents: function(parents) {
    if (parents == 'Agenor/Telephassa') {
      this.data[Cadmus] = {father: Agenor, mother: Telephassa}
    } else if (parents == 'Phoenix/Perimede') {
      this.data[Cadmus] = {father: Phoenix, mother: Perimede}
    }
  },
  
  nycteusParents: function(parents) {
    if (parents == 'Cthonius/U4') {
      this.data[Nycteus] = {father: Cthonius, mother: U4}
    } else if (parents == 'Hyrieus/Clonia') {
      this.data[Nycteus] = {father: Hyrieus, mother: Clonia}
    }
  },
  
  agenorParents: function(parents) {
    if (parents == 'Poseidon/Libya') {
      this.data[Agenor] = {father: Poseidon, mother: Libya}
    } else if (parents == 'Belus/Achiroe') {
      this.data[Agenor] = {father: Belus, mother: Achiroe}
    }
  },
  
  inachusParents: function(parents) {
    if (parents == 'Poseidon/Libya') {
      this.data[Inachus] = {father: Poseidon, mother: Libya}
    } else if (parents == 'U5/U6') {
      this.data[Inachus] = {father: U5, mother: U6}
    }
  },
  
  cronusParents: function(parents) {
    if (parents == 'Uranus/Gaia') {
      this.data[Cronus] = {father: Uranus, mother: Gaia}
      this.data[Rhea] = {father: Uranus, mother: Gaia}
    } else if (parents == 'Oceanus/Tethys') {
      this.data[Cronus] = {father: Oceanus, mother: Tethys}
      this.data[Rhea] = {father: Oceanus, mother: Tethys}
    }
  },
  
  uranusParents: function(parents) {
    if (parents == 'Gaia') {
      this.data[Oceanus] = {father: Gaia, mother: Gaia}
      this.data[Tethys] = {father: Gaia, mother: Gaia}
      if (document.getElementById('cronus').value == 'Uranus/Gaia') {
        this.data[Cronus] = {father: Gaia, mother: Gaia}
        this.data[Rhea] = {father: Gaia, mother: Gaia}
      }
      if (document.getElementById('aphrodite').value == 'Uranus/Seafoam') {
        this.data[Aphrodite] = {father: Gaia, mother: Seafoam}
      }
      if (document.getElementById('dione').value == 'Uranus/Gaia') {
        this.data[Dione] = {father: Gaia, mother: Gaia}
      }
    } else if (parents == 'Aether/Gaia') {
      this.data[Uranus] = {father: Aether, mother: Gaia}
    } else if (parents == 'Aether/Hemera') {
      this.data[Uranus] == {father: Aether, mother: Hemera}
    } else if (parents == 'Nyx') {
      this.data[Oceanus] = {father: Nyx, mother: Gaia}
      this.data[Tethys] = {father: Nyx, mother: Gaia}
      if (document.getElementById('cronus').value == 'Uranus/Gaia') {
        this.data[Cronus] = {father: Nyx, mother: Gaia}
        this.data[Rhea] = {father: Nyx, mother: Gaia}
      }
      if (document.getElementById('aphrodite').value == 'Uranus/Seafoam') {
        this.data[Aphrodite] = {father: Nyx, mother: Seafoam}
      }
      if (document.getElementById('dione').value == 'Uranus/Gaia') {
        this.data[Dione] = {father: Nyx, mother: Gaia}
      }
    }
  },
  
  euryganeiaParents: function(parents) {
    if (parents == 'Hyperphas') {
      this.data[Euryganeia] = {father: Hyperphas, mother: U7}
    } else if (parents == 'Menoeceus') {
      this.data[Euryganeia] = {father: Menoeceus, mother: U8}
    }
  },
  
  phoenixParents: function(parents) {
    if (parents == 'Agenor/Telephassa') {
      this.data[Phoenix] = {father: Agenor, mother: Telephassa}
    } else if (parents == 'Agenor/Damno') {
      this.data[Phoenix] = {father: Agenor, mother: Damno}
    } else if (parents == 'Belus') {
      this.data[Phoenix] = {father: Belus, mother: U9}
    }
  },

  hemeraParents: function(parents) {
    if (parents == 'Erebus/Nyx') {
      this.data[Hemera] = {father: Erebus, mother: Nyx}
    } else if (parents == 'Chronos/Nyx') {
      this.data[Hemera] = {father: Chronos, mother: Nyx}
    } else if (parents == 'N/A') {
      return
    }
  },
  
  gaiaParents: function(parents) {
    if (parents == 'N/A') {
      return
    } else if (parents == 'Aether/Hemera') {
      this.data[Gaia] = {father: Aether, mother: Hemera}
    }
  },
  
  alcyoneParents: function(parents) {
    if (parents == 'Atlas/Pleione') {
      this.data[Alcyone] = {father: Atlas, mother: Pleione}
    } else if (parents == 'Atlas/Aethra') {
      this.data[Alcyone] = {father: Atlas, mother: Aethra}
    }
  },
  
  thestiusParents: function(parents) {
    if (parents == 'Ares/Demonice') {
      this.data[Thestius] = {father: Ares, mother: Demonice}
    } else if (parents == 'Agenor/Epicaste') {
      this.data[Thestius] = {father: Agenor, mother: Epicaste}
    }
  },
  
  atlasParents: function(parents) {
    if (parents == 'Iapetus/Asia') {
      this.data[Atlas] = {father: Iapetus, mother: Asia}
    } else if (parents == 'Iapetus/Clymene') {
      this.data[Atlas] = {father: Iapetus, mother: Clymene}
    }
  },
  
  asiaParents: function(parents) {
    if (parents == 'Oceanus/Tethys') {
      this.data[Asia] = {father: Oceanus, mother: Tethys}
    } else if (parents == 'Oceanus/Pompholyge') {
      this.data[Asia] = {father: Oceanus, mother: Pompholyge}
    }
  },
  
  achelousParents: function(parents) {
    if (parents == 'Oceanus/Tethys') {
      this.data[Achelous] = {father: Oceanus, mother: Tethys}
    } else if (parents == 'Oceanus/Gaia') {
      this.data[Achelous] = {father: Oceanus, mother: Gaia}
    }
  },
  
  endymionParents: function(parents) {
    if (parents == 'Aethlius/Calyce') {
      this.data[Endymion] = {father: Aethlius, mother: Calyce}
    } else if (parents == 'Zeus/Phoenissa') {
      this.data[Endymion] = {father: Zeus, mother: Phoenissa}
    }
  },
  
  cretheusParents: function(parents) {
    if (parents == 'Aeolus/Enarete') {
      this.data[Cretheus] = {father: Aeolus, mother: Enarete}
    } else if (parents == 'Aeolus/Laodice') {
      this.data[Cretheus] = {father: Aeolus, mother: Laodice}
    }
  },
  
  aethliusParents: function(parents) {
    if (parents == 'Zeus/Protogeneia') {
      this.data[Aethlius] = {father: Zeus, mother: Protogeneia}
    } else if (parents == 'Aeolus/Enarete') {
      this.data[Aethlius] = {father: Aeolus, mother: Enarete}
    }
  },
  
  aeolusParents: function(parents) {
    if (parents == 'Hellen/Orseis') {
      this.data[Aeolus] = {father: Hellen, mother: Orseis}
    } else if (parents == 'Zeus/U21') {
      this.data[Aeolus] = {father: Zeus, mother: U21}
    }
  },
  
  salmoneusParents: function(parents) {
    if (parents == 'Aeolus/Enarete') {
      this.data[Salmoneus] = {father: Aeolus, mother: Enarete}
    } else if (parents == 'Aeolus/Iphis') {
      this.data[Salmoneus] = {father: Aeolus, mother: Iphis}
    }
  },
  
  alcidiceParents: function(parents) {
    if (parents == 'Aleus/Neaera') {
      this.data[Alcidice] = {father: Aleus, mother: Neaera}
    } else if (parents == 'Aleus/Cleobule') {
      this.data[Alcidice] = {father: Aleus, mother: Cleobule}
    }
  },
  
  amphictyonParents: function(parents) {
    if (parents == 'Deucalion/Pyrrha') {
      this.data[Amphictyon] = {father: Deucalion, mother: Pyrrha}
    } else if (parents == 'N/A') {
      return
    } else if (parents == 'Hellen/U22') {
      this.data[Amphictyon] = {father: Hellen, mother: U22}
    }
  },
  
  hellenParents: function(parents) {
    if (parents == 'Deucalion/Pyrrha') {
      this.data[Hellen] = {father: Deucalion, mother: Pyrrha}
    } else if (parents == 'Zeus/U24') {
      this.data[Hellen] = {father: Zeus, mother: U24}
    } else if (parents == 'Pronoos/U25') {
      this.data[Hellen] = {father: Pronoos, mother: U25}
    }
  }, */

  runAll: function() {
    for (const [key, value] of Object.entries(this.data)) {
      this.loopFinderOuter(key);
    }
  },

  loopFinderOuter: function(node) {
    this.loopFinderInner(node, []);
    document.getElementById("result").innerText +=
      "Inbreeding Coefficient (" +
      node +
      ")= " +
      this.inbreedingCoefficient +
      "\n";
    this.inbreedingCoefficient = 0;
    this.namesAlreadySeen = {};
    this.original = true;
    //this.coefficientCalculator(this.namesAlreadySeen)
  },

  loopFinderInner: function(node, path) {
    //console.log(this.data[node])
    //console.log(generation)
    //console.log(father)
    if (!this.original) {
      if (!this.namesAlreadySeen[node]) {
        this.namesAlreadySeen[node] = [];
      }
      this.namesAlreadySeen[node].push([...path]);
      this.namesAlreadySeen[node].forEach(path1 => {
        const filteredArray = path1.filter(value => path.includes(value));
        if (
          filteredArray.length == 0 &&
          (path.length > 0 || path1.length > 0)
        ) {
          inbreedingCalculator.inbreedingCoefficient +=
            1 / 2 ** (path.length + path1.length + 1);
        }
      });
      path.push(node);
    }
    this.original = false;
    if (this.data[node]) {
      var father = this.data[node].father;
      var mother = this.data[node].mother;
      if (father) {
        //console.log(this.namesAlreadySeen[father])
        /* if (this.namesAlreadySeen[father])
          {
            this.namesAlreadySeen[father].push(generation) 
          }
        else {
         // console.log(generation)
          this.namesAlreadySeen[father] = [generation]
        }
        //console.log(this.namesAlreadySeen)
        if (this.data[father]) { */
        this.loopFinderInner(father, [...path]);
        //}
      }
      if (mother) {
        /* if (this.namesAlreadySeen[mother])
          {
            this.namesAlreadySeen[mother].push(generation)
            //console.log(mother + " -> " + this.namesAlreadySeen[mother])
          }
        else {
          //console.log("else!")
          this.namesAlreadySeen[mother] = [generation]
        }
        //console.log(this.namesAlreadySeen)
        if (this.data[mother]) { */
        this.loopFinderInner(mother, [...path]);
        //}
      }
    }
  },

  inbreed: function(x, y) {
    this.inbreedingCoefficient += 1 / 2 ** (x + y + 1);
  },

  /* coefficientCalculator: function(object) {
    Object.keys(object).forEach(key => {
       //console.log(key)
       var array = object[key]
       //console.log(array)
       //console.log(array)
       while (array.length > 1) {
         var x = array.pop()
         array.forEach (y => { inbreedingCalculator.inbreed(x, y) })
       }
    })
    console.log(this.inbreedingCoefficient)
  }, */

  gen: function() {
    var content = "";
    Object.keys(this.data).forEach(n => {
      content += "\nvar " + n + " = '" + n + "'";
    });
    console.log(content);
    document.getElementById("code").innerText = content;
  }
};
