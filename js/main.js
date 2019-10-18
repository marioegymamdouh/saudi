$(function () {
    $('.custom-file-input').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);
    });

    $('.select-beast').selectize({
        create: true,
        sortField: {
            field: 'text',
            direction: 'asc'
        },
        dropdownParent: 'body',
        render: {
            option_create: function(data, escape) {
                return '<div class="create pr-2">إضافة: <strong>' + escape(data.input) + '</strong></div>';
            }
        }
    });
});