<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db.php';

// Get the profile id from the URL if it exists
$id = isset($_GET['id']) ? $_GET['id'] : null;
// Check if an id was passed in the URL
if ($id) {
    // Prepare the query to fetch the specific profile by id
    $stmt = $conn->prepare("SELECT id, name, email, title, bio, image_url FROM user_profiles WHERE id = ?");
    $stmt->bind_param("i", $id); // "i" specifies the type (integer)

    // Execute the query
    $stmt->execute();

    // Bind the result variables
    $stmt->bind_result($id, $name, $email, $title, $bio, $image_url);

    // Fetch the result
    if ($stmt->fetch()) {
        $profile = [
            "id" => $id,
            "name" => $name,
            "email" => $email,
            "title" => $title,
            "bio" => $bio,
            "image_url" => $image_url
        ];
        // Return the profile in JSON format
        echo json_encode($profile);
    } else {
        // Return an error message if no profile was found
        echo json_encode(["error" => "Profile not found"]);
    }

    // Close the prepared statement
    $stmt->close();
}
$conn->close();
?>
