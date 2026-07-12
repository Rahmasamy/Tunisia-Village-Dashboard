import DashboardLayoutWrapper from "@/src/modules/dashboard/serviceProvider/features/DashboardLayoutWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>;
}
