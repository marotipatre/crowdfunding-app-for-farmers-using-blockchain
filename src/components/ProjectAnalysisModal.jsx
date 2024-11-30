import React from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const ProjectAnalysisModal = ({ project, onClose }) => {
  // Dummy data for charts
  const yieldData = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        label: 'Crop Yield (tons/hectare)',
        data: [3.2, 3.5, 3.8, 3.6, 4.0],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const soilQualityData = {
    labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'pH'],
    datasets: [
      {
        label: 'Soil Quality Indicators',
        data: [65, 59, 80, 72],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const waterUsageData = {
    labels: ['Irrigation', 'Rainfall', 'Groundwater'],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Project Analysis</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Detailed analysis and historic data for {project.title}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-md font-medium mb-2">Crop Yield History</h4>
              <Line data={yieldData} />
            </div>
            <div>
              <h4 className="text-md font-medium mb-2">Soil Quality</h4>
              <Bar data={soilQualityData} />
            </div>
            <div>
              <h4 className="text-md font-medium mb-2">Water Usage</h4>
              <Pie data={waterUsageData} />
            </div>
            <div>
              <h4 className="text-md font-medium mb-2">Key Metrics</h4>
              <ul className="text-left list-disc list-inside">
                <li>Average Annual Revenue: ₹500,000</li>
                <li>Projected ROI: 15%</li>
                <li>Risk Assessment: Moderate</li>
                <li>Sustainability Score: 8/10</li>
              </ul>
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectAnalysisModal

