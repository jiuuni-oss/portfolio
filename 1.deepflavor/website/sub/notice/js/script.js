$(".select_btn").click(function () {
    $(".option").not($(this).next(".option")).slideUp();
    $(".select_btn").not($(this)).find("span").removeClass('turn');
    $(this).next(".option").slideToggle();
    $(this).find("span").toggleClass('turn');
});

const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        pageLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

$('.category li a').click(function(e) {
    $('.category li a').removeClass('on');
    $(this).addClass('on');
});

$('.category2 li a').click(function(e) {
    $('.category2 li a').removeClass('on2');
    $(this).addClass('on2');
});