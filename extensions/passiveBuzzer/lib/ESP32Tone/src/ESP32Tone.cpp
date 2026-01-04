#include "ESP32Tone.h"

// Updated for ESP32 Arduino Core 3.x compatibility
// Old API (2.x): ledcAttachPin, ledcDetachPin, ledcWriteTone(channel, freq)
// New API (3.x): ledcAttach, ledcDetach, ledcWriteTone(pin, freq)

void tone(uint8_t pin, unsigned int frequency, unsigned long duration, uint8_t channel)
{
    // In ESP32 Arduino Core 3.x, ledcAttach takes (pin, freq, resolution)
    // Channel is automatically assigned
    ledcAttach(pin, frequency, 8);  // 8-bit resolution
    ledcWriteTone(pin, frequency);
    if (duration) {
        delay(duration);
        ledcWriteTone(pin, 0);  // Stop tone after duration
    }
}

void noTone(uint8_t pin, uint8_t channel)
{
    ledcWriteTone(pin, 0);
    ledcDetach(pin);
}
