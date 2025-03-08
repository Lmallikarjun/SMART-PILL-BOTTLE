window.onload = function() {
    // Create the gauge
    var gauge1 = new JustGage({
        id: "gauge1", 
        value: 0,  // Initial value
        min: 0, 
        max: 100,  // Adjust according to your sensor's range
        title: "Sensor Data",
        label: "Units"  // Replace with the correct unit (e.g., °C for temperature)
    });

    // Fetch data from ThingSpeak (replace with your channel ID and API key)
    const apiUrl = "https://api.thingspeak.com/channels/YOUR_CHANNEL_ID/feeds.json?api_key=YOUR_READ_API_KEY&results=1";

    // Fetch the latest data from ThingSpeak
    function fetchData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Assuming the sensor data is in field1, adjust accordingly
                let sensorValue = data.feeds[0].field1;  // Update based on your field
                gauge1.refresh(sensorValue);  // Update the gauge with the latest value

                // Display the current sensor data in the status section
                document.getElementById("status").innerText = "Current Sensor Value: " + sensorValue;
            })
            .catch(error => console.error('Error fetching data from ThingSpeak:', error));
    }

    // Fetch data immediately and then periodically (e.g., every 10 seconds)
    fetchData();  // Initial fetch
    setInterval(fetchData, 10000);  // Update every 10 seconds
};
