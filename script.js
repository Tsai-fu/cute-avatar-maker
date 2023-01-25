'use strict'

$('.component-option').on('click', function () {
    $('.component-option').removeClass('.select-option');
    $(this).toggleClass('.select-option');
})

