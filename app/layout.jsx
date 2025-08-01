import "../public/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "photoswipe/style.css";
import "rc-slider/assets/index.css";
import ClientLayout from "@/components/common/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="popup-loader">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
