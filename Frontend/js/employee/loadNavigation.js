
document.addEventListener("DOMContentLoaded", function () {
   
    fetch("/Frontend/html/employee/navigation.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched content into the placeholder
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
        });
});
