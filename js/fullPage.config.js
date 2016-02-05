$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        css3: true,
        navigation: true,
        navigationPosition: 'right',
        animateAnchor: true,
        
        // Sections
        anchors: ['Cumulus Web Design', 'Powerful', 'Amazing', 'Simple'],
        navigationTooltips: ['Cumulus Web Design', 'Powerful', 'Amazing', 'Simple'],
        menu : ['Cumulus', 'Powerful', 'Amazing', 'Simple'],
        
        // Afterload callbacks
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('#iphone3, #iphone2, #iphone4').addClass('active');
            }
        },
        
        // OnLeave callbacks
        onLeave: function(index, nextIndex, direction){
            if (index == 3 && direction == 'down'){
                $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
            }
            else if(index == 3 && direction == 'up'){
                $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
            }

            $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
            $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });
});
