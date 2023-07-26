function navigateToservice() {
    window.location.href = '#service';
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkbox = document.getElementById('subscribeCheckbox');

    if (!emailValue.match(emailRegex)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return false; // Prevent form submission
    }

    if (!checkbox.checked) {
      alert('Please select the checkbox to subscribe.');
      return false; // Prevent form submission
    }

    return true;
}