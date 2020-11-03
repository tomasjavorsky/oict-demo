export type Languages = 'cs' | 'en'

export interface ParkingSpotData {
    properties: {
      parking_type: {
        description: string
      }
      name: string
      num_of_free_places: number
      total_num_of_places: number
      address: {
        street_address: string
        address_locality: string
      }
    }
  }