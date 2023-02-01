'use strict'

$('.component-option').on('click', function () {
    let $this = $(this);
    $this.siblings().removeClass('active');
    $this.addClass('active');

    let $avatar_component = $('#' + $this.data('id'));
    $avatar_component.siblings().removeClass('show');
    $avatar_component.addClass('show');
})