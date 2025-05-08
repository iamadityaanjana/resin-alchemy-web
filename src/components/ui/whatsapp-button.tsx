
import { Button, ButtonProps } from "./button";

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string;
  message?: string;
  children: React.ReactNode;
}

export function WhatsAppButton({
  phoneNumber,
  message = "",
  children,
  className,
  ...props
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#25D366]/80 text-white ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
