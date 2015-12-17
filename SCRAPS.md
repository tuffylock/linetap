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

custom index on user in migration only, need schema persistence? look into "structure.sql" TODO

[delayed fading placeholder text](https://css-tricks.com/hang-on-placeholders/)
[placeholder slides right](http://css-plus.com/2011/09/make-the-input-placeholder-user-friendly/)

[validate input as it's entered](http://newforms.readthedocs.org/en/latest/react_client.html#interactive-form-validation)


