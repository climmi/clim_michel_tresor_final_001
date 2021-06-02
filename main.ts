function Schritt_3 () {
    if (Level == 4 && progress == 3) {
        music.playTone(311, music.beat(BeatFraction.Half))
        Fortschritt()
    } else {
        Reset()
    }
}
function Fortschritt () {
    progress += 1
    Statusanzeige += 1
    led.plot(Level - 1, progress - 1)
    if (Statusanzeige == 10) {
        basic.pause(500)
        solution = 1
        Reset()
    }
}
function Hint_Level_1 () {
    basic.showString("A",75)
}
function Next_Level () {
    if (progress == LevelZiel) {
        Level += 1
        progress = 0
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
}
input.onButtonPressed(Button.A, function () {
    Schritt_1()
})
function Schritt_4 () {
    if (Level == 3 && progress == 2) {
        music.playTone(294, music.beat(BeatFraction.Half))
        Fortschritt()
    } else if (Level == 4 && progress == 2) {
        music.playTone(294, music.beat(BeatFraction.Half))
        Fortschritt()
    } else {
        Reset()
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    hidden_mode()
})
function Schritt_1 () {
    if (Level == 1) {
        music.playTone(262, music.beat(BeatFraction.Half))
        Fortschritt()
    } else if (Level == 2 && progress == 0) {
        music.playTone(262, music.beat(BeatFraction.Half))
        LevelZiel = 2
        Fortschritt()
    } else if (Level == 3 && progress == 0) {
        music.playTone(262, music.beat(BeatFraction.Half))
        LevelZiel = 3
        Fortschritt()
    } else if (Level == 4 && progress == 0) {
        music.playTone(262, music.beat(BeatFraction.Half))
        LevelZiel = 4
        Fortschritt()
    } else {
        Reset()
    }
}
input.onButtonPressed(Button.AB, function () {
    Schritt_2()
})
input.onButtonPressed(Button.B, function () {
    Schritt_4()
})
function Reset () {
    if (solution == 0 && Leben2 < 0) {
        music.playTone(131, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        progress = 0
        LevelZiel = 1
        Level = 1
        Statusanzeige = 0
        Leben2 = 2
        basic.clearScreen()
        basic.showString("AABBLOGO",75)
basic.clearScreen()
        Anzeige_Leben()
    } else if (solution == 0 && Leben2 >= 0) {
        music.playTone(156, music.beat(BeatFraction.Quarter))
        led.unplot(index, Leben2)
        Leben2 += -1
    } else {
        basic.clearScreen()
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("Geschafft! Jetzt geh raus und geniess die Sonne",75)
    }
}
function Schritt_2 () {
    if (Level == 2 && progress == 1) {
        music.playTone(277, music.beat(BeatFraction.Half))
        Fortschritt()
    } else if (Level == 3 && progress == 1) {
        music.playTone(277, music.beat(BeatFraction.Half))
        Fortschritt()
    } else if (Level == 4 && progress == 1) {
        music.playTone(277, music.beat(BeatFraction.Half))
        Fortschritt()
    } else {
        Reset()
    }
}
function hidden_mode () {
    if (Statusanzeige >= 0) {
        basic.pause(1000)
        basic.showString("AABBLOGO",75)
    } else {
        basic.clearScreen()
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Schritt_3()
})
function Anzeige_Leben () {
    for (let Spalte = 0; Spalte <= index; Spalte++) {
        for (let Leben = 0; Leben <= 2; Leben++) {
            led.plot(index, Leben)
        }
    }
}
let index = 0
let Leben2 = 0
let Statusanzeige = 0
let LevelZiel = 0
let progress = 0
let Level = 0
let solution = 0
let index_2 = 0
solution = 0
Level = 1
progress = 0
LevelZiel = 1
Statusanzeige = 0
Leben2 = 2
index = 4
music.setVolume(35)
basic.pause(500)
Hint_Level_1()
basic.pause(500)
basic.clearScreen()
Anzeige_Leben()
basic.forever(function () {
    Next_Level()
})
