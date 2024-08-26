import React from "react";

export const subscribeToNewsletter = async (email)  => {
    const response = await fetch('https://api.newsletterservice.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': 'your-api-key',
        },
        body: JSON.stringify({
          email,
          audienceId: 'your-audience-id',
        }),
      });
    
      if (response.ok) {
        return { success: true, message: 'Subscription successful!' };
      } else {
        const data = await response.json();
        return { success: false, message: data.error || 'Subscription failed.' };
      }

}