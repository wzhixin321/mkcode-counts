input.onButtonPressed(Button.A, function () {
    步数 = 0
    if (步数 == 0) {
        music.stopAllSounds()
    } else {
        if (步数 % 10 == 0) {
            music.playMelody("F G A B B A G F ", 120)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    步数 += 1
})
let 步数 = 0
步数 = 0
basic.forever(function () {
    basic.showNumber(步数)
})
