// main.js

console.log("Hello, World!");


const dinosaurs = [
  {name:"Utahraptor", type:"carnivore", img:"https://raw.githubusercontent.com/zsantos613-cloud/stories/main/assets/img/Icon_Utahraptor.png"},
  {name:"Lokiceratops", type:"herbivore"},
  {name:"Yutyrannus", type:"carnivore"},
  {name:"Allosaurus", type:"carnivore"},
  {name:"Amargasaurus", type:"herbivore"},
  {name:"Ankylosaurus", type:"herbivore"},
  {name:"Edmontosaurus", type:"herbivore"},
  {name:"Hypsilophodon", type:"herbivore"},
  {name:"Ceratosaurus", type:"carnivore"},
  {name:"Concavenator", type:"carnivore"},
  {name:"Deinocheirus", type:"omnivore"},
  {name:"Tarbosaurus", type:"carnivore"},
  {name:"Velociraptor", type:"carnivore"},
  {name:"Triceratops", type:"herbivore"},
  {name:"Thanatosdrakon", type:"carnivore"},
  {name:"Iguanodon", type:"herbivore"},
  {name:"Styxosaurus", type:"aquatic"},
  {name:"Dilophosaurus", type:"carnivore"},
  {name:"Miragaia", type:"herbivore"},
  {name:"Stygimoloch", type:"herbivore"},
  {name:"Carnotaurus", type:"carnivore"},
  {name:"Rhamphorhynchus", type:"piscivore"},
  {name:"Sarcosuchus", type:"carnivore"},
  {name:"Stegosaurus", type:"herbivore"},
  {name:"Spinosaurus", type:"piscivore"},
  {name:"Gallimimus", type:"omnivore"},
  {name:"Styracosaurus", type:"herbivore"},
  {name:"Irritator", type:"piscivore"},
  {name:"Caiuajara", type:"herbivore"},
  {name:"Carcharodontosaurus", type:"carnivore"},
  {name:"Tyrannosaurus", type:"carnivore", page:"01.html"},
  {name:"Mosasaurus", type:"aquatic", img:"https://raw.githubusercontent.com/zsantos613-cloud/stories/main/assets/img/Icon_Mosasaurus.webp"},
  {name:"Kentrosaurus", type:"herbivore", img:"https://raw.githubusercontent.com/zsantos613-cloud/stories/main/assets/img/Icon_Kentrosaurus.webp"},
  {name:"Ichthyosaurus", type:"aquatic", img:"https://raw.githubusercontent.com/zsantos613-cloud/stories/main/assets/img/Icon_Ichthyosaurus.webp"},
  {name:"Austroraptor", type:"piscivore", img:"https://raw.githubusercontent.com/zsantos613-cloud/stories/main/assets/img/Icon_Austroraptor.webp"},
];

const grid = document.getElementById("dino-grid");
let currentFilter = "all";

/* 🔄 Generate grid */
function displayDinosaurs(list) {
    grid.innerHTML = "";

    list.forEach(dino => {
        const col = document.createElement("div");
        col.className = "col-6 col-sm-4 col-md-3 col-lg-2";

    col.innerHTML = `
   <a href="${dino.name.toLowerCase()}.html" style="text-decoration:none; width:100%; height:100%;">
        <div class="dino-card">
            <img src="https://raw.githubusercontent.com/zsantos613-cloud/stories/main/assets/img/Icon_${dino.name}.webp" 
                 onerror="this.src='https://raw.githubusercontent.com/zsantos613-cloud/stories/main/assets/img/Icon_${dino.name}.png'">
            <div>${dino.name}</div>
        </div>
    </a>
    `;

        grid.appendChild(col);
    });
}

/* 🔍 Search */
document.getElementById("search").addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    const filtered = dinosaurs.filter(d =>
        d.name.toLowerCase().includes(value) &&
        (currentFilter === "all" || d.type === currentFilter)
    );

    displayDinosaurs(filtered);
});

/* 🎛 Filter */
function filterType(type) {
    currentFilter = type;

    const filtered = dinosaurs.filter(d =>
        type === "all" || d.type === type
    );

    displayDinosaurs(filtered);
}

/* 🚀 Initial load */
displayDinosaurs(dinosaurs);
