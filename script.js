window.onload = function() {
    var gauge1 = new JustGage({
        id: "gauge1", 
        value: 50, 
        min: 0, 
        max: 100, 
        title: "Temperature",
        label: "°C"
    });

    // Simulate sensor data (replace with real data if needed)
    setInterval(function() {
        let randomValue = Math.floor(Math.random() * 100);
        gauge1.refresh(randomValue);
    }, 2000);
};
