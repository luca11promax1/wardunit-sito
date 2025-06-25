"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal: any;
  }
}

const PAYPAL_CLIENT_ID = "Aab3IZtnPuvggG_GtqmwHpsDa_E_QXeSLrL_5XHnFVtebbuYNQhQo2lU8yTwsmh9d33IWZU7fGSob5tE";

export default function PayPalButton({ amount = "4.99", onSuccess }: { amount?: string, onSuccess?: () => void }) {
  const paypalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Carica lo script PayPal solo una volta
    if (!window.paypal) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR`;
      script.async = true;
      script.onload = () => renderButton();
      document.body.appendChild(script);
    } else {
      renderButton();
    }

    function renderButton() {
      if (window.paypal && paypalRef.current) {
        window.paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: amount } }],
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              alert("Pagamento completato da " + details.payer.name.given_name);
              if (onSuccess) onSuccess();
              // Qui puoi chiamare una tua API per salvare l'ordine
            });
          },
        }).render(paypalRef.current);
      }
    }
    // eslint-disable-next-line
  }, [amount, onSuccess]);

  return <div ref={paypalRef}></div>;
} 