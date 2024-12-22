document.addEventListener("DOMContentLoaded", function () {
    fetch("/Frontend/html/admin/navigation.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched content into the placeholder
            document.getElementById("nav-placeholder").innerHTML = data;

            // Reinitialize event listeners for the sidebar after dynamic content load
            const menuBtn = document.getElementById('menu-btn');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('overlay');

            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('show');
            });

            overlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('show');
            });
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
        });
});
