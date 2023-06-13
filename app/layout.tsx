import "./globals.css";
import "./bulma-mystyles.css";

import NavigationBar from "@/components/NavigationBar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Richard Perez Jr. | Portfolio",
  description: "Richard's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="has-navbar-fixed-top">
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
