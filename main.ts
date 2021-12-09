radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() > 200) {
        radio.sendNumber(7)
    } else {
        radio.sendNumber(6)
    }
})
