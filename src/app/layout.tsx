import "./globals.css";
import Sidebar from "./dashboard/components/Sidebar";
import Topbar from "./dashboard/components/Topbar";

export const metadata = {
  title: "Task-Sprint",
  description: "Task and Project Management Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
