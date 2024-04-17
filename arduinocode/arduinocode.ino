#include <Arduino.h>
#include <WiFi.h>
#include <ArduinoOTA.h>

const char* ssid = "Jaffri";
const char* password = "jaffri123";
const int relayPin = 32;
const int currentSensorPin = 39;

const char* serverAddress = "http://127.0.0.1:8000/"; // Update with your Django server address
const int serverPort = 8000; // Adjust the port as needed
const String apiUrl = "/api/energy/";

WiFiServer server(80);

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Initialize ArduinoOTA
  ArduinoOTA.begin();

  pinMode(relayPin, OUTPUT);
  pinMode(currentSensorPin, INPUT);

  server.begin();
}

void loop() {
  // Handle OTA updates
  ArduinoOTA.handle();

  // Read current sensor data
  int sensorValue = analogRead(currentSensorPin);

  // Convert analog reading to voltage (0-3.3V)
  float voltage = sensorValue * (3.3 / 4095.0);

  // Convert voltage to current (assuming 5A max and 5V reference)
  float current = (voltage - 2.5) / 0.066;

  // Print sensor data to serial monitor
  Serial.print("Current Sensor Data: ");
  Serial.print(current);
  Serial.println(" Amps");

  // Send data to Django backend
  sendSensorData(current);

  delay(1000); // Adjust delay to slow down data transmission

  WiFiClient client = server.available();
  if (client) {
    Serial.println("New Client.");
    String currentLine = "";
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        currentLine += c;
        if (c == '\n' || c == '\r') {
          // Check for the end of headers
          if (currentLine.endsWith("\r\n\r\n") || currentLine.endsWith("\n\n")) {
            break;
          }
        }
      }
    }

    Serial.println(currentLine);  // Print the received request for debugging

    // Process the request and send the response...
    if (currentLine.startsWith("GET /on")) {
      // Respond to the /on request
      digitalWrite(relayPin, HIGH);  // Turn on the relay
      client.println("HTTP/1.1 200 OK");
      client.println("Content-type:text/html");
      client.println("Connection: close");
      client.println();
      client.println("Relay is now ON");  // Send a response back to the client
      Serial.println("Received /on request");
    } else if (currentLine.startsWith("GET /off")) {
      // Respond to the /off request
      digitalWrite(relayPin, LOW);  // Turn off the relay
      client.println("HTTP/1.1 200 OK");
      client.println("Content-type:text/html");
      client.println("Connection: close");
      client.println();
      client.println("Relay is now OFF");  // Send a response back to the client
      Serial.println("Received /off request");
    }

    client.stop();
    Serial.println("Client Disconnected.");
  }
}

void sendSensorData(float data) {
  // Create JSON payload
  String payload = "{\"current_data\": " + String(data) + "}";

  // Connect to the server
  WiFiClient client;
  if (client.connect(serverAddress, serverPort)) {
    // Send HTTP POST request
    client.println("POST " + apiUrl + " HTTP/1.1");
    client.println("Host: " + String(serverAddress));
    client.println("Content-Type: application/json");
    client.println("Content-Length: " + String(payload.length()));
    client.println();
    client.println(payload);

    // Wait for response
    delay(1000);
    client.flush();
    client.stop();
  }
}
