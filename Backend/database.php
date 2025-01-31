<?php

// Create connection
$conn = new mysqli("localhost", "root", " ", "electricalworkshop");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
