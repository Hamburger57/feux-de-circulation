function jaune () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function orange2 () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function orange () {
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
    vert()
    basic.pause(5000)
    jaune()
    basic.pause(2000)
    rouge()
    if (input.buttonIsPressed(Button.A)) {
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
        orange2()
        basic.showNumber(5)
        basic.pause(1000)
        basic.showNumber(4)
        basic.pause(1000)
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(1)
        basic.pause(1000)
        basic.showNumber(1)
        basic.clearScreen()
        orange()
    } else {
        basic.pause(5000)
    }
})
