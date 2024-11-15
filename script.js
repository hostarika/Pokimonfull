import { pokemons } from './pokemons.js';
const qidiruvInput=document.getElementById("qidiruv")
const btn=document.getElementById("btn")
const noname= document.getElementById("noname")
const md= document.getElementById("md")
const select = document.getElementById("select-type");
const selectSort = document.getElementById("sort");

console.log(pokemons[0]);



// console.log(pokemons.sort((a,b)=> a.name.localeCompare(b.name)));




const box=document.getElementById("box")   

function pokimonView(data) {

    box.innerHTML="";

    data.forEach(e => {
        const div = document.createElement("div");
        div.classList.add("pokimon");
        div.innerHTML=`
        <h2>${e.name}</h2>
        <img src="${e.img}" alt="pokemon-1">
        <button class="btn2">${e.type}</button>
        <h2>Candy count: ${e.candy_count}</h2>
        <h3>${e.weight}</h3>
        <h3>${e.weaknesses}</h3>
        <h4 class="clock">${e.spawn_time}</h4>
        <h4 class="id">${e.num}</h4>
        `

        box.appendChild(div)
    });
    
}
pokimonView(pokemons)






qidiruvInput.addEventListener("input",()=>{

        

        let searchPk=pokemons.filter(e=>
             e.name.toLocaleLowerCase().includes(qidiruvInput.value.toLocaleLowerCase().trim()));
             pokimonView(searchPk)
    
})


select.addEventListener("change", () => {
    if (select.value == "All") {
        pokimonView(pokemons);
    } else {
        let searchPk = pokemons.filter(e => e.weaknesses.toString().includes(select.value));
        pokimonView(searchPk);
    }
});


selectSort.addEventListener("click", () => {
    if (selectSort.value == "A-Z") {
        let changedPokemons = pokemons.sort((pk1, pk2) => pk1.name.localeCompare(pk2.name));
        pokimonView(changedPokemons);
    } else {
        let changedPokemons = pokemons.sort((pk1, pk2) => pk2.name.localeCompare(pk1.name));
        pokimonView(changedPokemons);
    }
});
