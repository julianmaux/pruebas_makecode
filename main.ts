datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    logging = false
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "x",
    "y",
    "T"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let T = 0
let y = 0
let x = 0
let logging = false
radio.setGroup(9)
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"x",
"y",
"T"
)
loops.everyInterval(100, function () {
    if (logging) {
        x = input.acceleration(Dimension.X)
        y = input.acceleration(Dimension.Y)
        T = input.temperature()
        datalogger.log(
        datalogger.createCV("x", x),
        datalogger.createCV("y", y),
        datalogger.createCV("T", T)
        )
        radio.sendValue("x", x)
        radio.sendValue("y", y)
        radio.sendValue("T", T)
    }
})
