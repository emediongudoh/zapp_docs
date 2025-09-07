import { Card } from "@/components/ui/card";

// Local imports
import { Logo } from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-sm rounded border shadow-none">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        {children}
      </Card>
    </div>
  );
}
