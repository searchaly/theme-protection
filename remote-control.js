(function() {
    var locked = false; // Change to true if client scams you

    if (locked) {
        document.body.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;">
                <h1 style="font-size:30px;color:#333;">This store is temporarily unavailable.</h1>
                <p style="margin-top:10px;font-size:16px;color:#777;">Please contact support to restore access.</p>
            </div>
        `;
    }
})();

