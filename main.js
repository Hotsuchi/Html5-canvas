let body = document.querySelector('body');
let ctol = document.querySelector('.ctol');
let cvs = document.querySelector('canvas');   
let ctx = cvs.getContext('2d');

ctx.fillStyle = 'green';
ctx.strokeStyle = 'white';

// RECT Canvas
let rect = ()=>{
    ctx.rect(10,10,200,200);
    ctx.stroke();  
}
// ARC Canvas
let arc = ()=>{
    ctx.arc(200,200,40,0,2*Math.PI);
    ctx.stroke();
}
// ELLIPSE Canvas
let ellipse = ()=>{
    ctx.ellipse(200,200,30,40,10,0,2*Math.PI);
    ctx.stroke();
}
// LINE Canvas
let line = ()=>{
    ctx.moveTo(10,10);
    ctx.lineTo(400,400);
    ctx.stroke();
}
// ARC TO Canvas
let bCurveT = ()=>{
    body.addEventListener('click',(e)=>{
        ctx.beginPath();
        ctx.moveTo(200,0);
        ctx.bezierCurveTo(e.x,e.y,200,200,200,0);
        ctx.stroke();
        ctx.fill();
    })
}

ctol.addEventListener('change',(e)=>{
        switch (e.target.value) {
            case 'rect':
                rect();
                break;
            
            case 'arc':
                arc();
                break;
        
            case 'ellipse':
                ellipse();
                break;
            
            case 'bCurveT':
                bCurveT();
                break;
            
            case 'line':
                line();
                break;
            
            default:
                alert('Select a Option');
        }
})
