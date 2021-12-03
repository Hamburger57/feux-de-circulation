function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function orange_2 () {
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function orange () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.A))) {
        vert()
        basic.pause(5000)
        jaune()
        basic.pause(2000)
        rouge()
        basic.pause(5000)
    }
    rouge()
    blanc()
    basic.showLeds(`
        # . # # .
        # # . . #
        # # . . #
        # # . . #
        # . # # .
        `)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    orange()
    basic.showNumber(3)
    basic.pause(1000)
    orange_2()
    basic.showNumber(2)
    basic.pause(1000)
    orange()
    basic.showNumber(1)
    basic.pause(1000)
    orange_2()
    basic.showNumber(0)
    basic.clearScreen()
    orange()
})
