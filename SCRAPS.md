tooltips (keyboard shortcuts)
>bootstrap: to create a tooltip, add the data-toggle="tooltip" attribute to an element.
Use the title attribute to specify the text that should be displayed inside the tooltip
initialized with jQuery: select the specified element and call the tooltip() method.
enable all tooltips in the document:

>    <script>
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    </script>

tag comments with fixme/optimize/todo (rake notes)

