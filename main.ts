let x = 0
led.plot(x, 0)
if (x < 4) {
    while (true) {
        basic.pause(1000)
        led.unplot(x, 0)
        basic.pause(1000)
        x += 1
        led.plot(x, 0)
    }
}
x = 4
led.plot(x, 0)
if (x == 4) {
    while (true) {
        basic.pause(100)
        led.unplot(x, 0)
        x += -1
        led.plot(x, 0)
    }
}
