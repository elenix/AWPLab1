$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'xml/food_menu.xml',
        dataType: 'xml',
        success: function(xml) {
            $(xml).find('food').each(function() {
                $('#waffle').append(
                    '<table class="table">' +
                    '<tbody>'+
                    '<tr>'+
                        '<td><img src="' +
                                $(this).find('image').text() + '" width="200px"></td>'+
                        '<td><div><b>Name: </b>' +
                            $(this).find('name').text() + '</div> ' +
                        '<div><b>Description: </b>' +
                            $(this).find('description').text() + '</div> ' +
                        '<div><b>Price: </b>' +
                            $(this).find('price').text() + '</div> ' +
                        '<div><b>Calories: </b>' +
                            $(this).find('calories').text() + '</div></td> ' +
                    '<tr>'+
                    '</tbody>'+
                    '</table>');
            });
        }
    });
});