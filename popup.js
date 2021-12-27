let loadedDivs = [];

window.onload = () => {
    checkLocation();
}

let checkLocation = () => {
    console.log('hi - (PhazeDev LIB), SingleClick (Running Main Loop)')
    let elements = document.getElementsByClassName('beatmap');

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.id = Math.floor(Math.random() * 1000000);

        checkDiv(element);
    }

    setTimeout(checkLocation, 1000)
}

let checkDiv = ( div ) => {
    if(document.getElementById(div.id).innerHTML === ""){
        setTimeout(() => {
            checkDiv(div);
        }, 100)
    } else{
        if(!loadedDivs.find(x => x.id === div.id)){
            let id = div.getElementsByClassName('links')[0].children[2].href.replace('beatsaver://', '');
            div.getElementsByClassName('links')[0].innerHTML += '<a href="https://bsapi.phazed.xyz/pcdwnld/'+id+'" target="_blank" rel="noopener" title="SingleClick Download" aria-label="SingleClick Download"><i class="fas fa-file-download" text-info" aria-hidden="true"></i></a>'
            loadedDivs.push(div)
        }
    };
}