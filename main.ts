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
    "L"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let L = 0
let y = 0
let x = 0
let logging = false
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"x",
"y",
"L"
)
loops.everyInterval(100, function () {
    if (logging) {
        x = input.acceleration(Dimension.X)
        y = input.acceleration(Dimension.Y)
        L = input.lightLevel()
        datalogger.log(
        datalogger.createCV("x", x),
        datalogger.createCV("y", y),
        datalogger.createCV("L", L)
        )
    }
})
