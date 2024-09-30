document.getElementById('carbon-footprint-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const energyConsumption = parseFloat(document.getElementById('energyConsumption').value);
    const energySource = document.getElementById('energySource').value;
    const coolingConsumption = parseFloat(document.getElementById('coolingConsumption').value);
    const pue = parseFloat(document.getElementById('pue').value);

    // Emission factors (kg CO2 per kWh)
    const emissionFactorNonRenewable = 0.5; // Example factor for non-renewable energy
    const emissionFactorRenewable = 0.05;   // Example factor for renewable energy

    // Determine the emission factor based on energy source
    let emissionFactor;
    if (energySource === 'non-renewable') {
        emissionFactor = emissionFactorNonRenewable;
    } else {
        emissionFactor = emissionFactorRenewable;
    }

    // Calculate total energy consumption (including cooling and PUE)
    const totalEnergyConsumption = energyConsumption * pue + coolingConsumption;

    // Calculate carbon footprint
    const carbonFootprint = totalEnergyConsumption * emissionFactor;

    // Display result
    document.getElementById('carbonFootprintOutput').innerText = `Your data center's carbon footprint is ${carbonFootprint.toFixed(2)} kg of CO2.`;
});