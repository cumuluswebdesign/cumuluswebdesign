
var sections = ['Cumulus Web Design', "Agence", 'Amazing', 'Simple'];

$(document).ready(function() {
    $('#fullpage').fullpage({

        verticalCentered: true,
        css3: true,
        navigation: true,
        navigationPosition: 'right',
        animateAnchor: true,
        fixedElements: ['.sidePagination', '.header'],
        
        // Sections
        anchors: sections,
        navigationTooltips: sections,
        menu : sections,
        
        // Afterload callbacks

        afterLoad: function(anchorLink, index){
            if(index == 1)
            {
                $('.main-title').css('width', '760px');
                $('.sidePagination').hide();
            }
            else
                $('.sidePagination').show();
            afterLoad();
            var number = (index - 1);
            $('.sidePagination .number').text('0' + number);
            $('.sidePagination h2.section-name-title').text(anchorLink);

            sectionNameHeight = $('.sidePagination h2.section-name-title').width() + 40;
            sidePagination(sectionNameHeight);
        },
        
        // OnLeave callbacks
        onLeave: function(index, nextIndex, direction)
        {
            onLeave();
        }
    });
});
