// IVF transfer date (change this to the actual transfer date)
const transferDate = new Date('2025-07-16'); // YYYY-MM-DD format

// Function to calculate days post-transfer
function calculatePostTransferDays() {
    const today = new Date();
    const diffTime = today - transferDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
}

// Function to calculate the week and trimester
function calculateWeekAndTrimester() {
    const postTransferDays = calculatePostTransferDays();
    
    // Week is calculated based on 7-day increments
    const week = Math.floor(postTransferDays / 7) + 1;
    
    // Trimester logic: First trimester is 0-12 weeks, second is 13-26 weeks, third is 27 weeks and onward
    let trimester = '';
    if (week <= 12) {
        trimester = 'First Trimester';
    } else if (week <= 26) {
        trimester = 'Second Trimester';
    } else {
        trimester = 'Third Trimester';
    }
    
    return { week, trimester };
}

// Displaying the data in the widget
function updateWidget() {
    const postTransferDays = calculatePostTransferDays();
    const { week, trimester } = calculateWeekAndTrimester();
    
    document.getElementById('date').innerText = `Today's Date: ${new Date().toLocaleDateString()}`;
    document.getElementById('postTransferDay').innerText = `Post Transfer: ${postTransferDays} days (10dp5dt equivalent)`;
    document.getElementById('week').innerText = `Current Week: ${week}`;
    document.getElementById('trimester').innerText = `Trimester: ${trimester}`;
}

// Update widget on load
window.onload = updateWidget;
