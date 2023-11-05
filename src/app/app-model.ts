// export interface IBrands {
//   id: string;
//   img: string;
//   name: string;
//   abstract: string;
//   cars: ICars[];
//   features: Ifeature[];
// }

// export interface Ifeature {
//   title: string;
//   abstract: string;
// }

// export interface ICars {
//   name: string;
//   model: string;
//   abstract: string[];
//   features: string[];
//   description: string;
//   price: string;
//   parking: string;
//   guidelines: string[];
//   rating: string[];
//   pick: IPick[]
//   review: IReview[]
// }

// export interface IReview {
//   username: string;
//   star: number;
//   review: string;
//   img: string;
// }

// export interface IPick {
//   address: string;
//   price: string | number;
// }

// // const car: ICars = {
// //   name: 'Car Name',
// //   model: 'Car Model',
// //   features: ['Feature 1', 'Feature 2', 'Feature 3'],
// //   description: 'Car Description',
// // };

// export interface Turo {
//   menu: Menu;
//   carDetails: CarDetails;
//   hostedBy: HostedBy;
//   description: string;
//   features: string[];
//   extras: Extra[];
//   parkingDetails: string;
//   guidelines: string[];
//   ratingsAndReviews: RatingsAndReviews;
//   tripDetails: TripDetails;
// }

// export interface Menu {
//   title: string;
//   subtitle: string;
//   items: MenuItem[];
// }

// export interface MenuItem {
//   title: string;
//   number: number;
// }

// export interface CarDetails {
//   title: string;
//   model: string;
//   version: string;
//   trips: string;
//   mpg: string;
//   fuelType: string;
//   doors: number;
//   seats: number;
// }

// export interface HostedBy {
//   name: string;
//   rating: number;
//   description: string;
//   trips: number;
//   joinedDate: string;
//   responseTime: string;
// }

// export interface Extra {
//   name: string;
//   description: string;
//   price: number;
// }

// export interface RatingsAndReviews {
//   overallRating: number;
//   cleanliness: number;
//   maintenance: number;
//   communication: number;
//   convenience: number;
//   accuracy: number;
//   reviews: Review[];
// }

// export interface Review {
//   author: string;
//   date: string;
//   comment: string;
// }

// export interface TripDetails {
//   startDate: string;
//   endDate: string;
//   location: Location;
//   discount: number;
//   cancellationPolicy: string;
//   distanceIncluded: DistanceIncluded;
//   insuranceAndProtection: string;
// }

// export interface Location {
//   pickupReturnLocation: string;
//   freePickupLocations: string[];
//   delivery: Delivery;
// }

// export interface Delivery {
//   within10Miles: number;
//   fee: number;
//   freeLocations: string[];
// }

// export interface DistanceIncluded {
//   includedMiles: number;
//   feePerAdditionalMile: number;
// }

// car-hire.model.ts

// Location Interface
export interface Location {
  city: string;
  airport: string;
  address: string;
  hotel: string;
}

// Overview Interface
export interface Overview {
  features: string;
  reviews: string;
}


// Car interface
export interface Car {
  title: string;
  rating: number;
  trips: number;
  mpg: number;
  fuelType: string;
  doors: number;
  seats: number;
  host: Host;
  description: string;
  features: string[];
  extras: Extra[];
  reviews: Review[];
}

// Host interface
export interface Host {
  name: string;
  rating: number;
  trips: number;
  joined: string;
  responseTime: string;
}

// Extra interface
export interface Extra {
  name: string;
  price: number;
}

// Review interface
export interface Review {
  reviewer: string;
  date: string;
  comment: string;
}


// Description Interface
export interface Description {
  about: string;
  rules: string;
  faqs: string;
  deluxeClass: string;
}

// Extras Interface
export interface Extras {
  mustBe25: boolean;
  automaticTransmission: boolean;
  longTermCar: boolean;
}

// Guidelines Interface
export interface Guidelines {
  fuelType: string;
}

// Ratings and Reviews Interface
export interface RatingsAndReviews {
  overallRating: number;
  cleanliness: number;
  maintenance: number;
  communication: number;
  convenience: number;
  accuracy: number;
  totalRatings: number;
}

// Review Interface
export interface Review {
  author: string;
  date: string;
  comment: string;
}

// Trip Interface
export interface Trip {
  startDate: string;
  endDate: string;
  pickupReturnLocation: string;
  discount: number;
  cancellationPolicy: string;
  distanceIncluded: number;
  feePerAdditionalMile: number;
  insurance: string;
}

// Car Hire Interface
export interface CarHire {
  location: Location;
  overview: Overview;
  car: Car;
  host: Host;
  description: Description;
  extras: Extras;
  guidelines: Guidelines;
  ratingsAndReviews: RatingsAndReviews;
  reviews: Review[];
  trip: Trip;
}

// car.interface.ts
export interface Car {
  name: string;
  rating: number;
  trips: number;
  host: Host;
  pricePerDay: number;
}

// booking.interface.ts
export interface Booking {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

// review.interface.ts
export interface Review {
  username: string;
  carModel: string;
  date: string;
  comment: string;
}

// faq.interface.ts
export interface FAQ {
  question: string;
  answer: string;
}
