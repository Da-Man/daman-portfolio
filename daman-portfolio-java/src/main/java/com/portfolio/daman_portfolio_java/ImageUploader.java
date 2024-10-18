package com.portfolio.daman_portfolio_java;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class ImageUploader {

    public static void main(String[] args) {
        try {
            // Path to the local image
            String imagePath = "aint_much.jpg";
            
            // Read the image file into a byte array
            Path path = Paths.get(imagePath);
            byte[] imageBytes = Files.readAllBytes(path);
            
            // URL of the REST API endpoint
            String apiUrl = "http://localhost:8080/upload-image";
            
            // Send the image over a POST request
            uploadImage(apiUrl, imageBytes);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void uploadImage(String apiUrl, byte[] imageBytes) throws IOException {
        // Create a connection to the API endpoint
        URL url = new URL(apiUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        
        // Set request method to POST
        connection.setRequestMethod("POST");
        
        // Enable input/output streams
        connection.setDoOutput(true);
        connection.setDoInput(true);
        
        // Set request headers
        connection.setRequestProperty("Content-Type", "application/octet-stream"); // Sending binary data
        connection.setRequestProperty("Content-Length", String.valueOf(imageBytes.length));
        
        // Write the image bytes to the output stream
        try (OutputStream outputStream = connection.getOutputStream()) {
            outputStream.write(imageBytes);
            outputStream.flush();
        }

        // Get the response code
        int responseCode = connection.getResponseCode();
        System.out.println("Response Code: " + responseCode);

        // Read the response (if needed)
        if (responseCode == HttpURLConnection.HTTP_OK) {
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
            }
        } else {
            System.out.println("Failed to upload image. Response code: " + responseCode);
        }
    }
}

