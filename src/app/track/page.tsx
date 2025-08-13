'use client'

import { useState } from 'react'
import { FiSearch, FiPackage, FiTruck, FiCheckCircle, FiClock } from 'react-icons/fi'

export default function Track() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Mock tracking data for demonstration
  const mockTrackingData = {
    'UAE123456': {
      status: 'delivered',
      trackingNumber: 'UAE123456',
      sender: 'John Doe',
      recipient: 'Jane Smith',
      service: 'Same Day Delivery',
      estimatedDelivery: '2024-01-15 18:00',
      actualDelivery: '2024-01-15 17:45',
      timeline: [
        {
          status: 'Order Placed',
          time: '2024-01-15 10:00',
          location: 'Dubai',
          description: 'Package pickup scheduled',
          completed: true
        },
        {
          status: 'Picked Up',
          time: '2024-01-15 12:30',
          location: 'Dubai - Business Bay',
          description: 'Package collected from sender',
          completed: true
        },
        {
          status: 'In Transit',
          time: '2024-01-15 14:15',
          location: 'Dubai - Distribution Center',
          description: 'Package sorted and dispatched',
          completed: true
        },
        {
          status: 'Out for Delivery',
          time: '2024-01-15 16:30',
          location: 'Dubai - Delivery Vehicle',
          description: 'Package out for final delivery',
          completed: true
        },
        {
          status: 'Delivered',
          time: '2024-01-15 17:45',
          location: 'Dubai - Marina',
          description: 'Package delivered successfully',
          completed: true
        }
      ]
    },
    'UAE789012': {
      status: 'in-transit',
      trackingNumber: 'UAE789012',
      sender: 'ABC Company',
      recipient: 'XYZ Store',
      service: 'Express Delivery',
      estimatedDelivery: '2024-01-16 14:00',
      timeline: [
        {
          status: 'Order Placed',
          time: '2024-01-15 09:00',
          location: 'Abu Dhabi',
          description: 'Package pickup scheduled',
          completed: true
        },
        {
          status: 'Picked Up',
          time: '2024-01-15 11:00',
          location: 'Abu Dhabi - Downtown',
          description: 'Package collected from sender',
          completed: true
        },
        {
          status: 'In Transit',
          time: '2024-01-15 15:30',
          location: 'Dubai - Distribution Center',
          description: 'Package in transit to destination',
          completed: true
        },
        {
          status: 'Out for Delivery',
          time: 'Estimated: 2024-01-16 12:00',
          location: 'Dubai',
          description: 'Package will be out for delivery',
          completed: false
        }
      ]
    }
  }

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number')
      return
    }

    setIsLoading(true)
    setError('')
    
    // Simulate API call
    setTimeout(() => {
      const result = mockTrackingData[trackingNumber as keyof typeof mockTrackingData]
      if (result) {
        setTrackingResult(result)
        setError('')
      } else {
        setTrackingResult(null)
        setError('Tracking number not found. Please check and try again.')
      }
      setIsLoading(false)
    }, 1000)
  }

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <FiCheckCircle className="h-5 w-5 text-green-500" />
    }
    
    switch (status.toLowerCase()) {
      case 'order placed':
        return <FiPackage className="h-5 w-5 text-gray-400" />
      case 'picked up':
        return <FiPackage className="h-5 w-5 text-blue-500" />
      case 'in transit':
        return <FiTruck className="h-5 w-5 text-yellow-500" />
      case 'out for delivery':
        return <FiTruck className="h-5 w-5 text-orange-500" />
      case 'delivered':
        return <FiCheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <FiClock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-600 bg-green-100'
      case 'in-transit':
        return 'text-yellow-600 bg-yellow-100'
      case 'picked-up':
        return 'text-blue-600 bg-blue-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Track Your Order
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter your tracking number to get real-time updates on your package delivery status
          </p>
        </div>

        {/* Tracking Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (e.g., UAE123456)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Tracking...
                </>
              ) : (
                <>
                  <FiSearch className="mr-2" />
                  Track Package
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </div>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Package Info Header */}
            <div className="bg-primary-50 p-6 border-b">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Tracking: {trackingResult.trackingNumber}
                  </h2>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingResult.status)}`}>
                    {trackingResult.status === 'delivered' ? 'Delivered' : 
                     trackingResult.status === 'in-transit' ? 'In Transit' : 
                     trackingResult.status}
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 text-sm text-gray-600">
                  <div>Service: <span className="font-medium">{trackingResult.service}</span></div>
                  <div>
                    {trackingResult.status === 'delivered' ? 'Delivered: ' : 'Est. Delivery: '}
                    <span className="font-medium">
                      {trackingResult.actualDelivery || trackingResult.estimatedDelivery}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div className="p-6 border-b bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sender</h3>
                  <p className="text-gray-600">{trackingResult.sender}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recipient</h3>
                  <p className="text-gray-600">{trackingResult.recipient}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Delivery Timeline</h3>
              <div className="space-y-4">
                {trackingResult.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getStatusIcon(event.status, event.completed)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className={`text-sm font-medium ${event.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {event.status}
                          </p>
                          <p className={`text-sm ${event.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                            {event.description}
                          </p>
                          <p className={`text-xs ${event.completed ? 'text-gray-500' : 'text-gray-400'}`}>
                            {event.location}
                          </p>
                        </div>
                        <div className={`text-sm ${event.completed ? 'text-gray-600' : 'text-gray-400'} mt-1 sm:mt-0`}>
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Demo Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Try Demo Tracking Numbers:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <div className="font-medium text-gray-900">UAE123456</div>
              <div className="text-sm text-gray-600">Delivered package</div>
            </div>
            <div className="bg-white p-4 rounded border">
              <div className="font-medium text-gray-900">UAE789012</div>
              <div className="text-sm text-gray-600">Package in transit</div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Need Help with Tracking?
          </h3>
          <p className="text-gray-600 mb-6">
            If you're having trouble tracking your package or need assistance, our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/971501234567?text=I need help tracking my package"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Support
            </a>
            <a href="tel:+971501234567" className="btn-outline">
              Call: +971 50 123 4567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}