/**
 * Main JS file for Scriptor behaviours
 */

/*globals jQuery, document */
(function ($) {
  "use strict";

  $(document).ready(function(){

    $("#nav_contact").on('click', "a", function(event){
      event.preventDefault();
      $('body').toggleClass('sidebar-opened');
      $('.sidebar').scrollTo("#contact_name", 200);
      $("#contact_name").focus();
    });

    $(".subscribe-link").on('click', function(event){
      event.preventDefault();
      $('body').toggleClass('sidebar-opened');
      $("#subscribe_email").focus()
    });

    $("#contact_submit").on('click', function(event) {
      var submission = JSON.stringify({
        contact_name: $('#contact_name').val(),
        contact_email: $('#contact_email').val(),
        contact_body: $('#contact_body').val()
      });

      $.ajax({
        type: 'POST',
        url: '/contact_form',
        contentType: 'application/json',
        dataType: 'json',
        data: submission,
        success: function() {
          alert('success')
        },
        error: function() {
          alert('error')
        }
      });
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

    // Post reading time
    $('.post-template .post').readingTime();

    // Show comments
    // if ( typeof disqus_shortname !== 'undefined' ) {
    //   var disqus_loaded = false;
    //   $('.comments-title').on('click', function() {
    //     if ( ! disqus_loaded ) {
    //       $.ajax({
    //         type: "GET",
    //         url: "//" + disqus_shortname + ".disqus.com/embed.js",
    //         dataType: "script",
    //         cache: true
    //       });
    //       $(this).addClass('comments-loaded');
    //       disqus_loaded = true;
    //     } else {
    //       $('#disqus_thread').slideToggle();
    //       $(this).toggleClass('comments-loaded');
    //     }
    //   });
    // }

    // Display Instagram feed
    if ( typeof instagram_user_id !== 'undefined' && typeof instagram_access_token !== 'undefined' ) {
      if ( $('#instafeed').length ) {
        var userFeed = new Instafeed({
          get: 'user',
          userId: instagram_user_id,
          accessToken: instagram_access_token,
          limit: 6,
          resolution: 'low_resolution',
          template: '<div class="instagram-item"><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'
        });
        userFeed.run();
      }
    }

    // Display recent posts and tagcloud
    if ( $('.recent-posts').length || $('.tagcloud').length ) {
      parseRss();
    }

  });

  function adjustCover() {
    if ( $('.cover .scroll-down').is(':hidden') )
      $('.post-header .cover-bg').css({ 'top' : 0 });
    else
      $('.post-header .cover-bg').css({ 'top' : $('.site-header').outerHeight() });   
  }

  /* Inspired by Ghost Related plugin (https://github.com/danecando/jquery.ghostrelated) */
  // function parseRss(pageNum, prevId, feeds) {
  //   var page = pageNum || 1,
  //     prevId = prevId || '',
  //     feeds = feeds || [];
  //   $.ajax({
  //     url: '/rss/' + page + '/',
  //     type: 'GET',
  //     success: function(data){
  //       var curId = $(data).find('item > guid').text();
  //       if (curId != prevId) {
  //         feeds.push(data);
  //         parseRss(page+1, curId, feeds);
  //       } else {
  //         var posts = getPosts(feeds);
  //         displayRecentPosts(posts);
  //         displayTagCloud(posts);
  //       }
  //     },
  //     complete: function(xhr) {
  //       if (xhr.status == 404) {
  //         var posts = getPosts(feeds);
  //         displayRecentPosts(posts);
  //         displayTagCloud(posts);
  //       }
  //     }
  //   });
  // }

  // function getPosts(feeds) {
  //   var posts = [],
  //     items = [];
  //   feeds.forEach(function(feed) {
  //     items = $.merge(items, $(feed).find('item'));
  //   });
  //   for (var i = 0; i < items.length; i++) {
  //     var item = $(items[i]);
  //     posts.push({
  //       title: item.find('title').text(),
  //       url: item.find('link').text(),
  //       date: item.find('pubDate').text(),
  //       tags: $.map(item.find('category'), function(elem) {
  //         return $(elem).text();
  //       })
  //     });
  //   }
  //   return posts;
  // }

  // function displayRecentPosts(posts) {
  //   var count = 0,
  //     posts_count = typeof latest_posts_count !== 'undefined' ? latest_posts_count : 5;
  //   posts.forEach(function(post) {
  //     if ( count < posts_count ) {
  //       $('.recent-posts').append($('<div class="recent-item"><a href="' + post.url + '">' + post.title + '</a><span>' + formatDate(post.date) + '</span></div>'));
  //     }
  //     count++;
  //   });
  // }

  function formatDate(postDate) {
    var months = Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
      date = new Date(postDate),
      dateString = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    return dateString;
  }

  function displayTagCloud(posts) {
    var tagList = [],
      tagCloud = '';
    posts.forEach(function(post) {
      var tags = post.tags;
      tags.forEach(function(tag) {
        if ( $.inArray(tag, tagList) == -1 ) {
          tagList.push(tag);
        }
      });
    });
    for ( var i=0; i<tagList.length; i++ ) {
      var tag = tagList[i],
      tagLink = tag.replace(/\s+/g, '-').toLowerCase();
      tagCloud += ('<a href="/tag/' + tagLink + '" class="button dark">' + tag + '</a>');
    }
    $('.tagcloud').append(tagCloud);
  }

}(jQuery));