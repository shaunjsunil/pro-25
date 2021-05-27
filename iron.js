
class Iron {
    constructor(x,y,width,height) {
      var options = {
		  'density':30,
		  'friction': 3,
		  'restitution':0.8,
		  isStatic:false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
		push();
      var pos =this.body.position;
	  var angle = this.body.angle;
	 translate(pos.x, pos.y);
	  rotate(angle);
      rectMode(CENTER);
      fill("grey");
      rect(0, 0, this.width, this.height);
	  pop();
    }
  };