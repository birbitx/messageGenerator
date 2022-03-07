

$("#click-me").click(function () {
    let message = Math.floor(Math.random()* 7) 

    switch(message){
    case [1]: 
    console.log( "“Just one small positive thought in the morning can change your whole day.” — Dalai Lama")
    $("#message").html( "“Just one small positive thought in the morning can change your whole day.” — Dalai Lama")
    break
    case 2: 
    console.log("“Opportunities don't happen, you create them.” — Chris Grosser")
    $("#message").html("“Opportunities don't happen, you create them.” — Chris Grosser")
    break
    case 3: 
    console.log("“Love your family, work super hard, live your passion.” — Gary Vaynerchuk")
    $("#message").html("“Love your family, work super hard, live your passion.” — Gary Vaynerchuk")
    break
    case 4: 
    console.log("“It is never too late to be what you might have been.” — George Eliot")
    $("#message").html("“It is never too late to be what you might have been.” — George Eliot")
    break
    case 5: 
    console.log("“Don't let someone else's opinion of you become your reality” — Les Brown")
    $("#message").html("“Don't let someone else's opinion of you become your reality” — Les Brown")
    break
    case 6: 
    console.log("“If you’re not positive energy, you’re negative energy.” Mark Cuban")
    $("#message").html("“If you’re not positive energy, you’re negative energy.” Mark Cuban")
    break
    case 0: 
    console.log("“I am not a product of my circumstances. I am a product of my decisions.” — Stephen R. Covey")
    $("#message").html("“I am not a product of my circumstances. I am a product of my decisions.” — Stephen R. Covey")
    
    }
})


