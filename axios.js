// The code snippet fetches a random cat fact from an API and displays it on a webpage when a button is clicked. If there is an error in fetching the fact, it logs an error message and displays "No fact found" on the webpage.


let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFact();
    let p = document.querySelector("#results");
    p.innerHTML = fact;
})



let url = "https://catfact.ninja/fact";

async function getFact() {

    try {
        let res = await axios.get(url);
        return res.data.fact;
    }

    catch (e) {
        console.log("Error -", e);
        return "No fact found"
    }
}

