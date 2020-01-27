function solve() {
    const infoSpaner = document.getElementsByClassName("info")[0];
    const departButton = document.getElementById("depart");
    const arriveButton = document.getElementById("arrive");

    let currentId = "depot";
    let currentName;
    
    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res => res.json())
            .then(departSuccess)
            .catch(err => {
                infoSpaner.textContent = `Error`;
            })
    }

    function arrive() {
        infoSpaner.textContent = `Arriving at ${currentName}`
        departButton.disabled = false;
        arriveButton.disabled = true;
    }


    function departSuccess(data){
        const {name, next} = data;

        currentId = next;
        currentName = name;

        departButton.disabled = true;
        arriveButton.disabled = false;
        infoSpaner.textContent = `Next stop ${currentName}`;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();