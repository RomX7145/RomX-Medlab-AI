import React from 'react';

const Subscription = () => {
  const handleSubscribe = () => {
    window.location.href = "https://www.paypal.com/subscribe?hosted_button_id=romanusilegbedion919@gmail.com";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Subscription Plans</h2>
      <div className="mt-4">
        <p><strong>Free:</strong> Limited chat + learning features</p>
        <p><strong>Premium:</strong> Full access to diagnostics, learning, updates</p>
        <button onClick={handleSubscribe} className="bg-blue-600 text-white px-4 py-2 mt-4">Subscribe with PayPal</button>
      </div>
    </div>
  );
};

export default Subscription;
