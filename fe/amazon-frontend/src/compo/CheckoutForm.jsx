import React, { useState } from 'react';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isCheckoutCompleted, setCheckoutCompleted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    // Place your checkout logic here, such as sending an API request to create a Stripe payment session

    // Redirect to Stripe payment link
    window.location.href = 'https://buy.stripe.com/test_6oE7wnetseJfaAwfYY';

    // Set checkout completion status to trigger animation
    // setTimeout(() => {
        // Set checkout completion status to trigger animation
        setCheckoutCompleted(true);
    //   }, 1000);
      };

  return (
    <div
      className={`container ${isCheckoutCompleted ? 'success' : ''}`}
      style={styles.container}
    >
      {isCheckoutCompleted ? (
        <p className="success-message">Checkout completed successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="address" style={styles.label}>
              Address:
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="paymentMethod" style={styles.label}>
              Payment Method:
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
              style={styles.input}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="amazonPay">Amazon Pay</option>
            </select>
          </div>
          <button type="submit" style={styles.button}>
            Complete Checkout
          </button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    fontSize: '14px',
    width: '100%',
    marginLeft: 'auto',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    fontSize: '16px',
    backgroundColor: '#f0c14b',
    color: '#111',
    cursor: 'pointer',
  },
  successMessage: {
    color: '#4caf50',
    fontWeight: 'bold',
    animation: 'fadeIn 0.5s ease-in-out',
  },
};

// CSS styles for animations
const animationStyles = `
  .container.success {
    background-color: #c8e6c9;
    transition: background-color 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Apply the animation styles dynamically
const styleSheet = document.createElement('style');
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);
