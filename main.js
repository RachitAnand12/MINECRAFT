var canvas = new fabric.Canvas("myCanvas")

var blockWIDTH = 30

var blockHEIGHT = 30

var playerX = 50

var playerY = 50

var playerOBJECT = ""

var blockOBJECT = ""

function updatePLAYER () {
    fabric.Image.fromURL("player.png" , function (Img) {
        playerOBJECT = Img;
        playerOBJECT.scaleToWidth (150)
        playerOBJECT.scaleToHeight (150)
        playerOBJECT.set ({
            top:playerY,
            left:playerX
        })
        canvas.add(playerOBJECT)
    })
}

function updateBLOCK(block) {
    fabric.Image.fromURL(block , function (Img) {
        blockOBJECT = Img
        blockOBJECT.scaleToWidth (blockWIDTH)
        blockOBJECT.scaleToHeight (blockHEIGHT)
        blockOBJECT.set ({
            top: playerY , 
            left: playerX
        })
canvas.add(blockOBJECT)
    })
}

window.addEventListener("keydown" , kd )

function kd (e) {
    keyNumber = e.keyCode
    console.log(keyNumber)
    if (keyNumber == 37) {
    left()
}
if (keyNumber == 38) {
    up()
}
if (keyNumber == 39) {
    right()
}
if (keyNumber == 40) {
    down()
}
if (keyNumber == 67) {
    console.log("C is PRESSED")
    updateBLOCK("cloud.jpg")
}
if (keyNumber == 68) {
    console.log("D is Pressed")
    updateBLOCK("dark_green.png")
}
if (keyNumber == 71) {
    console.log("G is Pressed")
    updateBLOCK("ground.png")
}
if (keyNumber == 76) {
    console.log("l is Pressed")
    updateBLOCK("light_green.png")
}
if (keyNumber == 82) {
    console.log("r is pressed")
    updateBLOCK("roof.jpg")
}
if (keyNumber == 84) {
    console.log("t is pressed")
    updateBLOCK("trunk.jpg")
}
if (keyNumber == 85) {
    console.log("u is Pressed")
    updateBLOCK("unique.png")
}
if (keyNumber == 87) {
    console.log("w is Pressed")
    updateBLOCK("wall.jpg")
}
if (keyNumber == 89) {
    console.log("y is pressed")
    updateBLOCK("yellow_wall.png")
}
if (e.shiftKey == true && keyNumber == 80) {
    blockWIDTH = blockWIDTH + 10
    blockHEIGHT = blockHEIGHT + 10
    document.getElementById("width").innerHTML = blockWIDTH
    document.getElementById("height").innerHTML = blockHEIGHT
    console.log("P and SHIFT are pressed together")
}
if (e.shiftKey == true && keyNumber == 77) {
    blockHEIGHT = blockHEIGHT - 10
    blockWIDTH = blockWIDTH - 10
    document.getElementById("width").innerHTML = blockWIDTH
    document.getElementById("height").innerHTML = blockHEIGHT
    console.log("M and SHIFT are pressed together")
}
}

