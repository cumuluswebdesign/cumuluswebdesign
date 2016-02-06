
$(document).ready(function() {
    $('#fullpage').fullpage({

        verticalCentered: true,
        css3: true,
        navigation: true,
        navigationPosition: 'right',
        animateAnchor: true,
        fixedElements: ['sidePagination'],
        
        // Sections
        anchors: ['Cumulus Web Design', 'Powerful', 'Amazing', 'Simple'],
        navigationTooltips: ['Cumulus Web Design', 'Powerful', 'Amazing', 'Simple'],
        menu : ['Cumulus', 'Powerful', 'Amazing', 'Simple'],
        
        // Afterload callbacks

        afterLoad: function(anchorLink, index){
            afterLoad();
            var number = (index - 1);
            $('.sidePagination .number').text('0' + number);
            $('.sidePagination h2.section-name-title').text(anchorLink);

            sectionNameHeight = $('.sidePagination h2.section-name-title').width() + 40;
            sidePagination(sectionNameHeight);
        },
        
        // OnLeave callbacks
        onLeave: function(index, nextIndex, direction){
            onLeave();
        }

    });
});
