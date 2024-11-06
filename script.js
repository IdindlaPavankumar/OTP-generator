function generateOTP() {
    const otpLength = 6; // Length of OTP
    const characters = '0123456789'; // Allowed characters (digits for OTP)
    let otp = '';

    for (let i = 0; i < otpLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      otp += characters[randomIndex];
    }

    // Display the OTP in the div with id="otp"
    document.getElementById('otp').textContent = otp;
  }