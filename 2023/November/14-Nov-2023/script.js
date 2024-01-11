document.addEventListener('DOMContentLoaded', function () {
    // Get all accordion items
    var accordionItems = document.querySelectorAll('.Accordion-Item');

    // Add click event listeners to each accordion header
    accordionItems.forEach(function (item) {
        var header = item.querySelector('.Accordion-Header');

        header.addEventListener('click', function () {
            // Toggle the active class to show/hide the content
            item.classList.toggle('active');

            // Close other accordion items when one is opened
            accordionItems.forEach(function (otherItem) {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});
