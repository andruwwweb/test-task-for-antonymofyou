$(document).ready (function () {
    //Открывание модалки по клику на кнопку
    $('#openModal').on('click', () => {
        $('#formWrapper').addClass('active');
    });
    //Закрывание модалки по клику на крестик
    $('#closeModal').on('click', () => {
        $('#formWrapper').removeClass('active');
    })
    //Закрывание модалки по клику вне дочернего элемента
    $(document).mouseup( (e) => {
        let parent = $('#formWrapper');
        let child = $('.pay-form');
        if (!child.is(e.target) && child.has(e.target).length === 0) {
            parent.removeClass('active');
        }
    })
    //Закрытие приветствия
    $('#closeGreeting').on('click', () => {
        $('#closeGreeting').addClass('disabled')
        $('#greetingUnderText').addClass('disabled')
    })
    });

