

$(document).ready(function() {
    $(document ).on( "click", ".cyd-dialog", function() {

        var message=$(document).find('#cyd-editForm').first().html();

        confirmMessage(message, 'Gerät bearbeiten', '', ['Speichern','Abbrechen'],

            function() {
                console.log('callback dialog')
            }
        );

    });

}); // document ready function
