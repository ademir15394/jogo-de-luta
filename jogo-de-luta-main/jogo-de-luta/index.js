const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0,0,canvas.width,canvas.height)

class Sprite {
    constructor(position){
        this.position = position
    }
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50,150)

    }

    draw2(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, 50,150)

    }
}

const player = new Sprite({
    x: 0,
    y:0
})

player.draw()

const enemy = new Sprite({
    x:974,
    y:0
})

enemy.draw2()

console.log(enemy)

console.log(player)