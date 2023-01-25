$('.select-option').on('click', function () {
    $('.select-option').removeClass('option-active');
    $(this).toggleClass('option-active');
})