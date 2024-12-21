
document.addEventListener("DOMContentLoaded", function () {
   
    fetch("../html/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched content into the placeholder
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
        });
});
