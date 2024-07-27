import DashboardLayout from './components/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 w-full">
        <div className="bg-purple-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">ORDER PENDING</h3>
          <p className="text-2xl mt-2">2</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">ORDER CANCEL</h3>
          <p className="text-2xl mt-2">0</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">ORDER PROCESS</h3>
          <p className="text-2xl mt-2">5</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">TODAY INCOME</h3>
          <p className="text-2xl mt-2">$9568.00</p>
        </div>
      </div>

      <div className="bg-white p-4 shadow-md rounded w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
            View All
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="xl:min-w-full text-left min-w-[1000px]">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Payment Method</th>
                <th className="pb-2">Order Date</th>
                <th className="pb-2">Delivery Date</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Total</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through your orders data */}
              <tr className="border-b">
                <td className="py-2">553840047075</td>
                <td className="py-2">cash</td>
                <td className="py-2">September 12th 2020</td>
                <td className="py-2">September 12th 2020</td>
                <td className="py-2"><span className="text-blue-500">processing</span></td>
                <td className="py-2">₹430</td>
                <td className="py-2">
                  <button className="text-blue-500 mr-2 hover:text-blue-700 transition">View</button>
                  <button className="text-blue-500 hover:text-blue-700 transition">Edit</button>
                </td>
              </tr>
              {/* Repeat for other orders */}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
