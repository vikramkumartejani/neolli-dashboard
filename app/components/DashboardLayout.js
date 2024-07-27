const DashboardLayout = ({ children }) => {
  return (
    <div className="lg:flex w-full min-h-screen ">
      <div className="flex-1 w-full">
        <main className="p-4 sm:p-6 bg-gray-100 h-full w-full">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
