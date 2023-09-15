jQuery(document).ready(function ($) {
    // Set the dayjs locale, datetimes are all in gmt/bst
    dayjs.locale('en')

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400 });

    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('navbar-fixed-top');
        }
        else {
            $('#header').removeClass('navbar-fixed-top');
        }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, { offset: -70, 'axis': 'y', easing: 'easeOutQuad' });
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
        }

    });

    /* ======= Upcoming/Previous events ======= */
    //We assume that events have already been sorted in a reverse chronological order, if headings are being inserted.
    $('.event-listing').each(function (index) {
        var eventListing = $(this);

        var displayUpcoming = true;
        var displayPrevious = true;
        var displayHeaders = false;
        var chronologicalUpcoming = true;

        if (eventListing.hasClass("event-upcoming-previous")) {
            displayUpcoming = true;
            displayPrevious = true;
        }
        else if (eventListing.hasClass("event-upcoming")) {
            displayUpcoming = true;
            displayPrevious = false;
        }

        if (eventListing.hasClass("event-insert-header")) {
            displayHeaders = true;
        }

        var currentTime = dayjs();
        var upcomingNotAdded = true;
        var prevNotAdded = true;

        //Events filtering
        eventListing.find(".event-item").each(function () {
            var eventItem = $(this);
            var eventDate = dayjs(eventItem.data("date"));

            if (eventDate.isSame(currentTime) || eventDate.isAfter(currentTime)) {
                if (displayUpcoming) {
                    eventItem.addClass("event-item-upcoming");
                } else {
                    eventItem.remove();
                }
            }

            if (eventDate.isBefore(currentTime)) {
                if (displayPrevious) {
                    eventItem.addClass("event-item-previous");
                } else {
                    eventItem.remove();
                }
            }
        });

        //Adding headers
        if (displayHeaders) {
            eventListing.find(".event-item").each(function () {
                var eventItem = $(this);
                var eventDate = dayjs(eventItem.data("date"));

                if (upcomingNotAdded && (eventDate.isSame(currentTime) || eventDate.isAfter(currentTime))) {
                    $('<h2 id="upcoming">Upcoming Events</h2>').insertBefore(eventItem);
                    upcomingNotAdded = false;

                }

                if (prevNotAdded && eventDate.isBefore(currentTime)) {
                    $('<h2 id="previous">Previous Events</h2><p>Includes slides and recordings.</p>').insertBefore(eventItem);
                    prevNotAdded = false;
                }
            });
        }

        // Make upcoming events in forward chronological order, rather than reverse chronological order.
        if (displayUpcoming && displayHeaders && chronologicalUpcoming) {
            // Get the location of the upcoming header as an anchor.
            var anchorElement = document.getElementById("upcoming");
            if (anchorElement) {
                // For each upcoming element, move it to after the heading. 
                // As elements are in reverse-chrono order, the order of execution results in forward chrono order.
                eventListing.find(".event-item-upcoming").each(function () {
                    var eventItem = $(this);
                    anchorElement.insertAdjacentElement('afterend', this);
                });
            }
        }

    });

    /* ======= Projects Tag Cloud ======= */
    $("a.tag-link").on("click", function (e) {
        var tag = $(this).attr("href").substring($(this).attr("href").indexOf('#') + 1);
        $("a.tag-link.selected").removeClass("selected");
        $("a.filter-link.selected").removeClass("selected");
        $(this).addClass("selected");
        $('.project.tag-' + tag).show();
        $('.project:not(.tag-' + tag + ')').hide();
    });
    $("a.filter-link").on("click", function (e) {
        $("a.tag-link.selected").removeClass("selected");
        $("a.filter-link.selected").removeClass("selected");
        $(this).addClass("selected");
        if (!$(this).attr("href")) {
            // Show all
            $('.project').show();
        } else {
            // Show active/completed
            var tag = $(this).attr("href").substring($(this).attr("href").indexOf('#') + 1);
            $('.project.' + tag).show();
            $('.project:not(.' + tag + ')').hide();
        }
    });

});
