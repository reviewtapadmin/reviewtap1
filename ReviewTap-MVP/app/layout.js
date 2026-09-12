import "./globals.css";

export const metadata = {
  title: "ReviewTap — Turn a tap into valuable feedback",
  description: "A modern NFC and QR review experience for local businesses."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}