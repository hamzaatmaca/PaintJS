const canvas = document.querySelector('#area');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.clearRect(0,0,canvas.width,canvas.height)
//Change Background color//
ctx.fillStyle = "black"
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle = 'greenyellow'

ctx.font="35px Arial";
ctx.fillStyle = "red";
ctx.fillText("Drawing With Vanilla JS",canvas.width / 2 - 200,100)

var draw = false;


canvas.addEventListener('mousedown',(e)=>{
	ctx.moveTo(e.pageX,e.pageY);
	draw=true;
})

canvas.addEventListener('mouseup',(e)=>{
	draw=false;
})


canvas.addEventListener("mousemove",(e)=>{
	if(draw){

		ctx.lineTo(e.pageX,e.pageY);
		ctx.stroke();

	}

})
