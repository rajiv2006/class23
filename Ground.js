class Ground
{
    constructor(x,y,widthrect,heightrect)
    {
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,widthrect,heightrect,options);
        this.width=widthrect;
        this.height=heightrect;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        rectMode(CENTER);
       fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }

}