;
((d, c, w) => {
    var problema= $('#problema').offset().top
    w.addEventListener('scroll', () => {
        if (pageYOffset >= (problema + 80)) {
            function count_1(z) {
                var counter = {
                    var: 0
                };
                TweenMax.to(counter, 3, {
                    var: 45,
                    onUpdate: function () {
                        var number = Math.ceil(counter.var);
                        $('.cifra-1').html(number);
                        if (number === counter.var) {
                            count.kill();
                        }
                    },
                    onComplete: function () {
                        count_1();
                    },
                    ease: Circ.easeOut
                });
            }
            count_1();


            function count_2(z) {
                var counter = {
                    var: 0
                };
                TweenMax.to(counter, 3, {
                    var: 350,
                    onUpdate: function () {
                        var number = Math.ceil(counter.var);
                        $('.cifra-2').html(number);
                        if (number === counter.var) {
                            count.kill();
                        }
                    },
                    onComplete: function () {
                        count_2();
                    },
                    ease: Circ.easeOut
                });
            }
            count_2();


            function count_3(z) {
                var counter = {
                    var: 0
                };
                TweenMax.to(counter, 3, {
                    var: 1150,
                    onUpdate: function () {
                        var number = Math.ceil(counter.var);
                        $('.cifra-3').html(number);
                        if (number === counter.var) {
                            count.kill();
                        }
                    },
                    onComplete: function () {
                        count_3();
                    },
                    ease: Circ.easeOut
                });
            }
            count_3();

        }
    })
})(document, console.log, window)