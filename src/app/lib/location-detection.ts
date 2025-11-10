// src/app/lib/location-detection.ts

// Comprehensive list of Kuwaiti cities and towns
export const KUWAITI_CITIES = [
  // Major Cities & Governorates
  'Kuwait City', 'Hawalli', 'Salmiya', 'Farwaniya', 'Jahra', 'Ahmadi',
  
  // Hawalli Governorate
  'Mangaf', 'Rumaithiya', 'Bayan', 'Mishref', 'Salwa', 'Shaab',
  'Siddiq', 'Jabriya', 'Surra', 'Hitteen', 'Shuhada', 'Zahra',
  
  // Capital Governorate (Al Asimah)
  'Sharq', 'Qibla', 'Mirgab', 'Dasman', 'Abdullah Al-Salem', 'Adiliya',
  'Kaifan', 'Khaldiya', 'Mansouriya', 'Nuzha', 'Qadsiya', 'Qortuba',
  'Rawda', 'Shamiya', 'Shuwaikh', 'Sulaibikhat', 'Yarmouk', 'Bneid Al-Gar',
  'Daiya', 'Dasma', 'Faiha', 'Ghornata', 'Keifan', 'Nahda',
  
  // Farwaniya Governorate
  'Andalous', 'Abdullah Al-Mubarak', 'Ardhiya', 'Khaitan', 'Ferdous',
  'Jleeb Al-Shuyoukh', 'Omariya', 'Rai', 'Rabiya', 'Rehab', 'Sabah Al-Nasser',
  'Farwaniya', 'Ardiya Industrial', 'Dhajeej',
  
  // Ahmadi Governorate
  'Fahaheel', 'Fintas', 'Mahboula', 'Mangaf', 'Abu Halifa', 'Sabahiya',
  'Wafra', 'Ahmadi', 'Riqqa', 'Hadiya', 'Zoor', 'Julaia', 'Khiran',
  'Mina Abdullah', 'Shuaiba', 'Fahaheel', 'Dahar',
  
  // Jahra Governorate
  'Jahra', 'Sulaibiya', 'Qasr', 'Taima', 'Naeem', 'Oyoun', 'Naseem',
  'Saad Al-Abdullah', 'Abdali', 'Kabd', 'Waha', 'Amghara',
  
  // Mubarak Al-Kabeer Governorate
  'Qurain', 'Qusour', 'Funaitees', 'Messila', 'Mubarak Al-Kabeer',
  'Sabah Al-Salem', 'Adan', 'Abu Ftaira', 'Coastal Strip',
  
  // Special Economic Zones & New Developments
  'Jaber Al-Ali', 'Sabah Al-Ahmad', 'South Saad Al-Abdullah', 'Khairan',
  'Al-Zour', 'Silk City', 'Boubyan Island', 'Failaka Island'
]

// Known global cities (for auto-detection)
const GLOBAL_CITIES = [
  'london', 'new york', 'dubai', 'mumbai', 'delhi', 'tokyo', 
  'beijing', 'paris', 'sydney', 'toronto', 'lagos', 'cairo',
  'johannesburg', 'cape town', 'kampala', 'dar es salaam',
  'addis ababa', 'kigali', 'accra', 'dakar', 'abuja', 'nairobi',
  'los angeles', 'chicago', 'singapore', 'hong kong', 'shanghai',
  'berlin', 'madrid', 'rome', 'amsterdam', 'brussels', 'riyadh',
  'jeddah', 'abu dhabi', 'doha', 'manama', 'muscat', 'amman',
  'beirut', 'baghdad', 'tehran', 'ankara', 'istanbul'
]

export type LocationContext = 'kuwait' | 'other' | 'uncertain'

export interface LocationDetectionResult {
  context: LocationContext
  confidence: 'high' | 'medium' | 'low'
  reason: string
  needsUserConfirmation: boolean
}

/**
 * Smart location detection algorithm
 * Returns detection result with confidence level
 */
export function detectLocationContext(city: string): LocationDetectionResult {
  if (!city || city.trim() === '') {
    return {
      context: 'uncertain',
      confidence: 'low',
      reason: 'No city provided',
      needsUserConfirmation: true
    }
  }

  const normalizedCity = city.toLowerCase().trim()

  // Case 1: Exact match with known Kuwaiti cities
  if (KUWAITI_CITIES.some(c => c.toLowerCase() === normalizedCity)) {
    return {
      context: 'kuwait',
      confidence: 'high',
      reason: 'Exact match with known Kuwaiti city',
      needsUserConfirmation: false
    }
  }

  // Case 2: Exact match with known global cities
  if (GLOBAL_CITIES.some(c => c.toLowerCase() === normalizedCity)) {
    return {
      context: 'other',
      confidence: 'high',
      reason: 'Exact match with known international city',
      needsUserConfirmation: false
    }
  }

  // Case 3: Partial match with Kuwaiti cities
  if (KUWAITI_CITIES.some(c => normalizedCity.includes(c.toLowerCase()) || c.toLowerCase().includes(normalizedCity))) {
    return {
      context: 'kuwait',
      confidence: 'medium',
      reason: 'Partial match with Kuwaiti city',
      needsUserConfirmation: true
    }
  }

  // Case 4: Contains "Kuwait" keyword
  if (normalizedCity.includes('kuwait') || normalizedCity.includes('kw')) {
    return {
      context: 'kuwait',
      confidence: 'medium',
      reason: 'Contains Kuwait reference',
      needsUserConfirmation: true
    }
  }

  // Case 5: Contains governorate suffix (Kuwaiti pattern)
  if (normalizedCity.match(/\bgovernorate$/i) || normalizedCity.match(/\bal[\s-]?/i)) {
    return {
      context: 'kuwait',
      confidence: 'medium',
      reason: 'Kuwaiti governorate naming pattern',
      needsUserConfirmation: true
    }
  }

  // Case 6: Partial match with global cities
  if (GLOBAL_CITIES.some(c => normalizedCity.includes(c) || c.includes(normalizedCity))) {
    return {
      context: 'other',
      confidence: 'medium',
      reason: 'Partial match with international city',
      needsUserConfirmation: true
    }
  }

  // Case 7: Unknown - needs user confirmation
  return {
    context: 'uncertain',
    confidence: 'low',
    reason: 'Unknown location',
    needsUserConfirmation: true
  }
}

/**
 * Validate and process location data
 */
export interface ProcessedLocationData {
  isGlobal: boolean
  locationConfirmation: string | null
  locationVerified: boolean
  locationDetection: string
  needsAdminReview: boolean
}

export function processLocationData(
  city: string,
  userConfirmation?: 'kuwait' | 'other'
): ProcessedLocationData {
  const detection = detectLocationContext(city)

  // If user provided confirmation, use it
  if (userConfirmation) {
    return {
      isGlobal: userConfirmation === 'other',
      locationConfirmation: userConfirmation,
      locationVerified: false,
      locationDetection: 'user_confirmed',
      needsAdminReview: detection.confidence !== 'high' // Review if not confident
    }
  }

  // Use auto-detection
  if (detection.confidence === 'high') {
    return {
      isGlobal: detection.context === 'other',
      locationConfirmation: null,
      locationVerified: true, // High confidence = auto-verified
      locationDetection: 'auto',
      needsAdminReview: false
    }
  }

  // Medium or low confidence
  return {
    isGlobal: detection.context === 'other',
    locationConfirmation: null,
    locationVerified: false,
    locationDetection: 'auto',
    needsAdminReview: true
  }
}