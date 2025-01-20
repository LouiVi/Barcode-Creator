cfg.Light, cfg.Portrait, cfg.MUI;

function OnStart() {
    var lay = app.CreateLayout("Linear", "VCenter,FillXY");
    
    // Define the data for the barcode
    var barcodeData = "12345"; // Your data here
    var barcodeText = "*" + barcodeData + "*"; // Enclose in asterisks for Code 39
    
    // Create a text view for the barcode
    var barcodeView = app.CreateText(barcodeText, 0.72, 0.1);
    barcodeView.SetFontFile("Misc/3of9.ttf"); // Ensure the font file is in the correct directory
    barcodeView.SetTextSize(80); // Set font size
    barcodeView.SetTextColor("Black"); // Set text color
    
    // Create a human-readable text view
    var humanReadableView = app.CreateText(barcodeData, 0.72, 0.1);
    humanReadableView.SetTextSize(20); // Set font size for human-readable text
    humanReadableView.SetTextColor("Black"); // Set text color for human-readable text
    
    // Add both views to the layout
    lay.AddChild(barcodeView);
    lay.AddChild(humanReadableView);
    
    app.AddLayout(lay);
}