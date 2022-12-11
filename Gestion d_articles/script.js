var sellectedRow = null;


// Clear All Fields
function clearFields(){
    document.querySelector("#Nom").value = "";
    document.querySelector("#Marque").value = "";
    document.querySelector("#Prix").value = "";
    document.querySelector("#datePro").value = "";
    document.querySelectorAll("p").value = "";
    document.querySelector("#typ").value = "";
}

// function for Submit
let form = document.querySelector("#formPro")
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let del = document.querySelector("#ajouter")
    del.value = "ajouter"

    const Nom = document.querySelector("#Nom").value;
    const Marque = document.querySelector("#Marque").value;
    const Prix = document.querySelector("#Prix").value;
    const datePro = document.querySelector("#datePro").value;
    const typ = document.querySelector("#typ").value;
    const promotion = document.getElementsByName("promotion");
    let promo = document.querySelectorAll('input[name="promotion"]:checked')
    let proValue = [];
    promo.forEach((x) => {
        proValue.push(x.value);
    })    

    let resultNane = document.getElementById("resultNane");
    let resultMarque = document.getElementById("resultMarque");
    let resultPrix = document.getElementById("resultPrix");
    let resultdate = document.getElementById("resultdate");
    let resulttyp = document.getElementById("resulttyp");
    let regNam = /[a-z\s]{2,30}$/i;

    // valide name
    if (Nom == "" || regNam.test(Nom) === false) {
        let Nom = document.querySelector("#Nom");
        resultNane.innerText = "please chose your Name"
        resultNane.style.color = "red";
        Nom.style.borderColor = "red"
    } 

    // Valide Marque
    else if (Marque == "" || regNam.test(Marque) === false) {
        let Marque = document.querySelector("#Marque");
        resultMarque.innerText = "please chose your Marque"
        resultMarque.style.color = "red";
        Marque.style.borderColor = "red"
    } 

    // Valide Prix
    else if (Prix == "") {
        let Prix = document.querySelector("#Prix");
        resultPrix.innerText = "please chose production Prix "
        resultPrix.style.color = "red";
        Prix.style.borderColor = "red"
    } 

    // Valide la date
    else if (datePro == "" ) {
        let date = document.querySelector("#datePro");
        resultdate.innerText = "please chose production date"
        resultdate.style.color = "red";
        date.style.borderColor = "red"
    } 

    // Validation Type
    else if (typ === "") {
        let typ = document.querySelector("#typ");
        resulttyp.innerText = "please chose production date"
        resulttyp.style.color = "red";
        typ.style.borderColor = "red"
    } 
    
    // Validation promotion
    else if(promotion[0].checked === false &&  promotion[1].checked == false ){
        let resProm = document.getElementById("resProm");
        resProm.innerText = "please checked promotion"
        resProm.style.color = "red";
    }
    else{
    // Empty error messages
        let NomRes = document.querySelector("#Nom");
        let MarqueRes = document.querySelector("#Marque");
        let PrixRes = document.querySelector("#Prix");
        let dateProRes = document.querySelector("#datePro");
        let typRes = document.querySelector("#typ");
        let resProm = document.getElementById("resProm");
        resultNane.innerText = " ";
        NomRes.style.borderColor = "green"
        resultMarque.innerText = " ";
        MarqueRes.style.borderColor = "green"
        resultdate.innerText = " ";
        dateProRes.style.borderColor = "green"
        resultPrix.innerText = " ";
        PrixRes.style.borderColor = "green"
        resulttyp.innerText = " ";
        typRes.style.borderColor = "green"
        resProm.innerText = ""
    // Add tobody in table
        if (sellectedRow == null) {
        let marqToBdy = document.querySelector("#toBody");
        let rowTr = document.createElement("tr");
        // document.getElementById("ajouter").value = "ajouter";        
        rowTr.innerHTML = `
            <td>${Nom}</td>
            <td>${Marque}</td>
            <td>${Prix}</td>
            <td>${datePro}</td>
            <td>${typ}</td>
            <td>${proValue}</td>
            <td>
            <a href="#" class="btn-modifier">modifier</a>
        </td>
        <td>
            <a href="#" class="btn-supp">suppreme</a>
        </td>
        `;
        marqToBdy.appendChild(rowTr)
        sellectedRow = null;
        document.getElementById("ajouter").value = "ajouter";

        } else {
            sellectedRow.children[0].textContent = Nom;
            sellectedRow.children[1].textContent = Marque;
            sellectedRow.children[2].textContent = Prix;
            sellectedRow.children[3].textContent = datePro;
            sellectedRow.children[4].textContent = typ;
            sellectedRow.children[5].textContent = proValue;
            sellectedRow = null;
        }
        clearFields();
    }
});

// Edit 
document.querySelector("#toBody").addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains("btn-modifier")) {
        sellectedRow = target.parentElement.parentElement
        document.querySelector("#Nom").value = sellectedRow.children[0].textContent;
        document.querySelector("#Marque").value = sellectedRow.children[1].textContent;
        document.querySelector("#Prix").value = sellectedRow.children[2].textContent;
        document.querySelector("#datePro").value = sellectedRow.children[3].textContent;
        document.querySelector("#typ").value = sellectedRow.children[4].textContent;
        document.querySelector("#promotion").value = sellectedRow.children[4].textContent;
        document.getElementById("ajouter").value = "modifier";
        // document.getElementById("promotion").value = "modifier";

    }
});

// botton of delete
let tooBody = document.getElementById("toBody");
tooBody.addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("btn-supp")) {
        target.parentElement.parentElement.setAttribute("id","removethis");
        mod.style.display = "block";
    }
})

let mod = document.getElementById("mod")
function deleteRealData(){
    document.getElementById("removethis").remove()
            mod.style.display = "none";
}

function cancel(){
    document.getElementById('mod').style.display='none';
    document.getElementById('removethis').setAttribute('id','');
}
