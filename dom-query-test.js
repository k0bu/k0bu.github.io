function highlightParas(containing){
    if(typeof containing === 'string') 
        containing = new RegExp(`${containing}`);
    const paras = document.getElementsByTagName('p');

    for(let p of paras){
        if(!containing.test(p.textContent)) continue;
        p.classList.add('highlight');
    }
}

function removeHighlights(){
    const paras = document.getElementsByTagName('p');

    for(let p of paras){
        p.classList.remove('highlight');
    }
}


const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of highlightActions){
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions){
    a.addEventListener('click', evt => {
        evt.preventDefault();
        removeHighlights();
    });
}


/*
function printDOM(node, prefix){
    console.log(prefix + node.nodeName);
    
    for(let i=0; i<node.childNodes.length; i++){
        printDOM(node.childNodes[i], prefix + '   ');
    }
}*/

printDOM(document, '');


$(document).ready(function(){
    $("#uniqueButton").click(function(){
        console.log("clicked button");
        //$('#uniqueButton')[0].firstChild['#text']= "Changed Button Name";
    });
});