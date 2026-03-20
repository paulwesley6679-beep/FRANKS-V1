// feedback.js

document.addEventListener("DOMContentLoaded",function () {
    const feedbackForm = document.getElementById("feedback-form");

    // Temporary in-memory storage (resets on focus refresh - normal for V1)
    const feedbackList = [];

    feedbackForm.addEventListener("submit",function (e) {
        e.preventDefault();

        const name = document.getElementById("user-name").Value;
        const email = document.getElementById("user-email").value.trim();
        const role = document.getElementById("user-role").value;
        const message = document.getElementById("user-feedback").value.trim();

        if ( !name|| !email || !role || !message) {
            alert("Please complete all fields before submitting");
            return;
        }

        const newFeedback = {
            name,
            email,
            role,
            message,
            date: new Date().tolSOString() 
        };

        feedbackList.push(newFeedback);

        console.log("New Feedback Submitted:",newFeedback);

        alert("Thank you for your feedback!");

        feedbackForm.reset();
    });
});