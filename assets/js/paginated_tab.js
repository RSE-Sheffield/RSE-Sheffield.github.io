/**
 * itemClass - The class of the rows to paginate (.paginated-item)
 * prevBtn - previous button
 * nextBtn - next button
 * pagetext - Text between the two button [Page X of Y]
 * itemsPerPage - Number of items per page
 */
function initPagination(itemClass, prevBtn, nextBtn, pagetext, itemsPerPage = 15) {
    const items = document.querySelectorAll(itemClass);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    let currentPage = 1;

    function showPage(page) {
        items.forEach((item, index) => {
            // Equivalent to Python's enumerate logic
            item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) 
                                 ? 'flex' : 'none';
        });

        document.getElementById(pagetext).innerText = `Page ${page} of ${totalPages}`;
        document.getElementById(prevBtn).disabled = (page === 1);
        document.getElementById(nextBtn).disabled = (page === totalPages || totalPages === 0);

        // Hide pagination controls entirely if only 1 page exists
        if (totalPages <= 1) {
            document.getElementById(prevBtn).parentElement.style.setProperty('display', 'none', 'important');
        }
    }

    document.getElementById(prevBtn).addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById(nextBtn).addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initial load
    showPage(currentPage);
}
