// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    var m = $('#inputHeight').val();
    var n = $('#inputWidth').val();
   $("#pixelCanvas").empty();
    for (let x = 1; x <= m; x++) {
        var RowId = 'row' + x;
        $('#pixelCanvas').append('<tr id=' + RowId + '></tr>');

        for (let y = 1; y <= n; y++) {
            var cellId = 'cell' + x + '-' + y;
            $('#' + RowId).append('<td id=' + cellId + '></td>');
        }
    }
    $('td').click(function(){
        var color=$("#colorPicker").val();
        if($(this).attr("style")){
            $(this).removeAttr("style");
        }
        else{
        $(this).attr("style","background-color:"+color)}
        
        }
        );
}



