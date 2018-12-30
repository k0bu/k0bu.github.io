$(document).ready(function(){
    'use strict';
    console.log('Loading main.js...');

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    

    let c;
    for (let x=25; x<400; x+=50){
        for(let y = 25; y<400; y+=50){
            c = Shape.Circle(x,y,20);
            c.fillColor = new Color (x/400, y/400, (x+y)/800);
        }
    }

    paper.setup(document.getElementById('subCanvas'));


    let tool = new Tool();
    tool.onMouseDown = function(event){
        let clickedPosition = event.point;
        let c = Shape.Circle(clickedPosition.x, clickedPosition.y, 80);       
        c.fillColor = new Color (
            clickedPosition.x/400, 
            clickedPosition.y/400, 
            (clickedPosition.x+clickedPosition.y)/800
        );

        let text = new PointText(clickedPosition);
        text.justification = 'center';
        text.fillColor = new Color(
            1 - clickedPosition.x/400, 
            1 - clickedPosition.y/400, 
            1 - (clickedPosition.x+clickedPosition.y)/800
        );
        text.fontSize = 20;
        text.content = 'Hello World!';

        
    };



    paper.view.draw();
});