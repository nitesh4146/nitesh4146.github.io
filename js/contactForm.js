(function() {

    // FORM / CONTACT

    var $contactForm = $('#contactForm');
    // VALIDATE FORM
    $contactForm.validate();
    $contactForm.submit(function(e) {
      if ($(this).valid())
      {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/myemail@mail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactForm.append('<div class="message message--loading">Sending message…</div>');
            },
            success: function(data) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="message message--success">Message sent!</div>');
            },
            error: function(err) {
                $contactForm.find('.alert--loading').hide();
                $contactForm.append('<div class="message message--error">Ops, there was an error.</div>');
            }
        });
      });
        return false;
    });
})();
