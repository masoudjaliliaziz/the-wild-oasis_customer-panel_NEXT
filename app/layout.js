import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "welcome / The Wild Oasis ",
  },
  description:
    "Luxurios cabin hotel,located in the heart of Italian Dolomities, surrounded by beatifull mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>

        <footer>Copyright by the loyrnyCode</footer>
      </body>
    </html>
  );
}
