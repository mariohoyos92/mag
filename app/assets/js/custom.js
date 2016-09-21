/**
 * Main JS file for Scriptor behaviours
 */

/*globals jQuery, document */
(function ($) {
  "use strict";

  $(document).ready(function(){

    $(".contact-link").on('click', function(event){
      event.preventDefault();
      $('body').toggleClass('sidebar-opened');
      $('.sidebar .sidebar-scrollable').scrollTo("#contact_name", 200);
      $("#contact_name").focus();
    });

    $(".subscribe-link").on('click', function(event){
      event.preventDefault();
      $('body').toggleClass('sidebar-opened');
      $("#subscribe_email").focus();
    });

    var removeMessages = function(domId) {
      $('#' + domId + ' .messages li').remove();
      $('#' + domId + ' .messages').hide();
    };

    var clearInputs = function(domId) {
      $('#' + domId + ' input').val('');
      $('#' + domId + ' textarea').val('');
    };

    var clearLoading = function(domId) {
      $('#' + domId + ' .messages li.loading').remove();
    };

    $("#contact_submit").on('click', function(event) {
      removeMessages('contact_form');

      var submission = JSON.stringify({
        contact_name: $('#contact_name').val(),
        contact_email: $('#contact_email').val(),
        contact_body: $('#contact_body').val()
      });

      $('#contact_form .messages').show().append('<li class="loading"><i class="fa fa-spinner fa-spin"></i></li>');


      var resetForm = function() {
        removeMessages('contact_form');
        clearInputs('contact_form');
      };

      var displaySuccess = function() {
        $('#contact_form .messages').append('<li class="success"><i class="fa fa-check-circle"></i>Your message has been sent.</li>').fadeIn('fast', function(){
            setTimeout(function() { debugger; resetForm() }, 3000);
          });
      };

      var displayError = function(error) {
        $('#contact_form .messages').show().append('<li class="error"><i class="fa fa-exclamation-circle"></i>' + error.message + '</li>');
      };

      $.ajax({
        type: 'POST',
        url: '/contact_form',
        contentType: 'application/json',
        dataType: 'json',
        data: submission
      }).done(function() {
        clearInputs('contact_form');
        displaySuccess();
      }).fail(function(xhr, status, error) {
        var err = JSON.parse(xhr.responseJSON);
        removeMessages('contact_form');
        displayError(err);
      }).always(function(xhr, status){
        clearLoading('contact_form')
      })
    });

    $("#newsletter_submit").on('click', function(event) {
      removeMessages('newsletter_form');

      var submission = JSON.stringify({
        email: $('#newsletter_email').val()
      });

      $('#newsletter_form .messages').show().append('<li class="loading"><i class="fa fa-spinner fa-spin"></i></li>');

      var resetForm = function() {
        removeMessages('newsletter_form');
        clearInputs('newsletter_form');
      };

      var displaySuccess = function() {
        $('#newsletter_form .messages').append('<li class="success"><i class="fa fa-check-circle"></i>Signup Success.</li>')
            .fadeIn('fast', function(){
            setTimeout(function() { resetForm() }, 3000);
          });
      };

      var displayError = function(error) {
        $('#newsletter_form .messages').show().append('<li class="error"><i class="fa fa-exclamation-circle"></i>' + error.message + '</li>');
      };

      $.ajax({
        type: 'POST',
        url: '/newsletter_form',
        contentType: 'application/json',
        dataType: 'json',
        data: submission
      }).done(function() {
        clearInputs('newsletter_form');
        displaySuccess();
      }).fail(function(xhr, status, error) {
        var err = JSON.parse(xhr.responseJSON);
        removeMessages('newsletter_form');
        displayError(err);
      }).always(function(xhr, status){
        clearLoading('newsletter_form')
      })
    });

    $("#contact_form input").keypress(function( event ) {
      if ( event.which == 13 ) {
         event.preventDefault();
         $("#contact_submit").trigger('click');
      }
    });

    $("#contact_form textarea").keypress(function( event ) {
      if ( event.which == 13 ) {
         event.preventDefault();
         $("#contact_submit").trigger('click');
      }
    });

    $("#newsletter_form input").keypress(function( event ) {
      if ( event.which == 13 ) {
         event.preventDefault();
         $("#newsletter_submit").trigger('click');
      }
    });

    // Responsive video embeds
    $('.post-content').fitVids();

    // Scroll to content
    $('.cover .scroll-down').on('click', function(e) {
      $('html, body').animate({'scrollTop': $('.cover').height()}, 800);
      e.preventDefault();
    });

    // Scroll to top
    $('.site-footer .top-link').on('click', function(e) {
      $('html, body').animate({'scrollTop': 0});
      e.preventDefault();
    });

    // Header adjustments
    adjustCover();
    $(window).bind('resize orientationchange', function() {
      adjustCover();
    });

    // Sidebar
    $('.sidebar-toggle, .overlay').on('click', function(e){
      $('body').toggleClass('sidebar-opened');
      e.preventDefault();
    });


  });

  function adjustCover() {
    if ( $('.cover .scroll-down').is(':hidden') )
      $('.post-header .cover-bg').css({ 'top' : 0 });
    else
      $('.post-header .cover-bg').css({ 'top' : $('.site-header').outerHeight() });   
  }

  function formatDate(postDate) {
    var months = Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
      date = new Date(postDate),
      dateString = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    return dateString;
  }

}(jQuery));