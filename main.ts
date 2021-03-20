let fishLeftImg = img`
    . . . . . . . . c c c c c . . .
    . . . . . . c c 5 5 5 5 5 c . .
    . . . . . c 5 5 5 5 5 5 5 5 c .
    . . . . c b b b b b b 5 5 5 c .
    . . . . c 1 1 b b 1 b b c c . .
    . . . c 1 1 1 b b 1 1 1 c . . .
    . . . c 1 1 1 1 b 1 1 1 c . c c
    . . . c d 1 1 1 b 1 1 1 b b 5 c
    . . c c d 1 c 1 b 1 b 1 5 5 5 c
    . c c d d 1 1 1 1 1 b 1 b b 5 c
    f d d d 1 1 1 1 1 b b 1 f . c c
    f f f 1 1 1 1 1 1 b b b f . . .
    . . . f f 1 1 1 b b b 5 5 f . .
    . . . . . f f f 5 5 5 5 5 f . .
    . . . . . . . . f f f f f f . .
    . . . . . . . . . . . . . . . .
`
let fishRightImg = fishLeftImg.clone()
fishRightImg.flipX()


controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
fish.setImage(fishLeftImg)

})
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
fish.setImage(fishRightImg)

})

let fish = sprites.create(fishLeftImg, SpriteKind.Player)


fish.y = 110
scene.setBackgroundColor(9)
controller.moveSprite(fish, 100, 0)
fish.setStayInScreen(true)


function makeEnemy() {
let evilBurger = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
`, SpriteKind.Enemy)

evilBurger.setVelocity(40, 60)
evilBurger.setBounceOnWall(true)
evilBurger.setPosition(randint(0, 160), 0)
}

makeEnemy()