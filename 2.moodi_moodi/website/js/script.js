$(".open_mmenu").click(function(){
    $(".mmenu").css({
        'left': '50vw',
        'transition': 'left 0.3s'
    });
});
$(".close_mmenu").click(function(){
    $(".mmenu").css({
        'left': '100vw',
        'transition': 'left 0.3s'
    });
});

$(".m_gnb li a").click(function(){
    $(".mmenu").css({
        'left': '100vw',
        'transition': 'left 0.3s'
    });
});

