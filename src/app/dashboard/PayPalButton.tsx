"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal: unknown;
  }
}

interface PayPal {
  Buttons: (options: {
    createOrder: (
      data: unknown,
      actions: { order: { create: (options: { purchase_units: { amount: { value: string } }[] }) => Promise<string> } }
    ) => Promise<string>;
    onApprove: (
      data: unknown,
      actions: { order: { capture: () => Promise<{ payer: { name: { given_name: string } } }> } }
    ) => Promise<void>;
  }) => { render: (element: HTMLElement) => void };
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
        (window.paypal as PayPal).Buttons({
          createOrder: (
            data: unknown,
            actions: { order: { create: (options: { purchase_units: { amount: { value: string } }[] }) => Promise<string> } }
          ) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: amount } }],
            });
          },
          onApprove: (
            data: unknown,
            actions: { order: { capture: () => Promise<{ payer: { name: { given_name: string } } }> } }
          ) => {
            return actions.order.capture().then((details: { payer: { name: { given_name: string } } }) => {
              alert("Pagamento completato da " + details.payer.name.given_name);
              if (onSuccess) onSuccess();
              // Qui puoi chiamare una tua API per salvare l'ordine
            });
          },
        }).render(paypalRef.current);
      }
    }
  }, [amount, onSuccess]);

  return <div ref={paypalRef}></div>;
} 