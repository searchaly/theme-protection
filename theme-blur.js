(function() {
    // ✅ List of stores you want to lock
    var lockedStores = [
        "scammerstore.myshopify.com",
        "anotherbadclient.myshopify.com"
        // Add more stores here if needed
    ];

    var currentStore = window.location.hostname;

    // ✅ Soft lock if store matches
    if (lockedStores.includes(currentStore)) {
        document.body.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;">
                <h1 style="font-size:32px;color:#333;font-family:sans-serif;">Store Temporarily Unavailable</h1>
                <p style="margin-top:10px;font-size:18px;color:#777;">Please contact the developer to restore access.</p>
                <a href="https://wa.me/8801704718989" style="margin-top:20px;font-size:16px;color:#007bff;">Contact Support</a>
            </div>
        `;
    }
})();
