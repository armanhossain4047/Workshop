<?php
 
// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $gender = $_POST['gender'];
    $date_of_birth = $_POST['date_of_birth'];
    $nationality = $_POST['nationality'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $job_title = $_POST['job_title'];
    $department = $_POST['department'];
    $hire_date = $_POST['hire_date'];
    $salary = $_POST['salary'];
    $passport_number = $_POST['passport_number'];
    $visa_status = $_POST['visa_status'];
    $emergency_contact_name = $_POST['emergency_contact_name'];
    $emergency_contact_phone = $_POST['emergency_contact_phone'];
    $created_at = date('Y-m-d H:i:s');
    $updated_at = date('Y-m-d H:i:s');
    $password_hash = password_hash("default_password", PASSWORD_BCRYPT);  
    // Handle file upload
    $image_path = null;
    if (!empty($_FILES['profile_image']['name'])) {
        $upload_dir = 'uploads/';
        $image_name = time() . '_' . basename($_FILES['profile_image']['name']);
        $image_path = $upload_dir . $image_name;

        if (!move_uploaded_file($_FILES['profile_image']['tmp_name'], $image_path)) {
            die("Error uploading file.");
        }
        
    }

    // Insert into database
    $sql = "INSERT INTO employees_info (
        first_name, last_name, gender, date_of_birth, nationality, phone_number, email, address, 
        job_title, department, hire_date, salary, passport_number, visa_status, emergency_contact_name, 
        emergency_contact_phone, created_at, updated_at, image_path, password_hash
    ) VALUES (
        :first_name, :last_name, :gender, :date_of_birth, :nationality, :phone_number, :email, :address, 
        :job_title, :department, :hire_date, :salary, :passport_number, :visa_status, :emergency_contact_name, 
        :emergency_contact_phone, :created_at, :updated_at, :image_path, :password_hash
    )";

    $stmt = $pdo->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':first_name', $first_name);
    $stmt->bindParam(':last_name', $last_name);
    $stmt->bindParam(':gender', $gender);
    $stmt->bindParam(':date_of_birth', $date_of_birth);
    $stmt->bindParam(':nationality', $nationality);
    $stmt->bindParam(':phone_number', $phone_number);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':address', $address);
    $stmt->bindParam(':job_title', $job_title);
    $stmt->bindParam(':department', $department);
    $stmt->bindParam(':hire_date', $hire_date);
    $stmt->bindParam(':salary', $salary);
    $stmt->bindParam(':passport_number', $passport_number);
    $stmt->bindParam(':visa_status', $visa_status);
    $stmt->bindParam(':emergency_contact_name', $emergency_contact_name);
    $stmt->bindParam(':emergency_contact_phone', $emergency_contact_phone);
    $stmt->bindParam(':created_at', $created_at);
    $stmt->bindParam(':updated_at', $updated_at);
    $stmt->bindParam(':image_path', $image_path);
    $stmt->bindParam(':password_hash', $password_hash);

    // Execute query
    if ($stmt->execute()) {
        echo "Employee added successfully.";
    } else {
        echo "Error adding employee.";
    }
}
?>
