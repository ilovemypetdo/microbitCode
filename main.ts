let MotorSpeed = 100
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # . .
        # . . . .
        # # # # #
        `)
    motion.driveStraight(MotorSpeed)
    basic.pause(2000)
    motion.stop()
})
