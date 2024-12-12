#include <Wire.h>                // For I2C communication
#include <Adafruit_GFX.h>        // Core graphics library
#include <Adafruit_SSD1306.h> 

#define SCREEN_WIDTH 128         // OLED display width, in pixels
#define SCREEN_HEIGHT 64         // OLED display height, in pixels

// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)
#define OLED_RESET -1            // Reset pin (or -1 if sharing Arduino reset pin)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  // Initialize OLED display with I2C address 0x3C (for most OLED modules)
  if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { 
    Serial.println(F("SSD1306 allocation failed"));
    for(;;); // Don't proceed, loop forever
  }

  // Clear the buffer
  display.clearDisplay();

  // Set text size and color
  display.setTextSize(7);       // Normal 1:1 pixel scale
  display.setTextColor(SSD1306_WHITE); // Draw white text
  display.setCursor(0,0);       // Start at top-left corner

  // Display text
  display.println(F("25%"));
  display.display();            // Display buffer on the screen

}

void loop() {
  // put your main code here, to run repeatedly:

}
